<template>
	<div class="login-register">
		<div>
			<h-return
			  title="参与活动请先注册或登录"
			  :hashTitle="true"
			  bgColor="#fff">
			</h-return>
		</div>
		<div class="lr-content">
			<div class="nav-type2">
				<span v-bind:class="{active: (tabIndex==1)}" @click="toggleTab(1)">注册</span>
				<span v-bind:class="{active: (tabIndex==2)}" @click="toggleTab(2)">登录</span>
			</div>
			<div class="form-content">
				<transition name="router-fade" mode="out-in">
					<keep-alive>
					    <router-view v-if="$route.meta.keepAlive"></router-view>
					</keep-alive>
		    	</transition>
		    	<transition name="router-fade" mode="out-in">
					<router-view v-if="!$route.meta.keepAlive"></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	import hReturn from "../../components/common/h-return";
	export default {
		data() {
			return {
				tabIndex: this.$route.meta.tabIndex
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			toggleTab(idx) {
				console.log(idx);
				let routers = {name: idx == 1 ? "register" : "login"};
				this.tabIndex = idx;
				this.$router.push(routers);
			}
		},
		watch: {},
		components: {
			hReturn
		}
	}
</script>
<style lang="scss" scoped>
	.form-content {
		width: 100%;
		padding: 0 4vw;
		box-sizing: border-box;
	}
	.login-register {
		width: 100%;
		height: 100%;
		.lr-content {
			border-top: 0.015vw solid #ddd;
		}
	}
	.nav-type2 {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 12vw;
		line-height: 12vw;
		background: #fff;
		border-bottom: 0.01vw solid #eee;
		&>span{
			position: relative;
			margin: 0 6vw;
			color: #9B9B9B;
			font-size: 3.6vw;
			box-sizing: border-box;
			font-weight: 0;
			transition: all 0.15s;
			&:after {
				display: block;
				content: "";
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 0vw;
				height: 0vw;
				background: #0093FF;
				border-radius: 4vw;
				transition: all 0.15s;
				transform-origin: center;
			}
			&.active{
				color: #333333;
				font-weight: 800;
				&:after{
					width: 6vw;	
					height: 0.85vw;
				}
			}
		}
	}
</style>