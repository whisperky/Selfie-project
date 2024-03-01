/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CardTopMd from './markdown/card-top.md';
import CardMd from './markdown/card.md';
import CustomAddTriggerMd from './markdown/custom-add-trigger.md';
import CustomTabBarMd from './markdown/custom-tab-bar.md';
import DisabledMd from './markdown/disabled.md';
import EditableCardMd from './markdown/editable-card.md';
import ExtraMd from './markdown/extra.md';
import IconMd from './markdown/icon.md';
import PositionMd from './markdown/position.md';
import SizeMd from './markdown/size.md';
import SlideMd from './markdown/slide.md';
import Basic from './Basic';
import CardTop from './CardTop';
import Card from './Card';
import CustomAddTrigger from './CustomAddTrigger';
import CustomTabBar from './CustomTabBar';
import Disabled from './Disabled';
import EditableCard from './EditableCard';
import Extra from './Extra';
import Icon from './Icon';
import Position from './Position';
import Size from './Size';
import Slide from './Slide';
import { css } from '@emotion/react';
 
export class TabsComponent extends Component {
	render() {
		return (
			<>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={DisabledMd}><Disabled /></DemoCard>
				<DemoCard code={IconMd}><Icon /></DemoCard>
				<DemoCard code={SlideMd}><Slide /></DemoCard>
				<DemoCard code={ExtraMd}><Extra /></DemoCard>
				<DemoCard code={SizeMd}><Size /></DemoCard>
				<DemoCard code={PositionMd}><Position /></DemoCard>
				<DemoCard code={CardMd}><Card /></DemoCard>
				<DemoCard code={EditableCardMd}><EditableCard /></DemoCard>
				<div css={css`
					.card-container > .ant-tabs-card > .ant-tabs-content {
						height: 120px;
						margin-top: -16px;
					}
					
					.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
						background: @white;
						padding: 16px;
					}
					
					.card-container > .ant-tabs-card > .ant-tabs-bar {
						border-color: @white;
					}
					
					.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
						border-color: transparent;
						background: transparent;
					}
					
					.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
						border-color: @white;
						background: @white;
					}
				`}>
					<DemoCard code={CardTopMd}><CardTop /></DemoCard>
				</div>
				<DemoCard code={CustomAddTriggerMd}><CustomAddTrigger /></DemoCard>
				<DemoCard code={CustomTabBarMd}><CustomTabBar /></DemoCard>
				<ApiContainer code={IndexMd} />
			</>
		);
	}
}

export default TabsComponent;
