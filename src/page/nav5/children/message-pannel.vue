<template>
	<div class="message-box">
		<div class="message-item">
			<div class="mesg-head">
				<div class="title">
					<div :class="['h-icon', {'h-award': msgType == 2}]"></div>
					<div v-text="msgType==2 ? '获奖消息' : '系统推送'"></div>
				</div>
				<div class="time">2017-06-18 23:55</div>
			</div>
			<div class="mesg-main">
				恭喜你，你的作品通过了审核！现在可以在作品库看到它了！
			</div>
			<div class="mesg-foot">
				<div class="work-img"></div>
				<div class="work-info">
					<p class="ellipsis1">雾气缭绕唯美意境风景雾气缭绕</p>
					<p>ID4366457685789567</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			msgType: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {}
		},
		created() {},
		mounted() {},
		methods: {},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.message-box {
		* {
			font-size: 3.6vw;
		}
		.message-item {
			padding: 4vw 0;
			.mesg-foot {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background-color: #F9F9F9;
				.work-img {
					width: 20vw;
					height: 20vw;
					background-color: #0093FF;
					background-size: 100%;
					background-position: center;
				}
				.work-info {
					line-height: 6vw;
					margin-left: 2vw;
					&>p:last-child {
						color: #9B9B9B;
						font-size: 3.2vw;
					}
				}
			}
			.mesg-head {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.time {
					font-size: 3.2vw;
					color: #9B9B9B;
				}
				.title {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					&>div:last-child {
						margin-left: 2vw;
						letter-spacing: 1px;
						font-weight: bold;
					}
					.h-icon {
						width: 9.3vw;
						height: 9.3vw;
						border-radius: 50%;
						background-color: #0093FF;
						background-repeat: no-repeat;
						background-position: center;
						background-size: 100%;
						background-image: url("../../../../static/img/head_news.png");
						&.h-award {
							background-image: url("../../../../static/img/award.jpg");
						}
					}
				}
				
			}
			.mesg-main {
				line-height: 5.2vw;
				margin: 4vw 0;
			}
		}
	}
</style>