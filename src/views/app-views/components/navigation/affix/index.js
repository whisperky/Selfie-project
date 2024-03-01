/** @jsxImportSource @emotion/react */
import { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import OnChangeMd from './markdown/on-change.md';
import TargetMd from './markdown/target.md';
import Basic from './Basic';
import OnChange from './OnChange';
import Target from './Target';
import { css } from '@emotion/react';

export class AffixComponent extends Component {
	render() {
		return (
			<>
				<Row gutter={16} type="flex" >
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<div css={css`
							.scrollable-container {
								height: 100px;
								overflow-y: scroll;
							}
							.background {
								padding-top: 60px;
								height: 300px;
								background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
							}
						`}>
						<DemoCard code={TargetMd}><Target /></DemoCard>
						</div>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={OnChangeMd}><OnChange /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd}/>
			</>
		);
	}
}

export default AffixComponent;
