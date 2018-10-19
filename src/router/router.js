const layout1 = r => require.ensure([], () => r(require("../page/template/layout1")), 'layout1');
const nav1 = r => require.ensure([], () => r(require("../page/nav1")), 'nav1');
const nav2 = r => require.ensure([], () => r(require("../page/nav2")), 'nav2');
const nav3 = r => require.ensure([], () => r(require("../page/nav3")), 'nav3');
const nav4 = r => require.ensure([], () => r(require("../page/nav4")), 'nav4');
const nav5 = r => require.ensure([], () => r(require("../page/nav5")), 'nav5');
const allRace = r => require.ensure([], () => r(require("../page/all-race")), 'allRace');
const personal = r => require.ensure([], () => r(require("../page/private")), 'personal');
const lr = r => require.ensure([], () => r(require("../page/login")), 'lr');
const register = r => require.ensure([], () => r(require("../page/login/register")), 'register');
const login = r => require.ensure([], () => r(require("../page/login/login")), 'login');


const race = [
	{path: "", redirect: "/index"},
	{path: "/", name: "/", redirect: "/index"},
	{ 
		path: "/index", 
		redirect: "/nav1",
		component: layout1, 
		name: "raceIndex",
		children: [
			{path:"/nav1", component: nav1, name: "nav1", meta:{activeIndex: 1}},
			{path:"/nav2", component: nav2, name: "nav2", meta:{activeIndex: 2}},
			{path:"/nav3", component: nav3, name: "nav3", meta:{activeIndex: 3}},
			{path:"/nav4", component: nav4, name: "nav4", meta:{activeIndex: 4}},
			{path:"/nav5", component: nav5, name: "nav5", meta:{activeIndex: 5}}
		]
	},
	{path:"/all-race", component: allRace, name: "allRace", meta:{keepAlive: true}},
	{path:"/personal", component: personal, name: "personal", meta:{keepAlive: true}},
	{
		path:"/lr",
		redirect: "/login",
		component: lr,
		name: "lr",
		children: [
			{path: "/login", component: login, name: "login", meta: {keepAlive: true, tabIndex: 2}},
			{path: "/register", component: register, name: "register", meta: {keepAlive: true, tabIndex: 1}}
		]
	}
]
const dialy = [
	{path: "", redirect: "/index"},
	{path: "/", name: "/", redirect: "/index"},
	{ 
		path: "/index", 
		redirect: "/nav1",
		component: layout1,
		name: "dialyIndex",
		children: [
			{path:"/nav1", component: nav1, name: "nav1", meta:{activeIndex: 1}},
			{path:"/nav2", component: nav2, name: "nav2", meta:{activeIndex: 2}},
			{path:"/nav3", component: nav3, name: "nav3", meta:{activeIndex: 3}},
			{path:"/nav4", component: nav4, name: "nav4", meta:{activeIndex: 4}},
			{path:"/nav5", component: nav5, name: "nav5", meta:{activeIndex: 5}}
		]
	},
	{path:"/all-race", component: allRace, name: "allRace", meta:{keepAlive: true}},
	{path:"/personal", component: personal, name: "personal", meta:{keepAlive: true}},
	{
		path:"/lr",
		redirect: "/login",
		component: lr,
		name: "lr",
		children: [
			{path: "/login", component: login, name: "login", meta: {keepAlive: true, tabIndex: 2}},
			{path: "/register", component: register, name: "register", meta: {keepAlive: true, tabIndex: 1}}
		]
	}
]

export default () => {
	switch(process.env.MODEL_ENV) {
		case "match":
			return race;
			break;
		case "dialy":
			return dialy;
			break;
		default:
			return race;
	}
}
