import React, { useMemo, lazy, Suspense } from 'react';
import { Menu } from 'antd';
import InnerAppLayout from 'layouts/inner-app-layout';
import { Route, Routes, useLocation, Link, Navigate } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const url = '/app/docs'

const menuList = [
	{ 
		name: 'Introduction', 
		key: 'introduction',
		sub: []
	},
	{ 
		name: 'Product Content', 
		key: 'product-content',
		sub: []
	},
	{ 
		name: 'Folder Structure', 
		key: 'folder-structure',
		sub: []
	},
	{ 
		name: 'Layout Overview', 
		key: 'layout-overview',
		sub: []
	},
	{ 
		name: 'Installation', 
		key: 'installation',
		sub: []
	},
	{ 
		name: 'Development', 
		key: 'development',
		sub: []
	},
	{ 
		name: 'Updating', 
		key: 'updating',
		sub: []
	},
	{ 
		name: 'TemplateSetting', 
		key: 'template-setting',
		sub: []
	},
	{ 
		name: 'Routing', 
		key: 'routing',
		sub: [] 
	},
	{ 
		name: 'Redux', 
		key: 'redux',
		sub: [] 
	},
	{
		name: 'Api Integration',
		key: 'apiIntegration',
		sub: [] 
	},
	{
		name: 'Mock Api',
		key: 'mockApi',
		sub: [] 
	},
	{ 
		name: 'Authentication', 
		key: 'authentication',
		sub: [
			{
				name: 'JWT', 
				key: 'jwt',
				sub: [] 
			},
			{
				name: 'Firebase', 
				key: 'firebase',
				sub: [] 
			}
		] 
	},
	{ 
		name: 'Localization', 
		key: 'localization',
		sub: [] 
	},
	{ 
		name: 'Components', 
		key: 'components',
		sub: [
			{
				name: 'AvatarStatusDemo', 
				key: 'avatar-status-demo',
				sub: [] 
			},
			{
				name: 'ChartWidgetDemo', 
				key: 'chart-widget-demo',
				sub: [] 
			},
			{
				name: 'CustomStatisticDemo', 
				key: 'custom-statistic-demo',
				sub: [] 
			},
			{
				name: 'ColorPickerDemo', 
				key: 'color-picker-demo',
				sub: [] 
			},
			{
				name: 'DataDisplayWidgetDemo', 
				key: 'data-display-demo',
				sub: [] 
			},
			{
				name: 'DonutChartWidgetDemo', 
				key: 'donut-chart-Widget-demo',
				sub: [] 
			},
			{
				name: 'EllipsisDropdownDemo', 
				key: 'ellipsis-dropdown-demo',
				sub: [] 
			},
			{
				name: 'FlexDemo', 
				key: 'flex-demo',
				sub: [] 
			},
			{
				name: 'GoalWidgetDemo', 
				key: 'goal-widget-demo',
				sub: [] 
			},
			{
				name: 'LoadingDemo', 
				key: 'loading-demo',
				sub: [] 
			},
			{
				name: 'RegiondataWidgetDemo', 
				key: 'regiondata-widget-demo',
				sub: [] 
			},
			{
				name: 'StatisticWidgetDemo', 
				key: 'statistic-widget-demo',
				sub: [] 
			},
			{
				name: 'CustomIconDemo', 
				key: 'custom-icon-demo',
				sub: [] 
			}
		] 
	},
	{ 
		name: 'UtilityClasses', 
		key: 'utility-classes',
		sub: [] 
	},
	{ 
		name: 'Changelog', 
		key: 'changelog',
		sub: [] 
	}
]

const prefix = 'documentation/'

const MenuItem = ({title, path}) => {

	return (
		<>
			<span>{title}</span>
			<Link to={`${path}`}/>
		</>
	)
}


const getMenuItem = (navItem) => navItem.map(nav => {
	return {
		key: nav.key,
		label: nav.sub.length > 0 ? nav.name : <MenuItem title={nav.name} path={nav.key} />,
		...(nav.sub.length > 0 ? {children: getMenuItem(nav.sub)} : {})
	}
})


const DocsMenu = () => {

	const location = useLocation();

	const menuItems = useMemo(() => getMenuItem(menuList), []);

	const locationPath = location.pathname.split('/');

	const currentpath = locationPath[locationPath.length - 1];

	return (
		<div className="w-100">
			<Menu
				defaultSelectedKeys={`${url}/introduction`}
				mode="inline"
				style={{ borderInlineEnd: 0 }}
				selectedKeys={[currentpath]}
				items={menuItems}
			/>
		</div>
	)
}

const ElementRoute = ({ component: Component, routeKey, ...props }) => {
	return (
		<Component {...props} />
	)
}

const Docs = props => {
	return (
		<InnerAppLayout 
			sideContent={<DocsMenu {...props}/>}
			mainContent={
				<div className="p-4">
					<div className="container-fluid">
						<Suspense fallback={<Loading />}>
							<Routes>
								{menuList.map(elm => (
									elm.sub.length === 0 ?
									<Route 
										key={elm.key}
										path={`${elm.key}`} 
										element={
											<ElementRoute 
												component={lazy(() => import(`./components/${elm.name.replace(/\s/g, '')}`))}
											/>
										}	
									/>
									:
									elm.sub.map(item => (
										<Route 
											key={item.key}
											path={`${item.key}`} 
											element={
												<ElementRoute 
													component={lazy(() => import(`./components/${item.name.replace(/\s/g, '')}`))}
												/>
											}	
										/>
									))
								))}
								<Route path="*" element={<Navigate to="introduction" replace />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			}
			sideContentWidth={300}
			sideContentGutter={false}
			border
		/>
	)
}

export default Docs
