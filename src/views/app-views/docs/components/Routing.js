import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ApiContainer from 'components/util-components/ApiContainer/Container';

const newRouteStr =  `export const protectedRoutes = [
	{
		key: 'a-unique-id-for-this-view'
        path: 'my-new-view-path',
        component: React.lazy(() => import('views/MyNewComponent')),
        meta: {
            blankLayout: false
        }
    },			
]
`

const navTreeStr = `import { DashboardOutlined } from '@ant-design/icons'

const navigationConfig = [
  {
		key: 'new-component-key',
		path: '/app/new-component-path',
		title: 'myNewComponent',
		icon: DashboardOutlined,
		breadcrumb: false,
		submenu: []
	}
]

export default navigationConfig;
`

const nestedNavTreeStr = `import { DashboardOutlined } from '@ant-design/icons'

const navigationConfig = [
  {
		key: 'new-component-key',
		path: '',
		title: 'myNewComponent',
		icon: DashboardOutlined,
		breadcrumb: false,
		submenu: [
			{
				key: 'new-component-child-key',
				path: '',
				title: 'myNewComponentFirstLevel',
				icon: DashboardOutlined,
				breadcrumb: true,
				submenu: [
					{
						key: 'new-component-child-key-1',
						path: '/app/new-component-path-1',
						title: 'myNewComponentSecondLevelOne',
						icon: DashboardOutlined,
						breadcrumb: true,
						submenu: []
					}
					{
						key: 'new-component-child-key-2',
						path: '/app/new-component-path-2',
						title: 'myNewComponentSecondLevelTwo',
						icon: DashboardOutlined,
						breadcrumb: true,
						submenu: []
					}
				]
			}
		]
	}
]

export default navigationConfig;
`

const Routing = () => {
	return (
		<div>
			<h2>Routing</h2>
			<p>Emilus use <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">react-router</a> as base routing system. To add a new route in the template, you can follow the steps below.</p>
			<div className="mt-4">
				<h4 className="font-weight-bold">Overview</h4>
				<p class="my-1">You can find the template's router configuration in <code>src/configs/RoutesConfig.js</code>, there's 2 type of route group as following.</p>
				<ul>
					<li><strong>publicRoutes</strong><p class="mt-1">this routes group included all routes that open to all users.</p></li>
					<li><strong>protectedRoutes</strong><p class="mt-1">This routes group included all routes that required authentication.</p></li>
				</ul>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Adding a new route</h4>
				<p class="mt-1">
					You can add the following code to any of the routing groups, depending on the authority you wish to.
					Refer below mentioned code to create a route:
				</p>
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
					{newRouteStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Meta</h4>
				<p className="mt-1">
					<code>meta</code> field allow us to carry addtional information to the <code>AppRoute</code> or the view component under this route.
				</p>
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>{`export const protectedRoutes = [
	{
		...
        meta: {
            blankLayout: false
        }
    },			
]`}</SyntaxHighlighter>
			</div>
			<ApiContainer gutterLess={true}>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>blankLayout</td>
							<td>Whether to display this view without template.</td>
							<td>boolean</td>
						</tr>
					</tbody>
				</table>
			</ApiContainer>
			<h2 className="mt-4">Menu Navigation</h2>
			<div className="mt-4">
				<h4 className="font-weight-bold">Navigating</h4>
				<p>You can config your navigation bar in <code>configs/NavigationConfig.js</code>. 
				We grouped up the navigation tree as an array, add object as the code below to the array for new menu item.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {navTreeStr}
        </SyntaxHighlighter>
				<h4 className="font-weight-bold mt-4">Nested</h4>
				<p>Refer below code to create a nested menu item:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {nestedNavTreeStr}
        </SyntaxHighlighter>
			</div>
			<br />
			<br />
			<ApiContainer gutterLess={true}>
				<p>The properties of config are as follows:</p>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>key</td>
							<td>The unique identifier of menu item</td>
							<td>string | number</td>
						</tr>
						<tr>
							<td>path</td>
							<td>Path to destination page</td>
							<td>string</td>
						</tr>
						<tr>
							<td>title</td>
							<td>Menu item title, accept IntlMessage key</td>
							<td>string</td>
						</tr>
						<tr>
							<td>icon</td>
							<td>Set icon beside menu title</td>
							<td>ReactNode</td>
						</tr>
						<tr>
							<td>breadcrumb</td>
							<td>Displaay breadcrumb on page</td>
							<td>boolean</td>
						</tr>
						<tr>
							<td>submenu</td>
							<td>Whether have child in this menu item, only accept properties in this table</td>
							<td>array</td>
						</tr>
					</tbody>
				</table>
			</ApiContainer>
		</div>
	)
}

export default Routing
