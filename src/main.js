import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import Hfooter from "./components/footer/footer1";

import 'fetch-polyfill2'
import './config/rem'



Vue.prototype.MODEL_ENV = process.env.MODEL_ENV;
global.MODEL_ENV = process.env.MODEL_ENV;


router.beforeEach((to, from, next) => {
	

	store.state.botmNav = !!to.meta.activeIndex ? to.meta.activeIndex : 1;
	next();
})

// console.log(process.env);
console.log(router);

Vue.component("h-footer", Hfooter);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})