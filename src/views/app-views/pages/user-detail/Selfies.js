import React, { Component } from "react";
import ImageCard from "components/util-components/ImageCard";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import {
	Tag,
	Space,
	Button,
	Image,
	Modal,
	Layout,
	Typography,
	Row,
	Col,
	List,
	Avatar,
} from "antd";

import AntImage from "components/util-components/AntImage";

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

export class Selfies extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		lists: Array(16).fill("pending"),
		viewStyle: 1, // 1: block view, 2: list view
		isModalOpen: false,
		selectedList: 0,
	};

	handleStatusChange = (index, newStatus) => {
		const updatedLists = [...this.state.lists];
		updatedLists[index] = newStatus;
		this.setState({ lists: updatedLists });
		console.log(this.state.lists);
	};

	render() {
		return (
			<>
				<ImageCard>
					<List
						itemLayout="horizontal"
						dataSource={this.state.lists}
						renderItem={(status, i) => (
							<List.Item
								actions={[
									<Button type="link" onClick={() => this.showModal(i)}>
										View Details
									</Button>,
								]}
							>
								<AntImage
									alt="example"
									src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
									width="120px"
								/>
								<List.Item.Meta
									avatar={<Avatar src={this.props.user.img} />}
									title={<a href="javascript:void(0);">Face, half body</a>}
									description={this.props.user.name}
									style={{ marginBottom: "10px", marginLeft: "20px" }}
								/>

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
							</List.Item>
						)}
					/>
				</ImageCard>
			</>
		);
	}
}

export default Selfies;
