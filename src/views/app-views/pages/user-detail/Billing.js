import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
	Table,
	Button,
	Tooltip,
	Avatar,
	Tag,
	Row,
	Col,
	Layout,
	Typography,
	Dropdown,
	Card,
} from "antd";
import { RecentTransactionData } from "views/app-views/dashboards/default/DefaultDashboardData";
import {
	DeleteOutlined,
	PrinterOutlined,
	ReloadOutlined,
	FileExcelOutlined,
	CreditCardOutlined,
	EllipsisOutlined,
} from "@ant-design/icons";
import { SPACER } from "constants/ThemeConstant";
import { ROW_GUTTER } from "constants/ThemeConstant";
import utils from "utils";
import Flex from "components/shared-components/Flex";

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

const pay = () => {
	console.log("pay");
	alert("$543.00 paid!");
};

const pendingTransactionOption = [
	{
		key: "Refresh",
		label: (
			<Flex alignItems="center" gap={SPACER[2]}>
				<ReloadOutlined />
				<span className="ml-2">Refresh</span>
			</Flex>
		),
	},
	{
		key: "Print",
		label: (
			<Flex alignItems="center" gap={SPACER[2]}>
				<PrinterOutlined />
				<span className="ml-2">Print</span>
			</Flex>
		),
	},
	{
		key: "Export",
		label: (
			<Flex alignItems="center" gap={SPACER[2]}>
				<FileExcelOutlined />
				<span className="ml-2">Export</span>
			</Flex>
		),
	},
];

const tableColumns = [
	{
		title: "Customer",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<Avatar
					size={30}
					className="font-size-sm"
					style={{ backgroundColor: record.avatarColor }}
				>
					{utils.getNameInitial(text)}
				</Avatar>
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Amount",
		dataIndex: "amount",
		key: "amount",
	},
	{
		title: () => <div className="text-right">Status</div>,
		key: "status",
		render: (_, record) => (
			<div className="text-right">
				<Tag
					className="mr-0"
					color={
						record.status === "Approved"
							? "cyan"
							: record.status === "Pending"
							? "blue"
							: "volcano"
					}
				>
					{record.status}
				</Tag>
			</div>
		),
	},
	{
		title: () => <div className="text-right">Action</div>,
		dataIndex: "action",
		key: "action",
		render: (_, elm) => (
			<div className="text-right d-flex justify-content-end">
				<Tooltip title="Pay">
					<Button
						type="primary"
						onClick={pay}
						icon={<CreditCardOutlined />}
						size="small"
					>
						Pay
					</Button>
				</Tooltip>
			</div>
		),
	},
];

const CardDropdown = ({ items }) => {
	return (
		<Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
			<a
				href="/#"
				className="text-gray font-size-lg"
				onClick={(e) => e.preventDefault()}
			>
				<EllipsisOutlined />
			</a>
		</Dropdown>
	);
};
export const Billing = (props) => {
	const [recentTransactionData] = useState(
		RecentTransactionData.filter(
			(item) => item.status === "Pending" && item.userId === props.user.id
		)
	);

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24}>
					<Card
						title="Pending Transactions"
						extra={<CardDropdown items={pendingTransactionOption} />}
					>
						<Table
							className="no-border-last"
							columns={tableColumns}
							dataSource={recentTransactionData}
							rowKey="id"
							pagination={false}
						/>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Billing;
