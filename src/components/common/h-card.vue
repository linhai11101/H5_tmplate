<template>
	<div class="card-content">
		<div class="card-box">
			<div class="card-list-box" :style="`height:${cardListBox}`">
				<div class="card-list">
					<div class="card-item">
						<div class="card-img a" :style="``"></div>
						<div class="card-desc">总赛区</div>
					</div>
					<div class="card-item">
						<div class="card-img b" :style="``"></div>
						<div class="card-desc">华东赛区</div>
					</div>
					<div class="card-item">
						<div class="card-img c" :style="``"></div>
						<div class="card-desc">华南赛区</div>
					</div>
					<div class="card-item">
						<div class="card-img d" :style="``"></div>
						<div class="card-desc">华北赛区</div>
					</div>
					<div class="card-item">
						<div class="card-img e" :style="``"></div>
						<div class="card-desc">西部赛区</div>
					</div>
					<div class="card-item">
						<div class="card-img f" :style="``"></div>
						<div class="card-desc">中原赛区</div>
					</div>
				</div>
			</div>
			<div class="card-all" v-if="hashOptCard" @click.prevent="moreRace"><p></p><p></p><p></p></div>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		props: {
			cardRadius: {
				type: String,
				default: "50%"
			},
			itemCardWidth: {
				type: String,
				default: "20vw"
			},
			itemCardImgWidth: {
				type: String,
				default: "12vw"
			},
			itemCardImgHeight: {
				type: String,
				default: "12vw"
			},
			cardListBox: {
				type: String,
				default: "16.6vw"
			},
			hashOptCard: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		computed: {},
		created() {},
		mounted() {
			
		},
		methods: {
			moreRace() {
				this.$router.push({
					name: "allRace"
				})
			}
		},
		components: {},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.card-box {
		width: 100%;
		height: 100%;
		padding: 3.3vw 0;
		position: relative;
		box-sizing: border-box;
		.card-all {
			width: 20vw;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			background: linear-gradient(left, rgba(255,255,255,0.1), #fff 20%, #fff);
			background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.1)), color-stop(20%, #fff), color-stop(20%, #fff));
			display: flex;
			justify-content: center;
			align-items: center;
			p {
				width: 1.2vw;
				height: 1.2vw;
				background-color: #0093ff;
				border-radius: 50%;
				transform: translateY(-2vw);
			}
			p + p {
				margin-left: 1.2vw;
			}
		}
		.card-list {
			width: 100%;
			overflow-x: scroll;
			display: flex;
			justify-content: flex-start;
			padding-bottom: 3vw;
			.card-item {
				min-width: 20vw;
				width: 20vw;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				&:last-child {
					padding-right: 20vw;
				}
				.card-img {
					width: 12vw;
					height: 12vw;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
					border-radius: 50%;
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
					font-size: 2.5vw;
					text-align: center;
					line-height: 4.6vw;
				}
			}
		}
	}
</style>