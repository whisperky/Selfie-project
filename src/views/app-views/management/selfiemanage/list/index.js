import { useState, setState } from "react";
import React, { Component } from "react";
import ImageCard from "components/util-components/ImageCard";
import FlexibleContent from "./FlexibleContent";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import {
	Avatar,
	Divider,
	Input,
	Form,
	Button,
	Image,
	Modal,
	Layout,
	Typography,
	Row,
	Col,
} from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

export class CardComponent extends Component {
	state = {
		imgCol: 4,
		lists: Array(16).fill(null),
		viewStyle: 1, // 1: block view, 2: list view
		isModalOpen: false,
	};

	setImgCol = (col) => {
		this.setState({ imgCol: col });
	};
	showModal = () => {
		this.setState({ isModalOpen: true });
	};
	handleOk = () => {
		this.setState({ isModalOpen: false });
	};
	handleCancel = () => {
		this.setState({ isModalOpen: false });
	};
	approve = () => {
		console.log("Approved");
	};
	reject = () => {
		console.log("Rejected");
	};
	render() {
		return (
			<>
				<ImageCard>
					<Flex style={{ fontSize: "24px", marginBottom: "30px", gap: "15px" }}>
						<AppstoreOutlined
							onClick={() => {
								this.setState({ viewStyle: 1 });
							}}
						/>
						<BarsOutlined
							onClick={() => {
								this.setState({ viewStyle: 2 });
							}}
						/>
						<Button onClick={() => this.setImgCol(12)}>2</Button>
						<Button onClick={() => this.setImgCol(8)}>3</Button>
						<Button onClick={() => this.setImgCol(6)}>4</Button>
						<Button onClick={() => this.setImgCol(4)}>6</Button>
					</Flex>
					<Row gutter={[16, 16]} justify="space-evenly">
						{this.state.lists.map((_, i) => (
							<Col span={this.state.imgCol} key={i}>
								<FlexibleContent showModal={this.showModal} />
							</Col>
						))}
					</Row>
					<Modal
						open={this.state.isModalOpen}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						centered
						width="40%"
					>
						<Layout style={{ padding: "20px" }}>
							<Sider width="50%">
								<Image
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									preview={false}
								/>
							</Sider>
							<Layout>
								<Header style={{ padding: "0 20px" }}>
									<p style={{ fontSize: "28px", marginBottom: "0px" }}>
										Fashion Girl
									</p>
									<p
										style={{
											fontSize: "20px",
											marginBottom: "0px",
											color: "#287EF3",
										}}
									>
										$50
									</p>
								</Header>
								<Content style={{ padding: "20px" }}>
									<p style={{ fontSize: "28px", marginBottom: "0px" }}>
										Description
									</p>
									<p
										style={{
											fontSize: "18px",
											marginBottom: "0px",
										}}
									>
										Stylish Fashion Wear for women
									</p>
									<Row gutter={10} style={{ marginTop: "20px" }}>
										<Col>
											<Button large type="primary" onClick={this.approve}>
												Approve
											</Button>
										</Col>
										<Col>
											<Button large type="primary" danger onClick={this.reject}>
												Reject
											</Button>
										</Col>
									</Row>
								</Content>
								<Footer></Footer>
							</Layout>
						</Layout>
					</Modal>
				</ImageCard>
			</>
		);
	}
}

export default CardComponent;
