/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import GridMd from './markdown/grid.md';
import InfiniteLoadMd from './markdown/infinite-load.md';
import InfiniteVirtualizedLoadMd from './markdown/infinite-virtualized-load.md';
import LoadmoreMd from './markdown/loadmore.md';
import ResposiveMd from './markdown/resposive.md';
import SimpleMd from './markdown/simple.md';
import VerticalMd from './markdown/vertical.md';
import Basic from './Basic';
import Grid from './Grid';
import InfiniteLoad from './InfiniteLoad';
import InfiniteVirtualizedLoad from './InfiniteVirtualizedLoad';
import Loadmore from './Loadmore';
import Resposive from './Resposive';
import Simple from './Simple';
import Vertical from './Vertical';
import { css } from '@emotion/react';

export class ListComponent extends Component {
	render() {
		return (
			<div css={css`
				.demo-infinite-container {
					border: 1px solid #e8e8e8;
					border-radius: 4px;
					overflow: auto;
					padding: 8px 24px;
					height: 300px;
				}
				.demo-loading-container {
					position: absolute;
					bottom: 40px;
					width: 100%;
					text-align: center;
				}
			
				.demo-loading {
					position: absolute;
					bottom: -40px;
					left: 50%;
				}
			
				.demo-loadmore-list {
					min-height: 350px;
				}
			`}>
				<DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={LoadmoreMd}><Loadmore /></DemoCard>
				<DemoCard code={VerticalMd}><Vertical /></DemoCard>
				<DemoCard code={GridMd}><Grid /></DemoCard>
				<DemoCard code={ResposiveMd}><Resposive /></DemoCard>
				<DemoCard code={InfiniteLoadMd}><InfiniteLoad /></DemoCard>
				<DemoCard code={InfiniteVirtualizedLoadMd}><InfiniteVirtualizedLoad /></DemoCard>
				<ApiContainer code={IndexMd} />
			</div>
		);
	}
}

export default ListComponent;
