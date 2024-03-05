import React, { Component } from "react";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Card, Avatar } from "antd";

const { Meta } = Card;

export class FlexibleContent extends Component {
	render() {
		return (
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
					/>
				}
				actions={[
					<SettingOutlined key="setting" />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />,
				]}
			>
				<Meta
					avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					}
					title="Card title"
					description="This is the description"
				/>
			</Card>
		);
	}
}

export default FlexibleContent;
