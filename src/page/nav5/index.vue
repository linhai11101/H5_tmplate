<template>
	<div class="content-private">
		<div class="head-content">
			<div class="head-pannel">
				<head-pannel></head-pannel>
			</div>
			<div class="head-nav">
				<div class="h-nav-box">
					<div class="h-nav">
						<div :class="['h-nav-item', {active: navType==1}]" @touchstart="changeNav(1)">
							<span>我的投稿 • {{numData.myWork}}</span>
						</div>
						<div :class="['h-nav-item', {active: navType==2}]" @touchstart="changeNav(2)">
							<span>投票 • {{numData.vote}}</span>
						</div>
						<div :class="['h-nav-item', {active: navType==3}]" @touchstart="changeNav(3)">
							<span>消息 • {{numData.message}}</span>
						</div>
					</div>
				</div>
				<div class="sub-nav">
					<div class="my-work-nav sub-nav-item" v-if="navType == 1">
						<div :class="[{active: subWorkType==1}]" @click="subChange(1, 1)">全部</div>
						<div :class="[{active: subWorkType==2}]" @click="subChange(1, 2)">待审核</div>
						<div :class="[{active: subWorkType==3}]" @click="subChange(1, 3)">已审核</div>
						<div :class="[{active: subWorkType==4}]" @click="subChange(1, 4)">已获奖</div>
						<div :class="[{active: subWorkType==5}]" @click="subChange(1, 5)">审核失败</div>
					</div>
					<div class="message-nav sub-nav-item" v-if="navType == 3">
						<div :class="[{active: subMessageType==1}]" @click="subChange(2, 1)">系统消息</div>
						<div :class="[{active: subMessageType==2}]" @click="subChange(2, 2)">获奖消息</div>
					</div>
				</div>
			</div>
		</div>
		<div class="work-content">
			<div class="message-content" v-if="navType == 3">
				<div class="msg-item">
					<message-pannel
					  :msgType="subMessageType">
					</message-pannel>
				</div>
				<div class="msg-item">
					<message-pannel
					  :msgType="subMessageType">
					</message-pannel>
				</div>
			</div>
			<div class="data-content" v-else>
				<h-water-fall
				  :hashNewData="hashNewData"
				  :data="workData"
				  :clearAll="clearChildData">
				</h-water-fall>
			</div>

		</div>
	</div>
</template>
<script>
	import hWaterFall from "../../components/common/h-water-fall";
	import headPannel from "./children/head-pannel";
	import messagePannel from "./children/message-pannel";
	export default {
		data() {
			return{
				hashNewData: false,
				clearChildData: false,
				workData: [],

				navType: 3,
				subWorkType: 1,
				subMessageType: 1,

				numData: {
					myWork: 5,
					vote: 5,
					message: 5
				}
			}
		},
		computed: {},
		activated() {},
		created() {},
		mounted() {},
		methods: {
			changeNav(type) {
				this.navType = type;

				this.clearChildData = true;
			},
			subChange(type, valType) {
				switch(type) {
					case 1:
						this.subWorkType = valType;
						break;
					case 2:
						this.subMessageType = valType;
				}
			},
			clearValue() {
				if (this.searchKey) {
					this.searchKey = "";
				}
			},
			

		},
		watch: {},
		components: {
			hWaterFall,
			headPannel,
			messagePannel
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/mixin";
	.message-content {
		padding: 0 3vw;
		.msg-item + .msg-item{
			border-top: 0.015vw solid #E5E5E5;
		}
	}
	.content-private {
		height: 100%;
		display: flex;
		flex-direction: column;		
	}
	.head-pannel {
		height: 38.6vw;
	}
	.work-content {
		height: 100%;
		margin-bottom: 3vh;
	}
	.sub-nav {
		background-color: #F7F7F7;
		.sub-nav-item {
			height: 10.6vw;
			display: flex;
			&>div {
				font-size: 3.6vw;
				text-align: center;
				line-height: 4vw;
				margin: 3.3vw 0;
				box-sizing: border-box;
				color: #999;
				&.active {
					color: #0093FF;
					font-weight: 600;
				}
			}
			div + div {
				border-left: 0.01vw solid #E5E5E5;
			}
			&.my-work-nav {
				justify-content: center;
				align-items: center;
				&>div {
					flex: 1;
				}
			}
			&.message-nav {
				justify-content: flex-start;
				align-items: center;
				&>div {
					width: 25vw;
				}
			}
			
		}
	}
</style>