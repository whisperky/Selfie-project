import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const appConfigStr = `import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Emilus';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';
export const REDIRECT_URL_KEY = 'redirect'
export const AUTHENTICATED_ENTRY = '/app/dashboards/default';
export const UNAUTHENTICATED_ENTRY = '/login'

export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_LTR,
	blankLayout: false
};
`

const themeConfig = `export const baseTheme = {
    borderRadius: 10,
    colorPrimary: THEME_COLOR.BLUE,
    colorSuccess: THEME_COLOR.CYAN,
    colorWarning: THEME_COLOR.GOLD,
    colorError: THEME_COLOR.VOLCANO,
    colorInfo: THEME_COLOR.BLUE,
    colorText: GRAY_SCALE.GRAY,
    colorBorder: BORDER.BASE_COLOR,
    colorBgBody: BODY_BACKGROUND,
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 36,
    fontFamily: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji',
    fontSizeHeading2: 22,
    fontSizeHeading4: 17
}
`

const darkThemeConfigStr = `
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'dark',
	direction: DIR_LTR
};
`

const directionConfigStr = `
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_RTL,
	blankLayout: false
}
`


const TemplateSetting = () => {
	return (
		<div>
			<h2>Template Setting</h2>
			<p>Emilus comes with a variety of different theme & layout, you can try them from quick view panel in our demo and copy the config to your project.</p>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Template basic</h4>
				<p>You can change your template basic setup at <code>src/configs/AppConfigs.js</code></p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{appConfigStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Theme</h4>
				<p>You can config theme colors & antd base styling at <code>src/configs/ThemeConfig.js</code></p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{themeConfig}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Use Dark Theme</h4>
				<p>Dark theme can be set via <code>src/configs/AppConfigs.js</code>.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{darkThemeConfigStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Direction</h4>
				<p>Direction can be set by value <code>ltr</code> or <code>rtl</code> in <code>src/configs/AppConfigs.js</code>.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{directionConfigStr}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default TemplateSetting
