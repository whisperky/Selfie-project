/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AutoplayMd from './markdown/autoplay.md';
import FadeMd from './markdown/fade.md';
import PositionMd from './markdown/position.md';

import Basic from './Basic';
import Autoplay from './Autoplay';
import Fade from './Fade';
import Position from './Position';
import { css } from '@emotion/react';

export class CarouselComponent extends Component {
	render() {
		return (
			<div css={css`
				.ant-carousel .slick-slide {
					text-align: center;
					height: 160px;
					background: #364d79;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
				.ant-carousel .slick-slide h3 {
					color: @white;
				}
			`}>
				<Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={AutoplayMd}><Autoplay /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={PositionMd}><Position /></DemoCard>
						<DemoCard code={FadeMd}><Fade /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd} />
			</div>
		);
	}
}

export default CarouselComponent;
