import VueRouter from "vue-router";
import Vue from "vue";
import route from './router';

Vue.use(VueRouter);

let routes = route();

export default new VueRouter({
	routes
});
