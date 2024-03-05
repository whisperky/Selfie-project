import React, { Component, setState } from "react";
import {
	Link,
	Route,
	Navigate,
	useLocation,
	Routes,
	useParams,
} from "react-router-dom";
import {
	UserOutlined,
	LockOutlined,
	CreditCardOutlined,
	BellOutlined,
	PictureOutlined,
	SafetyOutlined,
	IdcardOutlined,
} from "@ant-design/icons";
import userData from "assets/data/user-list.data.json";
import { Menu } from "antd";
import InnerAppLayout from "layouts/inner-app-layout";
import ProfileInfo from "./PersonalInfo";
import PaymentInfo from "./PaymentInfo";
import Selfies from "./Selfies";
import Billing from "./Billing";

const url = "/app/pages/user-detail";

const MenuItem = ({ id, icon, path, label }) => {
	return (
		<>
			{icon}
			<span>{label}</span>
			<Link to={`${url}/${id}/${path}`} />
		</>
	);
};

const SettingOption = () => {
	const location = useLocation();
	const { id } = useParams();

	const locationPath = location.pathname.split("/");

	const currentpath = locationPath[locationPath.length - 1];

	return (
		<Menu
			mode="inline"
			selectedKeys={[currentpath]}
			items={[
				{
					key: "personal-info",
					label: (
						<MenuItem
							id={id}
							label="Personal Info"
							icon={<UserOutlined />}
							path="personal-info"
						/>
					),
				},
				// {
				// 	key: 'change-password',
				// 	label: <MenuItem label="Change Password" icon={<LockOutlined />} path="change-password" />
				// },
				{
					key: "billing",
					label: (
						<MenuItem
							id={id}
							label="Billing"
							icon={<CreditCardOutlined />}
							path="billing"
						/>
					),
				},
				// {
				// 	key: 'notification',
				// 	label: <MenuItem label="Notification" icon={<BellOutlined />} path="notification" />
				// },
				{
					key: "selfies",
					label: (
						<MenuItem
							id={id}
							label="Selfies"
							icon={<PictureOutlined />}
							path="selfies"
						/>
					),
				},
				{
					key: "payment-information",
					label: (
						<MenuItem
							id={id}
							label="Payment Information"
							icon={<CreditCardOutlined />}
							path="payment-information"
						/>
					),
				},
				{
					key: "id-info",
					label: (
						<MenuItem
							id={id}
							label="ID Information"
							icon={<IdcardOutlined />}
							path="id-info"
						/>
					),
				},
				{
					key: "legal-info",
					label: (
						<MenuItem
							id={id}
							label="Legal Information"
							icon={<SafetyOutlined />}
							path="legal-info"
						/>
					),
				},
			]}
		/>
	);
};

const SettingContent = () => {
	const { id } = useParams();

	const user = userData.filter((elm) => elm.id === id)[0];

	return (
		<Routes>
			<Route path="personal-info" element={<ProfileInfo user={user} />} />
			<Route path="billing" element={<Billing user={user} />} />
			<Route path="selfies" element={<Selfies user={user} />} />
			<Route path="payment-information" element={<PaymentInfo />} />
			<Route path="id-info" element={<ProfileInfo user={user} />} />
			<Route path="legal-info" element={<ProfileInfo user={user} />} />
			<Route path="*" element={<Navigate to="personal-info" replace />} />
		</Routes>
	);
};

export class UserDetail extends Component {
	render() {
		return (
			<InnerAppLayout
				sideContentWidth={320}
				sideContent={<SettingOption />}
				mainContent={<SettingContent />}
			/>
		);
	}
}

export default UserDetail;
