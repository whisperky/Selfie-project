import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: 'entries',
    key: '0-0',
    children: [],
	},
	{
    title: 'locales',
    key: '0-1',
    children: [],
	},
	{
		title: 'index.js',
		key: '0-2',
		isLeaf: true,
	}
];

const langKey = `{
	"sidenav.dashboard": "Dashboard"
}`

const langConfig = `import antdEnUS from 'antd/es/locale/en_US';
import enMsg from "../locales/en_US.json";

const EnLang = {
  antd: antdEnUS,
  locale: 'en-US',
  messages: {
    ...enMsg
  },
};
export default EnLang;`

const langEntry = `import antdEnUS from 'antd/es/locale/en_US';
import antdZhCn from 'antd/es/locale/zh_CN';
import antdFrFR from 'antd/es/locale/fr_FR';
import antdJaJP from 'antd/es/locale/ja_JP';
import en from './locales/en_US.json'
import zh from './locales/zh_CN.json'
import fr from './locales/fr_FR.json'
import ja from './locales/ja_JP.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { THEME_CONFIG } from 'configs/AppConfig';

export const resources = {
    en: {
        translation: en,
        antd: antdEnUS
    },
    zh: {
        translation: zh,
        antd: antdZhCn
    },
    fr: {
        translation: fr,
        antd: antdFrFR
    },
    ja: {
        translation: ja,
        antd: antdJaJP
    },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: THEME_CONFIG.locale,
    lng: THEME_CONFIG.locale,
    interpolation: {
        escapeValue: false 
    }
})

export default i18n;`

const translate = `import IntlMessage from 'components/util-components/IntlMessage';

const MyComponent = () => {
	return (
		<IntlMessage id="sidenav.dashboard" />
		// output: Dashboard
	)
`

const Localization = () => {
	return (
		<div>
			<h2>Localization</h2>
			<p>Emilus implement localization through <code>react-i18n-next</code>, 
			corresponding files can be found in <code>src/lang/</code>, folder structure as below</p>
			<div className="mb-4">
				<DirectoryTree
					multiple
					treeData={treeData}
				/>
			</div>
			<div className="mt-5">
				<h4>Set new locale</h4>
				<p><code>locales</code> folder is the place we store language key. Add your language as JSON format in this folder.</p>
				<SyntaxHighlighter className="hl-code" language="json" style={atomDark}>
					{langKey}
				</SyntaxHighlighter>
				<p className="mt-3">Create a config file for your new added language at <code>entries</code> folder, please also include antd language to the configuration.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{langConfig}
				</SyntaxHighlighter>
				<p className="mt-3">Add your configuration to the <code>index.js</code>, which is the entry file of i18n. Setup a key with your language config as value in <code>resources</code>.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{langEntry}
				</SyntaxHighlighter>
				<p className="mt-3">Now, with <code>IntlMessage</code> component, you can translate your language with your language key</p>
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
					{translate}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default Localization
