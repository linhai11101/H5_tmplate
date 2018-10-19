<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    </div>
</template>

<script>
	import {mapActions} from 'vuex'
  	export default {

  	}
</script>

<style lang="scss">
	@import './style/mixin';
  	@import './style/common';
  	@import './style/icon/iconfont.css';
  	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	#app {
		width: 100vw;
		height: 100vh;
	}
	.content {
		width: 100vw;
	}
	.layout1 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		width: 100%;
		.main {
			width: 100%;
			height: 100%;
			overflow-y: scroll;
		}
	}
</style>
