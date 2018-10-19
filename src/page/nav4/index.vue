<template>
	<div class="content awards">
		<div class="h-nav-box">
			<div class="h-nav">
				<div
				  v-for="(item,index) in awardsNavs"
				  :class="['h-nav-item', {active: navIndex==index}]"
				  @touchstart="changeNav(index)">
					<span>人气奖</span>
				</div>
			</div>
		</div>
		<div class="data-content">
			<div class="side-nav">
				<div class="nav-content">
					<ul class="award-nav-pannel" v-for="(item,index) in awardsNavs">
						<h1 class="nav-item" v-text="key"></h1>
						<li class="nav-item" v-for="item in awardsNavs[key]" v-text="item.name"></li>
					</ul>
				</div>
			</div>
			<div class="data-list">
				<div class="list-content">
					<div  class="list-item" v-for="item in dataList">
						<h-pannel-card
						  picAreaWidth="100%"
						  picAreaHeight="35vw"
						  :hashVote="false"
						  botOptMarginBto="2vw"
						  descpFontSize="4vw"
						  descpHeight="11vw"
						  descpLineHeight="5.5vw">
						</h-pannel-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import hPannelCard from "../../components/common/h-pannel-card";
	export default {
		props: {},
		data() {
			return {
				navIndex: 0,
				awardsNavs: [],

				dataList: [1,1,1,1,1]
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			changeNav(idx) {
				this.navIndex = idx;
			}
		},
		watch: {},
		components: {
			hPannelCard
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/mixin";
	.awards {
		display: flex;
		flex-direction: column;
		height: 100%;
		.data-content {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 100%;
			.side-nav {
				width: 30vw;
				height: 100%;
				overflow-y: scroll;
				.award-nav-pannel {
					.nav-item {
						height: 13.3vw;
						line-height: 13.3vw;
						text-align: center;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					h1 {
						font-size: 3.8vw;
						font-weight: bold;
						background-color: #f9f9f9;
					}
					li {
						font-size: 3vw;
						background-color: #f1f2f3;
						&:active {
							background-color: rgba(100,100,100,0.2);
						}
					}
				}
			}
			.data-list {
				width: 100%;
				height: 100%;
				overflow-y: scroll;
				box-sizing: border-box;
				padding: 2.6vw;
				display: flex;
				flex-direction: column;
				.list-item + .list-item {
					border-top: 0.15vw solid #ccc;
					margin-top: 2.6vw;
				}
			}
		}
	}
</style>