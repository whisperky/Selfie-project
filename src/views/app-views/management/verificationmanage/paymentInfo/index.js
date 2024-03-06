import React, { Component } from "react";
import {
  Card,
  Table,
  Tag,
  Tooltip,
  message,
  Button,
  Modal,
  Layout,
  Typography,
  Radio,
  Input,
  Row,
  Col,
  Image,
  Space,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  CompressOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";

const { Header, Footer, Sider, Content } = Layout;

const { TextArea } = Input;

export class PaymentInfo extends Component {
  state = {
    users: userData,
    userProfileVisible: false,
    selectedUser: null,
    isModalOpen: false,
    radioValue: "",
    rejectReasonValue: "",
  };

  handleStatus = (user, newStatus) => {
    this.setState((prevState) => ({
      users: prevState.users.map((item) => {
        if (item.id === user.id) {
          return { ...item, status: newStatus };
        }
        return item;
      }),
    }));
  };

  handleRejectReason = (user, newRejectReason) => {
    this.setState((prevState) => ({
      users: prevState.users.map((item) => {
        if (item.id === user.id) {
          return { ...item, rejectReason: newRejectReason };
        }
        return item;
      }),
    }));
  };

  showModal = (user) => {
    console.log(user.status);
    this.setState({
      isModalOpen: true,
      selectedUser: user,
      radioValue: user.status,
      rejectReasonValue: user.rejectReason,
    });
  };
  handleOk = () => {
    this.setState({ isModalOpen: false });
    this.handleStatus(this.state.selectedUser, this.state.radioValue);
  };
  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  handleStatusChange = (index, newStatus) => {
    const updatedLists = [...this.state.lists];
    updatedLists[index] = newStatus;
    this.setState({ lists: updatedLists });
    console.log(this.state.lists);
  };

  onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
    // this.setState((prevState) => ({
    //   users: prevState.users.map((item) => {
    //     if (item.id === this.state.selectedUser.id) {
    //       return { ...item, status: this.state.radioValue };
    //     }
    //     return item;
    //   }),
    // }));
    this.handleStatus(this.state.selectedUser, this.state.radioValue);
  };

  onChangeRejectReason = (e) => {
    this.setState({
      rejectReasonValue: e.target.value,
    });
    this.handleRejectReason(
      this.state.selectedUser,
      this.state.rejectReasonValue
    );
  };

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;

    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Last online",
        dataIndex: "lastOnline",
        render: (date) => <span>{dayjs.unix(date).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) =>
          dayjs(a.lastOnline).unix() - dayjs(b.lastOnline).unix(),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status, elm) =>
          elm.status === "blocked" ? (
            <Tooltip title={elm.rejectReason}>
              <Tag
                className="text-capitalize"
                color={
                  status === "active"
                    ? "cyan"
                    : status === "pending"
                    ? "blue"
                    : "red"
                }
              >
                {status}
              </Tag>
            </Tooltip>
          ) : (
            <Tag
              className="text-capitalize"
              color={
                status === "active"
                  ? "cyan"
                  : status === "pending"
                  ? "blue"
                  : "red"
              }
            >
              {status}
            </Tag>
          ),
        sorter: {
          compare: (a, b) => a.status.length - b.status.length,
        },
      },
      {
        title: "Actions",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right d-flex justify-content-end">
            {/* <Tooltip title="approve">
              <Button
                className="mr-2"
                icon={<CheckOutlined />}
                onClick={() => {
                  this.handleStatus(elm, "active");
                }}
                disabled={elm.status === "active"}
              />
            </Tooltip>
            <Tooltip title="block">
              <Button
                className="mr-2"
                icon={<CloseOutlined />}
                onClick={() => {
                  this.handleStatus(elm, "blocked");
                }}
                disabled={elm.status === "blocked"}
              />
            </Tooltip> */}
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => this.showModal(elm)}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <div className="table-responsive">
          <Table columns={tableColumns} dataSource={users} rowKey="id" />
        </div>
        <Modal
          open={this.state.isModalOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          // okButtonProps={{ disabled: true }}
          okButtonProps={{
            disabled:
              this.state.radioValue === "blocked" &&
              this.state.rejectReasonValue === "",
          }}
          centered
          width="40%"
        >
          <Layout>
            <Header style={{ padding: "0 20px" }}>
              <p style={{ fontSize: "28px", marginBottom: "0px" }}>
                Payment Information
              </p>
            </Header>
            <Content
              style={{
                padding: "0 50px",
                background: "none",
              }}
            >
              <Typography style={{ marginBottom: "10px" }}>
                <Image src="/img/others/img-8.png" alt="visa" />
                <Typography.Text style={{ fontSize: "18px" }}>
                  Name: {this.state.selectedUser?.name}
                </Typography.Text>
              </Typography>
              <Typography style={{ marginBottom: "10px" }}>
                <CalendarOutlined style={{ padding: "0 10px" }} />
                <Typography.Text style={{ fontSize: "18px" }}>
                  Birthday: {this.state.selectedUser?.personalInfo.birthday}
                </Typography.Text>
              </Typography>
              <Typography style={{ marginBottom: "10px" }}>
                <CompressOutlined style={{ padding: "0 10px" }} />
                <Typography.Text style={{ fontSize: "18px" }}>
                  Location: {this.state.selectedUser?.personalInfo.location}
                </Typography.Text>
              </Typography>
              <Typography style={{ margin: "20px" }}>
                <Radio.Group
                  onChange={this.onChangeRadio}
                  value={this.state.radioValue}
                >
                  <Radio value={"active"}>Approve</Radio>
                  <Radio value={"blocked"}>Reject</Radio>
                </Radio.Group>
              </Typography>
              {this.state.selectedUser?.status === "blocked" ||
              this.state.radioValue === "blocked" ? (
                <TextArea
                  value={this.state.rejectReasonValue}
                  onChange={this.onChangeRejectReason}
                  placeholder="Please enter the reject reason."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              ) : null}
            </Content>
          </Layout>
        </Modal>
      </Card>
    );
  }
}

export default PaymentInfo;
