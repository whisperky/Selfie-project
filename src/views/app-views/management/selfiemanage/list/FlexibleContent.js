import React, { Component } from "react";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Divider, Card, Avatar, Tag } from "antd";

import AntImage from "components/util-components/AntImage";

const { Meta } = Card;

export class FlexibleContent extends Component {
	state = {
		status: "pending",
	};
	render() {
		return (
			<Card
				hoverable
				// style={{ width: 240 }}
				cover={
					<AntImage
						alt="example"
						src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
					/>
				}
				actions={[
					<SettingOutlined key="setting" onClick={this.props.showModal} />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />,
				]}
			>
				<Meta
					avatar={
						<>
							<Avatar src="/img/avatars/artem.png" />
							<Tag
								color={
									this.state.status === "active"
										? "cyan"
										: this.state.status === "rejected"
										? "red"
										: "orange"
								}
							>
								{this.state.status}
							</Tag>
						</>
					}
					title="Face, half body"
					description={<>Artem Panchina</>}
				/>
			</Card>
		);
	}
}

export default FlexibleContent;
