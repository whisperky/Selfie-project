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
import dayjs from "dayjs";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";

const { Header, Footer, Sider, Content } = Layout;

export class PersonalInfo extends Component {
	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null,
		isModalOpen: false,
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
	showModal = (user) => {
		this.setState({ isModalOpen: true, selectedUser: user });
	};
	handleOk = () => {
		this.setState({ isModalOpen: false });
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
				title: "Role",
				dataIndex: "role",
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
				title: "Status",
				dataIndex: "status",
				render: (status) => (
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
						<Tooltip title="approve">
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
						</Tooltip>
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
					centered
					width="40%"
				>
					<Layout>
						<Header style={{ padding: "0 20px" }}>
							<p style={{ fontSize: "28px", marginBottom: "0px" }}>
								User Infomation
							</p>
						</Header>
						<Content style={{ padding: "0 50px", background: "none" }}>
							<Typography>Name: {this.state.selectedUser?.name}</Typography>
							<Typography>
								Birthday: {this.state.selectedUser?.personalInfo.birthday}
							</Typography>
							<Typography>
								Location: {this.state.selectedUser?.personalInfo.location}
							</Typography>
						</Content>
					</Layout>
				</Modal>
			</Card>
		);
	}
}

export default PersonalInfo;
