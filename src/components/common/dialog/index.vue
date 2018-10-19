<template>
	<transition name="dialog">
		<div 
			class="dialog"
			v-if="visible"
			:style="zIndex">
			<div class="content" :style="`width:${width};top:${top}`">
				<header class="header">
					<slot name="header">
						<div class="title" v-text="title"></div>
						<div class="cancel" @click="close">
							<p></p>
						</div>
					</slot>
				</header>
				<main class="main">
					<slot></slot>
				</main>
				<footer>
					<slot name="footer">
						<div class="footer" v-if="hashBtn">
							<button class="confirm side" @click="confirm" >确 定</button>
							<button class="cancel side" @click="cancel">取 消</button>
						</div>
					</slot>
				</footer>
			</div>
			<div class="mark"></div>
		</div>
	</transition>
</template>
<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: "标题"
			},
			width: {
				type: String,
				default: ""
			},
			hashBtn: {
				type: Boolean,
				default: false
			},
			top: {
				type: String,
				default: "50%"
			},
			zIndex: {
				type: Number,
				default: 1000
			}
		},
		data() {
			return {

			}
		},
		activated() {},
		created() {},
		mounted() {},
		computed: {},
		methods: {
			close() {
				this.$emit("update:visible", false);
			},
			cancel() {
				this.close();
				this.$emit("cancel");
			},
			confirm() {
				this.$emit("canfirm");
			}
		},
		watch: {
			visible(val, oldVal) {

			}
		}
	}
</script>
<style lang="scss" scoped>

	.dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.content {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			background-color: #fff;
			z-index: 1002;
			border-radius: 2vw;
			overflow: hidden;
			.header {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding-bottom: 2vw;
				.title {
					width: 90%;
					text-align: center;
					font-size: 4vw;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.cancel {
					width: 10%;
					p {
						padding-bottom: 100%;
						background-image: url("./img/error_rg.png");
						background-size: 80%;
						background-position: center;
						background-repeat: no-repeat;
						&:active {
							background-color: rgba(200,200,200,0.6);
						}
					}
				}
			}
			.main {
				padding: 1vw;
				max-height: 70vh;
				overflow-y: scroll;
				box-sizing: border-box;
			}
			.footer {
				text-align: center;
				height: 6vh;
				display: flex;
				border-top: 0.1vw solid #ccc;
				button {
					font-size: 4.2vw;
					background-color: #fff;
					&.confirm {
						color: #ff921f; 
					}
					&.cancel {
						color: #666;
					}
					&.side {
						width: 50%;
						height: 100%;
					}
					&:active {
						background-color: rgba(200,200,200,0.1);
					}
				}
				button + button {
					border-left: 0.1vw solid #ccc;
				}
			}
		}
		.mark {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.3);
			z-index: 1001;
		}
	}
	.dialog-enter-active, .dialog-leave-active {
	  	transition: opacity .4s;
	}
	.dialog-enter, .dialog-leave-active {
	  	opacity: 0;
	}
	// .dialog-enter-active {
	// 	animation: bounce-in .5s;
	// }
	// .dialog-leave-active {
	// 	animation: bounce-in .5s reverse;
	// }
	// @keyframes bounce-in {
	// 	0% {
 //    		transform: scale(0);
	// 	}
	// 	50% {
	// 		transform: scale(1.1);
	// 	}
	// 	100% {
	// 		transform: scale(1);
	// 	}
	// }
</style>