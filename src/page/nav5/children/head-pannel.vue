<template>
	<div :class="['head-main', isDayTime ? 'daytime' : 'daynight']" >
		<div class="user-info">
			<div class="user-img"></div>
			<div class="user-name">Dustin Tran</div>
		</div>
		<div class="edit-info">
			<div class="noselect">
				<span>编辑资料</span>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		props: {},
		data() {
			return {
				isDayTime: true
			}
		},
		created() {
			this.judgeDayNight();
		},
		mounted() {},
		methods: {
			judgeDayNight() {
				let now = new Date();
				let time = now.getHours();
				this.isDayTime = time >= 6 && time <=18 ? true : false;
			}
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.head-main {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
		&>div {
			position: absolute;
			bottom: 4vw;
			height: 14vw;
		}
		&.daytime {
			background-image: url("../../../../static/img/daytime.jpg");
		}
		&.daynight {
			background-image: url("../../../../static/img/night.jpg");
		}
		.user-info {
			left: 4vw;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.user-img {
				height: 100%;
				width: 14vw;
				background-repeat: no-repeat;
				background-size: 100%;
				background-position: center;
				border-radius: 50%;
				overflow: hidden;
				background-image: url("../../../../static/img/user.png");
			}
			.user-name {
				font-size: 3.8vw;
				color: #fff;
				padding-left: 2vw; 
				font-weight: bold;
			}
		}
		.edit-info {
			right: 4vw;
			color: #fff;
			display: flex;
			align-items: center;
			&>div {
				padding: 1.6vw 4vw;
				border: 0.015vw solid #fff;
				font-size: 3.6vw;
				border-radius: 8vw;
				overflow: hidden;
				background-color: rgba(255,255,255,0.1);
				&:active {
					background-color: rgba(100,100,100,0.2);
				}
			}
		}
	}
</style>