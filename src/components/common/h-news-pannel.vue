<template>
	<div class="news-component">
		<div class="news-img">
			<div class="news-img-num">
				<h-img-num></h-img-num>
			</div>
		</div>
		<div class="news-title">涨姿势!原来这些是世界上最恐怖的景点</div>
		<div class="news-time">2017-07-26 15:30</div>
	</div>
</template>
<script>
	import hImgNum from "./h-img-num";
	export default {
		props: {},
		data() {
			return {}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {},
		components: {
			hImgNum
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.news-component {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 4vw 0;
		.news-img {
			width: 100%;
			position: relative;
			height: 48vw;
			background-image: url("../../../static/img/img1.png");
			background-repeat: no-repeat;
			background-size: 100%;
			background-position: center;
			.news-img-num {
				position: absolute;
				right: 2.2vw;
				bottom: 2.2vw;
			}
		}
		.news-title{
			width: 100%;
			font-size: 3.6vw;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: bold;
			white-space: nowrap;
			padding: 2vw;
		}
		.news-time{
			width: 100%;
			font-size: 2.5vw;
			color:  #5C5C5C;
		}
	}
	
</style>