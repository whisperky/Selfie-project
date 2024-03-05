import React, { Component } from "react";
import {
	Form,
	Avatar,
	Button,
	Input,
	DatePicker,
	Row,
	Col,
	message,
	Upload,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";

export class ProfileInfo extends Component {
	constructor(props) {
		super(props);
	}

	avatarEndpoint =
		"https://run.mocky.io/v3/af3b8fc9-ebac-488d-b4fd-0c3942496866";

	state = {
		avatarUrl: "/img/avatars/artem.png",
		name: "Artem Panchina",
		email: "skyangel0421@gmail.com",
		userName: "Artem",
		dateOfBirth: null,
		phoneNumber: "+1 (1532) 135 1235",
		website: "https://brainwavehq.org/",
		address: "30 N Gould St Ste R, Sheridan, WY 82801, US",
		city: "WY",
		postcode: "82801",
	};

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener("load", () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {
		const { name, email, userName, address, postcode, img } = this.props.user;

		const { website, dateOfBirth, phoneNumber, location } =
			this.props.user.personalInfo;

		return (
			<>
				<Flex
					alignItems="center"
					mobileFlex={false}
					className="text-center text-md-left"
				>
					<Avatar size={90} src={img} icon={<UserOutlined />} />
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={{
							name: name,
							email: email,
							username: userName,
							dateOfBirth: dateOfBirth,
							phoneNumber: phoneNumber,
							website: website,
							address: address,
							city: location,
							postcode: postcode,
						}}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: "Please input your name!",
												},
											]}
										>
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: "Please input your username!",
												},
											]}
										>
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[
												{
													required: true,
													type: "email",
													message: "Please enter a valid email!",
												},
											]}
										>
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item label="Date of Birth" name="dateOfBirth">
											<DatePicker className="w-100" readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item label="Phone Number" name="phoneNumber">
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item label="Website" name="website">
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item label="Address" name="address">
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item label="City" name="city">
											<Input readOnly />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item label="Post code" name="postcode">
											<Input readOnly />
										</Form.Item>
									</Col>
								</Row>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		);
	}
}

export default ProfileInfo;
