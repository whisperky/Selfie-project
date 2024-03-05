import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import ImageCard from "components/util-components/ImageCard";
import Flex from "components/shared-components/Flex";
import {
	VisitorChartData,
	AnnualStatisticData,
	CurrentRevenueStatisticData,
	ActiveMembersData,
	NewMembersData,
	RecentTransactionData,
} from "views/app-views/dashboards/default/DefaultDashboardData";
import {
	Tag,
	Card,
	Table,
	Button,
	Dropdown,
	Modal,
	Layout,
	Typography,
	Row,
	Col,
	Tooltip,
	Avatar,
} from "antd";
import { SPACER } from "constants/ThemeConstant";
import {
	FileExcelOutlined,
	PrinterOutlined,
	ReloadOutlined,
	EllipsisOutlined,
	CreditCardOutlined,
	EyeOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import utils from "utils";

import AntImage from "components/util-components/AntImage";

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

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
				<Tooltip title="View">
					<Link to={`/app/pages/user-detail/${elm.userId}`}>
						<Button
							type="primary"
							className="mr-2"
							icon={<EyeOutlined />}
							size="small"
						/>
					</Link>
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
export const RequestComponent = () => {
	const [recentTransactionData] = useState(
		RecentTransactionData.filter((item) => item.status === "Pending")
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

export default RequestComponent;
