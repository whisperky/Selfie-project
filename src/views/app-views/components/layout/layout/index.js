/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import DemoFrame from 'components/util-components/DemoFrame';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomTriggerMd from './markdown/custom-trigger.md';
import FixedSiderMd from './markdown/fixed-sider.md';
import FixedMd from './markdown/fixed.md';
import ResponsiveMd from './markdown/responsive.md';
import SideMd from './markdown/side.md';
import TopMd from './markdown/top.md';
import TopSideMd from './markdown/top-side.md';
import TopSide2Md from './markdown/top-side-2.md';
import Basic from './Basic';
import Top from './Top';
import TopSide from './TopSide';
import TopSide2 from './TopSide2';
import Side from './Side';
import CustomTrigger from './CustomTrigger';
import Responsive from './Responsive';
import Fixed from './Fixed';
import FixedSider from './FixedSider';
import { css } from '@emotion/react';

export class LayoutComponent extends Component {
  render() {
    return (
			<div css={css`
				.demo-basic {
					.code-box-demo {
						text-align: center;
					}
				
					.ant-layout-header,
					.ant-layout-footer, {
						background: #7dbcea;
						color: #fff;
					}

					.ant-layout-header,
					.ant-layout-footer,
					.ant-layout-content,
					.ant-layout-sider {
						text-align: center;
					}
				
					.ant-layout-footer {
						line-height: 1.5;
					}
				
					.ant-layout-sider {
						background: #3ba0e9;
						color: #fff;
						line-height: 120px;
					}
				
					.ant-layout-content {
						background: rgba(16, 142, 233, 1);
						color: #fff;
						min-height: 120px;
						line-height: 120px;
					}
				
					.code-box-demo > div > .ant-layout {
						margin-bottom: 48px;
				
						&:last-child {
							margin: 0;
						}
					}
					}
				
					.demo-custom-trigger,
					.demo-responsive {
					.trigger {
						font-size: 18px;
						line-height: 64px;
						padding: 0 24px;
						cursor: pointer;
						transition: color 0.3s;
				
						:hover {
							color: #3e79f7;
						}
					}
				
					.logo {
						height: 32px;
						float: none;
						background: rgba(255, 255, 255, 0.2);
						margin: 16px;
						width: auto;
					}
					}
				
					.logo {
						width: 120px;
						height: 31px;
						background: rgba(255, 255, 255, 0.2);
						margin: 16px 28px 16px 0;
						float: left;
					}

					.site-layout .site-layout-background {
						background: #fff;
					}
					
					.site-layout-sub-header-background {
						background: #fff;
					}
				}
			`}>
				<div className="demo-basic">
					<DemoCard code={BasicMd}><Basic /></DemoCard>
				</div>
				<DemoCard code={TopMd}><Top /></DemoCard>
				<DemoCard code={TopSide2Md}><TopSide2 /></DemoCard>
				<DemoCard code={TopSideMd}><TopSide /></DemoCard>
				<DemoCard code={SideMd}><DemoFrame height="400px"><Side/></DemoFrame></DemoCard>
				<div className="demo-custom-trigger">
					<DemoCard code={CustomTriggerMd}><CustomTrigger /></DemoCard>
				</div>
				<div className="demo-responsive">
					<DemoCard code={ResponsiveMd}><Responsive /></DemoCard>
				</div>
				<DemoCard code={FixedMd}><DemoFrame height="400px"><Fixed/></DemoFrame></DemoCard>
				<DemoCard code={FixedSiderMd}><DemoFrame height="400px"><FixedSider/></DemoFrame></DemoCard>
				<ApiContainer code={IndexMd}/>
			</div>
    );
  }
}

export default LayoutComponent;
