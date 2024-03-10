import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfig";

export const publicRoutes = [
	{
		key: "login",
		path: `${AUTH_PREFIX_PATH}/login`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/login")
		),
	},
	{
		key: "login-1",
		path: `${AUTH_PREFIX_PATH}/login-1`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/login-1")
		),
	},
	{
		key: "login-2",
		path: `${AUTH_PREFIX_PATH}/login-2`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/login-2")
		),
	},
	{
		key: "register-1",
		path: `${AUTH_PREFIX_PATH}/register-1`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/register-1")
		),
	},
	{
		key: "register-2",
		path: `${AUTH_PREFIX_PATH}/register-2`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/register-2")
		),
	},
	{
		key: "forgot-password",
		path: `${AUTH_PREFIX_PATH}/forgot-password`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/forgot-password")
		),
	},
	{
		key: "error-page-1",
		path: `${AUTH_PREFIX_PATH}/error-page-1`,
		component: React.lazy(() => import("views/auth-views/errors/error-page-1")),
	},
	{
		key: "error-page-2",
		path: `${AUTH_PREFIX_PATH}/error-page-2`,
		component: React.lazy(() => import("views/auth-views/errors/error-page-2")),
	},
];

export const protectedRoutes = [
	{
		key: "dashboard.default",
		path: `${APP_PREFIX_PATH}/dashboards/default`,
		component: React.lazy(() => import("views/app-views/dashboards/default")),
	},
	{
		key: "dashboard.analytic",
		path: `${APP_PREFIX_PATH}/dashboards/analytic`,
		component: React.lazy(() => import("views/app-views/dashboards/analytic")),
	},
	{
		key: "dashboard.sales",
		path: `${APP_PREFIX_PATH}/dashboards/sales`,
		component: React.lazy(() => import("views/app-views/dashboards/sales")),
	},
	{
		key: "apps",
		path: `${APP_PREFIX_PATH}/apps`,
		component: React.lazy(() => import("views/app-views/apps")),
	},
	{
		key: "apps.mail",
		path: `${APP_PREFIX_PATH}/apps/mail/*`,
		component: React.lazy(() => import("views/app-views/apps/mail")),
	},
	{
		key: "apps.chat",
		path: `${APP_PREFIX_PATH}/apps/chat/*`,
		component: React.lazy(() => import("views/app-views/apps/chat")),
	},
	{
		key: "apps.calendar",
		path: `${APP_PREFIX_PATH}/apps/calendar`,
		component: React.lazy(() => import("views/app-views/apps/calendar")),
	},
	{
		key: "apps.project",
		path: `${APP_PREFIX_PATH}/apps/project`,
		component: React.lazy(() => import("views/app-views/apps/project")),
	},
	{
		key: "apps.project.list",
		path: `${APP_PREFIX_PATH}/apps/project/list`,
		component: React.lazy(() =>
			import("views/app-views/apps/project/project-list/ProjectList")
		),
	},
	{
		key: "apps.project.scrumboard",
		path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
		component: React.lazy(() =>
			import("views/app-views/apps/project/scrumboard")
		),
	},
	{
		key: "apps.ecommerce",
		path: `${APP_PREFIX_PATH}/apps/ecommerce`,
		component: React.lazy(() => import("views/app-views/apps/e-commerce")),
	},
	{
		key: "apps.ecommerce.add-product",
		path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
		component: React.lazy(() =>
			import("views/app-views/apps/e-commerce/add-product")
		),
	},
	{
		key: "apps.ecommerce.edit-product",
		path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/:id`,
		component: React.lazy(() =>
			import("views/app-views/apps/e-commerce/edit-product")
		),
	},
	{
		key: "apps.ecommerce.product-list",
		path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
		component: React.lazy(() =>
			import("views/app-views/apps/e-commerce/product-list")
		),
	},
	{
		key: "apps.ecommerce.orders",
		path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
		component: React.lazy(() =>
			import("views/app-views/apps/e-commerce/orders")
		),
	},
	{
		key: "management.userManagement",
		path: `${APP_PREFIX_PATH}/management/user`,
		component: React.lazy(() =>
			import("views/app-views/management/usermanage")
		),
	},
	{
		key: "management.accountManagement",
		path: `${APP_PREFIX_PATH}/management/account`,
		component: React.lazy(() =>
			import("views/app-views/management/accountmanage")
		),
	},
	{
		key: "management.employeeManagement",
		path: `${APP_PREFIX_PATH}/management/employee`,
		component: React.lazy(() =>
			import("views/app-views/management/employeemanage")
		),
	},
	{
		key: "management.selfiemanage.list",
		path: `${APP_PREFIX_PATH}/management/selfies/lists`,
		component: React.lazy(() =>
			import("views/app-views/management/selfiemanage/list")
		),
	},
	{
		key: "management.paymentManagement.requests",
		path: `${APP_PREFIX_PATH}/management/payment/requests`,
		component: React.lazy(() =>
			import("views/app-views/management/paymentmanage/requests")
		),
	},
	{
		key: "management.verificationManagement.personalInfo",
		path: `${APP_PREFIX_PATH}/management/verification/personalInfo`,
		component: React.lazy(() =>
			import("views/app-views/management/verificationmanage/personalInfo")
		),
	},
	{
		key: "management.verificationManagement.paymentInfo",
		path: `${APP_PREFIX_PATH}/management/verification/paymentInfo`,
		component: React.lazy(() =>
			import("views/app-views/management/verificationmanage/paymentInfo")
		),
	},
	{
		key: "management.verificationManagement.identity",
		path: `${APP_PREFIX_PATH}/management/verification/identity`,
		component: React.lazy(() =>
			import("views/app-views/management/verificationmanage/identity")
		),
	},
	{
		key: "management.verificationManagement.legalDocument",
		path: `${APP_PREFIX_PATH}/management/verification/legalDocument`,
		component: React.lazy(() =>
			import("views/app-views/management/verificationmanage/legalDocument")
		),
	},
	{
		key: "components.general",
		path: `${APP_PREFIX_PATH}/components/general`,
		component: React.lazy(() => import("views/app-views/components/general")),
	},
	{
		key: "components.general.button",
		path: `${APP_PREFIX_PATH}/components/general/button`,
		component: React.lazy(() =>
			import("views/app-views/components/general/button")
		),
	},
	{
		key: "components.general.icon",
		path: `${APP_PREFIX_PATH}/components/general/icon`,
		component: React.lazy(() =>
			import("views/app-views/components/general/icon")
		),
	},
	{
		key: "components.general.typography",
		path: `${APP_PREFIX_PATH}/components/general/typography`,
		component: React.lazy(() =>
			import("views/app-views/components/general/typography")
		),
	},
	{
		key: "components.general",
		path: `${APP_PREFIX_PATH}/components/layout`,
		component: React.lazy(() => import("views/app-views/components/layout")),
	},
	{
		key: "components.general.grid",
		path: `${APP_PREFIX_PATH}/components/layout/grid`,
		component: React.lazy(() =>
			import("views/app-views/components/layout/grid")
		),
	},
	{
		key: "components.general.layout",
		path: `${APP_PREFIX_PATH}/components/layout/layout`,
		component: React.lazy(() =>
			import("views/app-views/components/layout/layout")
		),
	},
	{
		key: "components.navigation",
		path: `${APP_PREFIX_PATH}/components/navigation`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation")
		),
	},
	{
		key: "components.navigation.affix",
		path: `${APP_PREFIX_PATH}/components/navigation/affix`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/affix")
		),
	},
	{
		key: "components.navigation.breadcrumb",
		path: `${APP_PREFIX_PATH}/components/navigation/breadcrumb`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/breadcrumb")
		),
	},
	{
		key: "components.navigation.dropdown",
		path: `${APP_PREFIX_PATH}/components/navigation/dropdown`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/dropdown")
		),
	},
	{
		key: "components.navigation.menu",
		path: `${APP_PREFIX_PATH}/components/navigation/menu`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/menu")
		),
	},
	{
		key: "components.navigation.pagination",
		path: `${APP_PREFIX_PATH}/components/navigation/pagination`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/pagination")
		),
	},
	{
		key: "components.navigation.steps",
		path: `${APP_PREFIX_PATH}/components/navigation/steps`,
		component: React.lazy(() =>
			import("views/app-views/components/navigation/steps")
		),
	},
	{
		key: "components.data-entry",
		path: `${APP_PREFIX_PATH}/components/data-entry`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry")
		),
	},
	{
		key: "components.data-entry.auto-complete",
		path: `${APP_PREFIX_PATH}/components/data-entry/auto-complete`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/auto-complete")
		),
	},
	{
		key: "components.data-entry.cascader",
		path: `${APP_PREFIX_PATH}/components/data-entry/cascader`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/cascader")
		),
	},
	{
		key: "components.data-entry.checkbox",
		path: `${APP_PREFIX_PATH}/components/data-entry/checkbox`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/checkbox")
		),
	},
	{
		key: "components.data-entry.date-picker",
		path: `${APP_PREFIX_PATH}/components/data-entry/date-picker`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/date-picker")
		),
	},
	{
		key: "components.data-entry.form",
		path: `${APP_PREFIX_PATH}/components/data-entry/form`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/form")
		),
	},
	{
		key: "components.data-entry.input",
		path: `${APP_PREFIX_PATH}/components/data-entry/input`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/input")
		),
	},
	{
		key: "components.data-entry.input-number",
		path: `${APP_PREFIX_PATH}/components/data-entry/input-number`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/input-number")
		),
	},
	{
		key: "components.data-entry.mentions",
		path: `${APP_PREFIX_PATH}/components/data-entry/mentions`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/mentions")
		),
	},
	{
		key: "components.data-entry.radio",
		path: `${APP_PREFIX_PATH}/components/data-entry/radio`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/radio")
		),
	},
	{
		key: "components.data-entry.rate",
		path: `${APP_PREFIX_PATH}/components/data-entry/rate`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/rate")
		),
	},
	{
		key: "components.data-entry.select",
		path: `${APP_PREFIX_PATH}/components/data-entry/select`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/select")
		),
	},
	{
		key: "components.data-entry.slider",
		path: `${APP_PREFIX_PATH}/components/data-entry/slider`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/slider")
		),
	},
	{
		key: "components.data-entry.switch",
		path: `${APP_PREFIX_PATH}/components/data-entry/switch`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/switch")
		),
	},
	{
		key: "components.data-entry.time-picker",
		path: `${APP_PREFIX_PATH}/components/data-entry/time-picker`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/time-picker")
		),
	},
	{
		key: "components.data-entry.transfer",
		path: `${APP_PREFIX_PATH}/components/data-entry/transfer`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/transfer")
		),
	},
	{
		key: "components.data-entry.tree-select",
		path: `${APP_PREFIX_PATH}/components/data-entry/tree-select`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/tree-select")
		),
	},
	{
		key: "components.data-entry.upload",
		path: `${APP_PREFIX_PATH}/components/data-entry/upload`,
		component: React.lazy(() =>
			import("views/app-views/components/data-entry/upload")
		),
	},
	{
		key: "components.data-display",
		path: `${APP_PREFIX_PATH}/components/data-display`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display")
		),
	},
	{
		key: "components.data-display.avatar",
		path: `${APP_PREFIX_PATH}/components/data-display/avatar`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/avatar")
		),
	},
	{
		key: "components.data-display.badge",
		path: `${APP_PREFIX_PATH}/components/data-display/badge`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/badge")
		),
	},
	{
		key: "components.data-display.calendar",
		path: `${APP_PREFIX_PATH}/components/data-display/calendar`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/calendar")
		),
	},
	{
		key: "components.data-display.card",
		path: `${APP_PREFIX_PATH}/components/data-display/card`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/card")
		),
	},
	{
		key: "components.data-display.carousel",
		path: `${APP_PREFIX_PATH}/components/data-display/carousel`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/carousel")
		),
	},
	{
		key: "components.data-display.collapse",
		path: `${APP_PREFIX_PATH}/components/data-display/collapse`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/collapse")
		),
	},
	{
		key: "components.data-display.comment",
		path: `${APP_PREFIX_PATH}/components/data-display/comment`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/comment")
		),
	},
	{
		key: "components.data-display.descriptions",
		path: `${APP_PREFIX_PATH}/components/data-display/descriptions`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/descriptions")
		),
	},
	{
		key: "components.data-display.empty",
		path: `${APP_PREFIX_PATH}/components/data-display/empty`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/empty")
		),
	},
	{
		key: "components.data-display.list",
		path: `${APP_PREFIX_PATH}/components/data-display/list`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/list")
		),
	},
	{
		key: "components.data-display.popover",
		path: `${APP_PREFIX_PATH}/components/data-display/popover`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/popover")
		),
	},
	{
		key: "components.data-display.statistic",
		path: `${APP_PREFIX_PATH}/components/data-display/statistic`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/statistic")
		),
	},
	{
		key: "components.data-display.table",
		path: `${APP_PREFIX_PATH}/components/data-display/table`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/table")
		),
	},
	{
		key: "components.data-display.tabs",
		path: `${APP_PREFIX_PATH}/components/data-display/tabs`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/tabs")
		),
	},
	{
		key: "components.data-display.tag",
		path: `${APP_PREFIX_PATH}/components/data-display/tag`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/tag")
		),
	},
	{
		key: "components.data-display.timeline",
		path: `${APP_PREFIX_PATH}/components/data-display/timeline`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/timeline")
		),
	},
	{
		key: "components.data-display.tooltip",
		path: `${APP_PREFIX_PATH}/components/data-display/tooltip`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/tooltip")
		),
	},
	{
		key: "components.data-display.tree",
		path: `${APP_PREFIX_PATH}/components/data-display/tree`,
		component: React.lazy(() =>
			import("views/app-views/components/data-display/tree")
		),
	},
	{
		key: "components.feedback",
		path: `${APP_PREFIX_PATH}/components/feedback`,
		component: React.lazy(() => import("views/app-views/components/feedback")),
	},
	{
		key: "components.feedback.alert",
		path: `${APP_PREFIX_PATH}/components/feedback/alert`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/alert")
		),
	},
	{
		key: "components.feedback.drawer",
		path: `${APP_PREFIX_PATH}/components/feedback/drawer`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/drawer")
		),
	},
	{
		key: "components.feedback.message",
		path: `${APP_PREFIX_PATH}/components/feedback/message`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/message")
		),
	},
	{
		key: "components.feedback.modal",
		path: `${APP_PREFIX_PATH}/components/feedback/modal`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/modal")
		),
	},
	{
		key: "components.feedback.notification",
		path: `${APP_PREFIX_PATH}/components/feedback/notification`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/notification")
		),
	},
	{
		key: "components.feedback.popconfirm",
		path: `${APP_PREFIX_PATH}/components/feedback/popconfirm`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/popconfirm")
		),
	},
	{
		key: "components.feedback.progress",
		path: `${APP_PREFIX_PATH}/components/feedback/progress`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/progress")
		),
	},
	{
		key: "components.feedback.result",
		path: `${APP_PREFIX_PATH}/components/feedback/result`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/result")
		),
	},
	{
		key: "components.feedback.skeleton",
		path: `${APP_PREFIX_PATH}/components/feedback/skeleton`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/skeleton")
		),
	},
	{
		key: "components.feedback.spin",
		path: `${APP_PREFIX_PATH}/components/feedback/spin`,
		component: React.lazy(() =>
			import("views/app-views/components/feedback/spin")
		),
	},
	{
		key: "components.other",
		path: `${APP_PREFIX_PATH}/components/other`,
		component: React.lazy(() => import("views/app-views/components/other")),
	},
	{
		key: "components.other",
		path: `${APP_PREFIX_PATH}/components/other`,
		component: React.lazy(() => import("views/app-views/components/other")),
	},
	{
		key: "components.other",
		path: `${APP_PREFIX_PATH}/components/other`,
		component: React.lazy(() => import("views/app-views/components/other")),
	},
	{
		key: "components.other.anchor",
		path: `${APP_PREFIX_PATH}/components/other/anchor`,
		component: React.lazy(() =>
			import("views/app-views/components/other/anchor")
		),
	},
	{
		key: "components.other.backtop",
		path: `${APP_PREFIX_PATH}/components/other/backtop`,
		component: React.lazy(() =>
			import("views/app-views/components/other/backtop")
		),
	},
	{
		key: "components.other.config-provider",
		path: `${APP_PREFIX_PATH}/components/other/config-provider`,
		component: React.lazy(() =>
			import("views/app-views/components/other/config-provider")
		),
	},
	{
		key: "components.other.divider",
		path: `${APP_PREFIX_PATH}/components/other/divider`,
		component: React.lazy(() =>
			import("views/app-views/components/other/divider")
		),
	},
	{
		key: "components.chart",
		path: `${APP_PREFIX_PATH}/components/charts`,
		component: React.lazy(() => import("views/app-views/components/charts")),
	},
	{
		key: "components.chart.apex-charts",
		path: `${APP_PREFIX_PATH}/components/charts/apex-charts`,
		component: React.lazy(() =>
			import("views/app-views/components/charts/apex")
		),
	},
	{
		key: "components.chart.chartjs",
		path: `${APP_PREFIX_PATH}/components/charts/chartjs`,
		component: React.lazy(() =>
			import("views/app-views/components/charts/chartjs")
		),
	},
	{
		key: "components.maps",
		path: `${APP_PREFIX_PATH}/components/maps`,
		component: React.lazy(() => import("views/app-views/components/maps")),
	},
	{
		key: "components.maps.simple-map",
		path: `${APP_PREFIX_PATH}/components/maps/simple-map`,
		component: React.lazy(() =>
			import("views/app-views/components/maps/simple-map")
		),
	},
	{
		key: "login-1",
		path: `${APP_PREFIX_PATH}/login-1`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/login-1")
		),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "login-2",
		path: `${APP_PREFIX_PATH}/login-2`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/login-2")
		),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "register-1",
		path: `${APP_PREFIX_PATH}/register-1`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/register-1")
		),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "register-2",
		path: `${APP_PREFIX_PATH}/register-2`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/register-2")
		),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "forgot-password",
		path: `${APP_PREFIX_PATH}/forgot-password`,
		component: React.lazy(() =>
			import("views/auth-views/authentication/forgot-password")
		),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "error-page-1",
		path: `${APP_PREFIX_PATH}/error-page-1`,
		component: React.lazy(() => import("views/auth-views/errors/error-page-1")),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "error-page-2",
		path: `${APP_PREFIX_PATH}/error-page-2`,
		component: React.lazy(() => import("views/auth-views/errors/error-page-2")),
		meta: {
			blankLayout: true,
		},
	},
	{
		key: "pages",
		path: `${APP_PREFIX_PATH}/pages`,
		component: React.lazy(() => import("views/app-views/pages")),
	},
	{
		key: "pages.profile",
		path: `${APP_PREFIX_PATH}/pages/profile`,
		component: React.lazy(() => import("views/app-views/pages/profile")),
	},
	{
		key: "pages.invoice",
		path: `${APP_PREFIX_PATH}/pages/invoice`,
		component: React.lazy(() => import("views/app-views/pages/invoice")),
	},
	{
		key: "pages.pricing",
		path: `${APP_PREFIX_PATH}/pages/pricing`,
		component: React.lazy(() => import("views/app-views/pages/pricing")),
	},
	{
		key: "pages.faq",
		path: `${APP_PREFIX_PATH}/pages/faq`,
		component: React.lazy(() => import("views/app-views/pages/faq")),
	},
	{
		key: "pages.setting",
		path: `${APP_PREFIX_PATH}/pages/setting/*`,
		component: React.lazy(() => import("views/app-views/pages/setting")),
	},
	{
		key: "pages.user-list",
		path: `${APP_PREFIX_PATH}/pages/user-list`,
		component: React.lazy(() => import("views/app-views/pages/user-list")),
	},
	{
		key: "pages.user-detail",
		path: `${APP_PREFIX_PATH}/pages/user-detail/:id/*`,
		component: React.lazy(() => import("views/app-views/pages/user-detail")),
	},
	{
		key: "docs.documentation",
		path: `${APP_PREFIX_PATH}/docs/documentation/*`,
		component: React.lazy(() => import("views/app-views/docs")),
	},
];
