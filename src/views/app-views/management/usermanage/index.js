import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button, Select } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import axios from "axios";
import userData from "assets/data/user-list.data.json";

import { Avatar } from "antd";
import { modalModeTypes, createCardObject, AssigneeAvatar } from "./utils";
import { memberIds } from "./ScrumboardData";

export class UserList extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: null,
    members: memberIds,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/management/allUsers").then((res) => {
      this.setState({
        users: res.data.allUser,
      });
    });
  }

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

  handleRole = (user, value) => {
    // this.setState((prevState) => ({
    //   users: prevState.users.map((item) => {
    //     if (item.id === user.id) {
    //       return { ...item, role: value };
    //     }
    //     return item;
    //   }),
    // }));
    const newUser = { ...user, role: value };
    console.log(newUser);
    axios
      .post("http://localhost:5000/api/management/changeRole", newUser)
      .then((res) => {
        console.log(res.data);
      });
  };

  render() {
    const { users, userProfileVisible, selectedUser, members } = this.state;

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
        title: "Role",
        dataIndex: "role",
        render: (_, elm) => (
          <Select
            defaultValue={
              elm.role === 0
                ? "User"
                : elm.role === 1
                ? "Agent"
                : elm.role === 2
                ? "Admin"
                : elm.role === 3
                ? "Super Admin"
                : null
            }
            options={[
              { value: 2, label: "Admin" },
              { value: 1, label: "Agent" },
              { value: 0, label: "User" },
            ]}
            onChange={(value) => this.handleRole(elm, value)}
          ></Select>
        ),
        sorter: {
          compare: (a, b) => a.role.length - b.role.length,
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
        title: "Selfies",
        dataIndex: "selfie",
        render: (members) => (
          <div className="d-flex align-items-center">
            {this.state.members.map((member, i) =>
              i < 4 ? (
                <AssigneeAvatar key={member} id={member} size={30} chain />
              ) : null
            )}
            <Avatar className="ml-n2" size={30}>
              <span className="text-gray font-weight-semibold font-size-base">
                +{this.state.members.length}
              </span>
            </Avatar>
          </div>
        ),
        sorter: (a, b) =>
          dayjs(a.lastOnline).unix() - dayjs(b.lastOnline).unix(),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (_, elm) => (
          <Tag
            className="text-capitalize"
            color={elm.accountStatus === "active" ? "cyan" : "red"}
          >
            {elm.accountStatus}
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
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
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
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default UserList;
