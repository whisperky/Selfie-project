import React, { Component } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Route, Navigate, useLocation, Routes } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Billing from './Billing';
import Notification from './Notification';

const url = '/app/pages/setting'

const MenuItem = ({icon, path, label}) => {

	return (
		<>
			{icon}
			<span>{label}</span>
			<Link to={`${url}/${path}`} />
		</>
	)
}

const SettingOption = () => {

	const location = useLocation();

	const locationPath = location.pathname.split('/')

	const currentpath = locationPath[locationPath.length - 1]

	return (
		<Menu
			mode="inline"
			selectedKeys={[currentpath]}
			items={[
				{
					key: 'edit-profile',
					label: <MenuItem label="Edit Profile" icon={<UserOutlined />} path="edit-profile" />
				},
				{
					key: 'change-password',
					label: <MenuItem label="Change Password" icon={<LockOutlined />} path="change-password" />
				},
				{
					key: 'billing',
					label: <MenuItem label="Billing" icon={<CreditCardOutlined />} path="billing" />
				},
				{
					key: 'notification',
					label: <MenuItem label="Notification" icon={<BellOutlined />} path="notification" />
				},
			]}
		/>
	);
};

const SettingContent = () => {

	return (
		<Routes>
			<Route path="edit-profile" element={<EditProfile />} />
			<Route path="change-password" element={<ChangePassword />} />
			<Route path="billing" element={<Billing />} />
			<Route path="notification" element={<Notification />} />
			<Route path="*" element={<Navigate to="edit-profile" replace />} />
		</Routes>
	)
}

export class Setting extends Component {
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

export default Setting
