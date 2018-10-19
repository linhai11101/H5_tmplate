<template>
	<div class="img-num">
		<i class="zxsh-icon-tupianzu"></i>
		<span v-text="num"></span>
	</div>
</template>
<script>
	export default {
		props: {
			num: {
				type: Number,
				default: 12
			}
		}
	}
</script>
<style lang="scss" scoped>
	.img-num {
		padding: 1.2vw 1.8vw;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 4vw;
		color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		*{
			font-size: 3vw;
		}
		span {
			font-size: 2.5vw;
			padding-left: 0.5vw;
		}
	}
</style>