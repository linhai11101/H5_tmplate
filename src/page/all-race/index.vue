<template>
	<div class="all-race">
		<div class="race-content clearfix">
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
			<div class="race-item">
				<div class="card-item">
					<div class="card-img b" :style="``"></div>
					<div class="card-desc">中原赛区</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		computed: {},
		created() {
			document.title = "所有赛区";
		},
		mounted() {},
		methods: {},
		components: {},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	 .all-race {
	 	width: 100%;
	 	height: 100%;
	 	.race-content {
	 		.race-item {
	 			float: left;
	 		}
	 	}
	 }
	 .card-item {
		min-width: 20vw;
		width: 20vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.card-img {
			width: 12vw;
			height: 12vw;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 50%;
			margin-top: 4.2vw;
			&.a {
				background-image:url("../../../static/img/1.jpg");
			}
			&.b {
				background-image:url("../../../static/img/2.jpg");
			}
			&.c {
				background-image:url("../../../static/img/3.jpg");
			}
			&.d {
				background-image:url("../../../static/img/avatar.jpg");
			}
			&.e {
				background-image:url("../../../static/img/img1.png");
			}
			&.f {
				background-image:url("../../../static/img/img2.png");
			}
		}
		.card-desc {
			width: 100%;
			height: 4.6vw;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: onwrap;
			font-size: 3.2vw;
			text-align: center;
			line-height: 4.6vw;
			margin-top: 3vw;
		}
	}
</style>