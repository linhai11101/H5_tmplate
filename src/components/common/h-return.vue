<template>
	<div class="return-content" :style="`background-color: ${bgColor};`">
		<div class="r-box" @click="retrun">
			<i class="zxsh-icon-back"></i>
			<span v-text="text"></span>
		</div>
		<div v-if="hashTitle" class="r-title" v-text="title"></div>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: "标题"
			},
			text: {
				type: String,
				default: "返回上页"
			},
			bgColor: {
				type: String,
				default: "#f9f9f9"
			},
			hashTitle: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		created() {},
		mounted() {},
		methods: {
			retrun() {
				this.$router.push({
					name: "/"
				});
			}
		},
		components: {},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.return-content {
		width: 100%;
		height: 13.3vw;
		padding: 0 3.2vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		white-space: nowrap;
		.r-title {
			font-size: 3.6vw;
			font-weight: 800;
			width: 100%;
			text-indent: 5vw;
		}
		.r-box {
			border: 0.15vw solid #9B9B9B;
			padding: 1.6vw 2.8vw;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-radius: 10vw;
			&:active {
				background-color: rgba(200,200,200,0.2);
			}
			* {
				color: #999;
			}
			span {
				margin-left: 1vw;
				font-size: 2.8vw;
			}
		}
	}
</style>