<template>
	<div class="pannel-component" :style="`width: ${width}; height: ${height}`" @click="route">
		<div 
		  class="pic-area"
		  :style="`
		  width: ${picAreaWidth}; 
		  height: ${picAreaHeight}; 
		  background-image: url(${$imgBaseUrl + data.list[0].url}?x-oss-process=image/resize,p_25)`"
		  v-if="!imgShow">
			<div class="pic-num">
				<h-img-num :num="data.list.length"></h-img-num>
			</div>
			<div class="auth-area">
				<div
				  class="auth-portrait" 
				  :style="`
				  background-image: url(${data.headProtrait.indexOf('http://') != -1 ? data.headProtrait : $imgBaseUrl + data.headProtrait})
				  `"></div>
				<div class="auth-name" v-text="data.nickName"></div>
			</div>
		</div>
		<div class="pic-area" v-else>
			<img src="../../../static/img/1.jpg">
			<div class="pic-num">
				<h-img-num :num="data.list.length"></h-img-num>
			</div>
			<div class="auth-area">
				<div
				  class="auth-portrait" 
				  :style="`
				  background-image: url(${data.headProtrait.indexOf('http://') != -1 ? data.headProtrait : $imgBaseUrl + data.headProtrait})
				  `"></div>
				<div class="auth-name" v-text="data.nickName"></div>
			</div>
		</div>
		<div
		  class="descreption"
		  :style="`
		  font-size: ${descpFontSize};
		  color: ${descpColor};
		  height: ${descpHeight};
		  lin-height: ${descpLineHeight};
		  `">
			{{data.title}}
		</div>
		<div class="bot-opt" :style="`margin-bottom: ${botOptMarginBto}`">
			<div class="vote-num">
				<i class="zxsh-icon-toupiao"></i>
				<span v-text="data.votes"></span>
			</div>
			<div class="vote-opt" v-show="hashVote">
				<button>
					<span>投票</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	import hImgNum from "./h-img-num";
	import {
		setStore
	} from "../../config/mUtils";
	export default {
		props: {
			data: {
				type: Object,
				default() {
					return {}
				}
			},
			imgShow: {
				type: Boolean,
				default: false
			},
			width: {
				type: String,
				default: "100%"
			},
			height: {
				type: String,
				default: "100%"
			},
			picAreaWidth: {
				type: String,
				default: "45vw"
			},
			picAreaHeight: {
				type: String,
				default: "30.4vw"
			},
			descpFontSize: {
				type: String,
				default: "3.5vw"
			},
			descpColor: {
				type: String,
				default: "#333333"
			},
			descpHeight: {
				type: String,
				default: "8.8vw"
			},
			descpLineHeight: {
				type: String,
				default: "4.4vw"
			},
			hashVote: {
				type: Boolean,
				default: true
			},
			botOptMarginBto: {
				type: String,
				default: "0"
			}
		},
		data() {
			return {
				
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			route() {
				console.log("router");
			}
		},
		components: {
			hImgNum
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.pannel-component {
		
		box-shadow: 0px 0px 3px 1px #ddd;
		.descreption {
			font-weight: bold;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			padding: 0 2.1vw;
			margin: 2vw 0;
			box-sizing: border-box;
		}
		.bot-opt {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 1.5vw;
			padding: 0 2.6vw;
			.vote-num {
				flex: 1;
				display: flex;
				justify-content: flex-start;
				i {
					color: #0093FF;
					font-size: 4vw;
					padding-right: 1vw;
				}
				span {
					color: #5C5C5C;
				}
				* {
					font-size: 2.5vw;
				}
			}
			.vote-opt {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				button {
					padding: 1.5vw 5.8vw;
					border-radius: 10vw;
					background-color: #0093FF;
					span {
						color: #fff;
					}
				}
				* {
					font-size: 3vw;
				}
			}
		}
		.pic-area {
			background-image:url("../../../static/img/1.jpg");
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			position: relative;
			img {
				width: 100%;
			}
			.pic-num {
				position: absolute;
				top: 2vw;
				right: 2vw;
			}
			.auth-area {
				position: absolute;
				left: 2vw;
				bottom: 2vw;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.auth-portrait {
					width: 5.3vw;
					height: 5.3vw;
					border-radius: 50%;
					background-image:url("../../../static/img/avatar.jpg");
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}
				.auth-name {
					font-size: 3vw;
					color: #fff;
					padding-left: 1vw;
				}
			}
		}
	}
</style>