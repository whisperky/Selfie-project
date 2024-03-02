import React, { Component } from "react";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Space, Card, Avatar, Tag } from "antd";

import AntImage from "components/util-components/AntImage";

const { Meta } = Card;

export class FlexibleContent extends Component {
	render() {
		let { status } = this.props;
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
						<Space direction="vertical" align="left">
							<Avatar src="/img/avatars/artem.png" />
							<Tag
								color={
									status === "active"
										? "cyan"
										: status === "rejected"
										? "red"
										: "orange"
								}
							>
								{status}
							</Tag>
						</Space>
					}
					title="Face, half body"
					description={<>Artem Panchina</>}
				/>
			</Card>
		);
	}
}

export default FlexibleContent;
