/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import CodeBox from './CodeBox';
import { theme } from 'antd'
import { codeBoxCss, codeBoxDemoCss, codeBoxDescriptionCss } from './DemoCard.style'

const { useToken } = theme;

const ImageCard = props => {

	const { code, children } = props

	const { token } = useToken();

	return (
		<div css={codeBoxCss(token)}>
			<section css={codeBoxDemoCss(token)}>
				{children}
			</section>
		</div>
	)
}

export default ImageCard
