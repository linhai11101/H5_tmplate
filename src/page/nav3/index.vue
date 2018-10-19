<template>
	<div class="content-work">
		<div class="work-nav">
			<div id="nav3Tab">
				<span v-bind:class="{active: (tabIndex==0)}" @click="toggleTab(0)">时间</span>
				<span v-bind:class="{active: (tabIndex==1)}" @click="toggleTab(1)">热度</span>
			</div>
			<div id="searchArea">
				<div class="double-padding">
					<div id="searchBar">
						<i class="zxsh-icon-sousuo"></i>
						<input v-model="searchKey" type="text" placeholder="作品编号／作品名／作者名" @input="search"/>
						<i class="clear-value" :style="searchKey ? `opacity: 1;` : ''" @click="clearValue"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="work-content">
			<div class="data-content">
				<h-water-fall
				  :hashNewData="hashNewData"
				  :data="workData"
				  :clearAll="clearChildData">
				</h-water-fall>
			</div>
		</div>
	</div>
</template>
<script>
	import hWaterFall from "../../components/common/h-water-fall";
	export default {
		data() {
			return{
				hashNewData: false,
				clearChildData: false,
				workData: [],

				tabIndex: 0,
				searchKey: ""
			}
		},
		computed: {},
		activated() {},
		created() {},
		mounted() {},
		methods: {
			toggleTab(type) {
				this.tabIndex = type;

				this.clearChildData = true;
			},
			search() {
				console.log(this.searchKey);
			},
			clearValue() {
				if (this.searchKey) {
					this.searchKey = "";
				}
			}

		},
		watch: {},
		components: {
			hWaterFall
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/mixin";
	.content-work{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.work-content {
		height: 100%;
		overflow-y: scroll;
	}
	.work-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		#nav3Tab{
			display: flex;
	    	justify-content: center;
	    	width: 100%;
	    	height: 14vw;
	    	line-height: 10vw;
			background: #fff;
			border-bottom: 0.01vw solid #eee;
	    	&>span{
	    		position: relative;
	    		margin: 0 6vw;
	    		color: #9B9B9B;
	    		font-size: 3.6vw;
	    		box-sizing: border-box;
	    		font-weight: 0;
	    		transition: all 0.15s;
	    		&:after {
	    			display: block;
					content: "";
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 0vw;
					height: 0vw;
					background: #0093FF;
					border-radius: 4vw;
					transition: all 0.15s;
					transform-origin: center;
	    		}
	    		&.active{
	    			color: #333333;
	    			font-weight: 800;
	    			&:after{
	    				width: 6vw;	
	    				height: 0.85vw;
	    			}
	    		}
	    	}
		}
		#searchArea{
			width: 94vw;
			height: 12.5vw;
			background: #fff;
			.double-padding{
				padding-top: 2vw;
				padding-bottom: 2vw;
			}
			#searchBar{
				position: relative;
				height: 8.5vw;
				line-height: 8.5vw;
				border-radius: 10vw;
				background: #F5F5F5;
				font-size: 0;
				.zxsh-icon-sousuo{
					position: absolute;
					left: 3vw;
					top: 50%;
					transform: translateY(-50%);
					color: #0093FF;
					font-size: 4vw;
				}
				.clear-value {
					position: absolute;
					width: 5vw;
					height: 5vw;
					background-color: rgba(100,100,100,0.4);
					background-image: url("../../../static/img/icon/error_n.png");
					background-size: 60%;
					background-position: center;
					background-repeat: no-repeat;
					border-radius: 50%;
					right: 2vw;
					top: 50%;
					transform: translateY(-50%);
					opacity: 0;
					transition: all 0.2s;
				}
				input{
					width: 100%;
					height: 8.5vw;
					line-height: 8.5vw;
					padding-left: 8vw;
					background: transparent;
					font-size: 3.4vw;
				}
			}
		}
	}
</style>