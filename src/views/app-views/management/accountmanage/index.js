import React, { useRef, Component } from "react";
import Highlighter from "react-highlight-words";
import { Card, Table, Tag, Tooltip, message, Button, Input, Space } from "antd";
import {
	EyeOutlined,
	DeleteOutlined,
	CheckOutlined,
	CloseOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";

export class UserList extends Component {
	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null,
		searchText: "",
		searchedColumn: "",
		searchInput: React.createRef(),
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

	onSearch = (value, _e, info) => {
		console.log(info?.source, value);
	};

	handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		this.setState({ searchText: selectedKeys[0] });
		this.setState({ setSearchedColumn: dataIndex });
	};

	handleReset = (clearFilters) => {
		clearFilters();
		this.setState({ searchText: "" });
	};
	getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
			close,
		}) => (
			<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={this.state.searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						this.handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && this.handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => this.searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			this.state.searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[this.state.searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

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
				...this.getColumnSearchProps("name"),
			},
			{
				title: "Role",
				dataIndex: "role",
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
				...this.getColumnSearchProps("role"),
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
