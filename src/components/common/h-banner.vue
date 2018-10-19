<template>
	<div class="swiper-content">
		<div class="swiper-box" :style="`width:${swiperBoxWidth}vw`" ref="swiperBox">
			<div 
			  class="swiper-banner" 
			  :style="`transform: translateX(${distance}px);transition-duration: ${duration}ms;`"
			  ref="swiperBanner"
			  @touchstart.stop="startMove" 
			  @touchmove.stop="moveBanner"
			  @touchend.stop="endMove">
				<div class="swiper-item" :style="``">
					<a href="javascript:;">
						<img src="../../../static/img/banner.png">
					</a>
				</div>
				<div class="swiper-item" :style="`min-width: 100%;`">
					<a href="javascript:;">
						<img src="../../../static/img/img1.png">
					</a>
				</div>
				<div class="swiper-item" :style="`min-width: 100%;`">
					<a href="javascript:;">
						<img src="../../../static/img/img2.png">
					</a>
				</div>
			</div>
			<div class="swiper-dot" v-if="hashDot">
				<p v-for="(item,index) in dataList" :class="[{active: currentIndex == index}]"></p>
			</div>
		</div>
		<div class="swiper-btn" v-if="hashBtn">
			<div class="next" :style="`right:${btnRight}vw`" @click="changeBtn(1)"></div>
			<div class="prev" :style="`left:${btnLeft}vw`" @click="changeBtn(-1)"></div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			swiperBoxWidth: {
				type: Number,
				default: 100
			},
			autoPlay: {
				type: Boolean,
				default: true
			},
			intervalTime: {
				type: Number,
				default: 3000
			},
			customRtio: {
				type: Number,
				default: 20
			},
			btnRight: {
				type: Number,
				default: 0
			},
			btnLeft: {
				type: Number,
				default: 0
			},
			hashBtn: {
				type: Boolean,
				default: true
			},
			hashDot: {
				type: Boolean,
				default: true
			},
			currIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				distance: 0,
				startLocal: 0,
				clientWidth: 0,
				timer: null,
				duration: 0,
				currentIndex: this.currIndex,
				dataList: [1,2,3],
				currentDistance: 0,
				totalMove: 0
			}
		},
		computed: {},
		created() {},
		mounted() {
			this.$nextTick(() => {
				this.clientWidth = this.$refs.swiperBox.clientWidth;
				this.autoPlay ? this.bannerAutoMove() : null;
				this.bannerMove();
			})
			
			window.addEventListener("resize", function() {
				this.clientWidth = this.$refs.swiperBox.clientWidth;
			}.bind(this));
		},
		methods: {
			changeBtn(type) {
				this.currentIndex += type;
				if (this.currentIndex < 0) this.currentIndex = this.dataList.length-1;
				this.bannerMove();
				this.autoPlay ? this.bannerAutoMove() : null;
				if (type = 1) {

				}else {

				}
			},
			startMove(e) {
				this.startLocal = e.touches[0].pageX;
				this.totalMove = 0;
				this.autoPlay ? this.bannerAutoMove() : null;
			},
			endMove() {
				
				let ratio = Math.floor(this.totalMove/this.clientWidth*100);
				switch(true) {
					case this.currentDistance >= 0: //滑右
						this.currentIndex == this.dataList.length -1 ? null : ratio > this.customRtio ? this.currentIndex++ : null;
						break;
					case this.currentDistance < 0: //滑左
						this.currentIndex <= 0 ? null : ratio > this.customRtio ? this.currentIndex-- : null;
						break;
				}
				this.bannerMove();
				this.clearDuration();
				this.autoPlay ? this.bannerAutoMove() : null;
			},
			moveBanner(e) {
				this.currentDistance = this.startLocal - e.touches[0].pageX;
				this.startLocal = e.touches[0].pageX;
				this.distance -= this.currentDistance;
				this.totalMove += Math.abs(this.currentDistance);
			},
			bannerMove() {
				this.duration = 300;
				this.currentIndex = this.currentIndex <= 0 ? 0 : this.currentIndex >= this.dataList.length ? 0 : this.currentIndex;
				this.distance = -this.clientWidth*this.currentIndex;
				this.clearDuration();
			},
			bannerAutoMove() {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.currentIndex++;
					
					this.bannerMove();
					this.clearDuration();
					this.bannerAutoMove();
				},this.intervalTime);
			},
			clearDuration(time) {
				let _time = time ? time : 300;
				setTimeout(() => {
					this.duration = 0;
				}, _time);
			},
		},
		components: {},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.swiper-content {
		width: 100%;
		height: 100%;
		position: relative;
		.swiper-btn {
			div	{
				width: 10vw;
				height: 50%;
				background-repeat: no-repeat;
				background-size: 100%;
				background-position: center;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}
			.next {
				background-image: url("../../../static/img/right.png");
				right: 0;
			}
			.prev {
				background-image: url("../../../static/img/left.png");
				left: 0;
			}
		}
		.swiper-box {
			height: 100%;
			overflow: hidden;
			margin: auto;
			position: relative;
			.swiper-dot {
				display: flex;
				justify-content: flex-start;
				position: absolute;
				bottom: 2vw;
				left: 50%;
				transform: translateX(-50%);
				p {
					width: 2vw;
					height: 2vw;
					background-color: #aaa;
					border-radius: 50%;
					&.active {
						background-color: #fff;
					}
				}
				p + p {
					margin-left: 2vw;
				}
			}
			.swiper-banner {
				display: flex;
				justify-content: flex-start;
				height: 100%;
				.swiper-item {
					min-width: 100%;
					flex: 1;
					a {
						display: block;
						height: 100%;
					}
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>