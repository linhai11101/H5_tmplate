<template>
	<div class="content">
		<div class="nav1-banner">
			<h-banner :hashBtn="false"></h-banner>
		</div>
		<div class="race-card">
			<h-card></h-card>
		</div>
		<div class="banner-card-pannel">
			<div class="pannel-title">
				<h1><i class="zxsh-icon-dengpao"></i><span>精彩作品</span></h1>
				<p>查看更多</p>
			</div>
			<div class="pannel-box">
				<div class="pannel-list-box">
					<div class="pannel-list">
						<div class="pannel-item" v-for="item in pannelCardData">
							<h-pannel-card></h-pannel-card>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-card-pannel mt-4">
			<div class="pannel-title">
				<h1><i class="zxsh-icon-wenzhang_xuanzhong"></i><span>大赛简介</span></h1>
			</div>
			<div class="brief-introduction">
				<div class="brief-desc">
					<div class="desc-content">
						<div class="data-content">
							以“改革在身边”为主题，征集手机摄影作品，对优秀作品给予奖励。
							以“改革在身边”为主题，征集手机摄影作品，对优秀作品给予奖励。
							以“改革在身边”为主题，征集手机摄影作品，对优秀作品给予奖励。
							以“改革在身边”为主题，征集手机摄影作品，对优秀作品给予奖励。
							以“改革在身边”为主题，征集手机摄影作品，对优秀作品给予奖励。
							<br/>
							主办单位: 中国互联网发展基金会
						</div>
						<div class="view-opt">
							<div class="mores view-icon" ><span>查看更多</span><i></i></div>
							<!-- <div class="lesss view-icon"><span>收起</span><i></i></div> -->
						</div>
					</div>
					<div class="rule-content">
						<div class="nav1-price"><i class="zxsh-icon-xunzhang1"></i><span>奖品</span></div>
						<div class="nav1-rule"><i class="zxsh-icon-jilu"></i><span>规则</span></div>
					</div>
				</div>
				<div class="match-btn">
					<button>
						<span>参赛投稿</span>
					</button>
				</div>
			</div>
		</div>
		<div class="banner-card-pannel mt-4">
			<div class="pannel-title">
				<h1><i class="zxsh-icon-wodexingqiuxuanzhong"></i><span>更多新闻</span></h1>
				<p>查看更多</p>
			</div>
			<div class="news-content">
				<div class="news-item" v-for="item in newsData">
					<h-news-pannel></h-news-pannel>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import hBanner from "../../components/common/h-banner";
	import hCard from "../../components/common/h-card";
	import hPannelCard from "../../components/common/h-pannel-card";
	import hNewsPannel from "../../components/common/h-news-pannel";
	export default {
		props: {
			
		},
		data() {
			return {
				pannelCardData: [1,1,1,1,1,1,1],
				newsData: [1,1,1,1,1,1,1]
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {},
		components: {
			hBanner,
			hCard,
			hPannelCard,
			hNewsPannel
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/mixin";
	.content {
		background-color: #f5f5f5;
		padding-bottom: 3vh;
	}
	.nav1-banner {
		width: 100vw;
		height: 30vw;
		background-color: #fff;
	}
	.race-card {
		width: 100vw;
		height: 24.1vw;
		background-color: #fff;
	}
	.banner-card-pannel {
		width: 100%;
		height: auto;
		background-color: #fff;
		.pannel-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1vw 4vw;
			h1 {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				i {
					padding-right: 1vw;
					font-size: 4vw;
					color: #0093FF;
				}
				span {
					color: #333333;
					letter-spacing: 1px;
				}
				* {
					font-size: 4vw;
				}
			}
			p {
				font-size: 3vw;
				color: #9B9B9B;
			}
		}
	}
	.pannel-box {
		width: 100%;
		.pannel-list-box {
			width: 100%;
			height: 58vw;
			overflow-y: hidden;
			.pannel-list {
				width: auto;
				overflow-x: scroll;
				display: flex;
				justify-content: flex-start;
				padding-bottom: 6vw;
				padding-top: 2vw;
			}
		}
		.pannel-item {
			width: 45vw;
			height: 52.8vw;
			&:first-child {
				padding-left: 3vw;
			}
			&:last-child {
				padding-right: 3vw;
			}
		}
		.pannel-item + .pannel-item {
			padding-left: 2vw;
		}
	}
	.brief-introduction {
		margin: 0 4vw;
		border-top: 0.01vw solid #ccc;
		.match-btn {
			width: 100%;
			padding-bottom: 5.3vw;
			button {
				width: 100%;
				border: 1px solid #0093FF;
				height: 12vw;
				background-color: #fff;
				border-radius: 12vw;
				span {
					color: #0093FF;
					font-size: 4vw;
					letter-spacing: 1vw;
				}
			}
		}
		.brief-desc {
			display: flex;
			justify-content: flex-start;
			.desc-content {
				width: 100%;
				overflow-y: hidden;
			    margin-top: 0.2rem;
			    font-size: 0.26rem;
			    color: #333333;
			    line-height: 0.42rem;
			    position: relative;
			    .view-opt {
			    	position: absolute;
			    	bottom: 0;
			    	left: 0;
			    	width: 100%;
			    	height: 12vw;
			    	background: linear-gradient(to bottom, transparent, white 45%, white);
					* {
						color: #9B9B9B;
					}
					.view-icon {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						transform: translateY(5.5vw);
						i {
							margin-left: 1vw;
							background-repeat: no-repeat;
							background-size: 100%;
							background-position: center;
						}
					}
			    	.mores {
			    		i {
			    			display: block;
			    			width: 4.5vw;
			    			height: 2.5vw;
			    			background-image: url("../../../static/img/down.png");
			    		}
			    	}
			    	.lesss {
			    		i {
			    			display: block;
			    			width: 4.5vw;
			    			height: 2.5vw;
			    			background-image: url("../../../static/img/up.png");
			    		}
			    	}
			    }
			}
			.rule-content {
				padding-top: 4vw;
				min-width: 22.8vw;
				display: flex;
				flex-direction: column;
				>div {
					width: 18.8vw;
					height: 10.6vw;
					border-radius: 8px;
					box-shadow: 0px 0px 3px 1px #ddd;
					line-height: 10.6vw;
					display: flex;
					justify-content: center;
					transform: translateX(4vw);
					* {
						font-size: 3.6vw;
						color: #0093FF;
					}
					i{
						font-size: 3.8vw;
						color: #9B9B9B;
						padding-right: 1vw;
						&.zxsh-icon-xunzhang1 {
							font-size: 4.6vw;
						}
					}

				}
				div + div {
					margin-top: 2vw;
				}
			}
		}
	}
	.news-content {
		width: 100%;
		.news-item {
			margin: 0 4vw;
			border-bottom: 0.01vw solid #E5E5E5;
			&:last-child {
				border-bottom: none;
			}
		}
	}
	.mt-4{
		margin-top: 4vw;
	}
</style>