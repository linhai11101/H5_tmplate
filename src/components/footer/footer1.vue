<template>
	<div class="footer">
		<div :class="['f-item', {active: $store.state.botmNav == 1}]" @touchstart.prevent="cutNav(1)">
			<p 
			  :class="['f-icon', $store.state.botmNav == 1 ? 'zxsh-icon-shouyetianchong' : 'zxsh-icon-shouye']">
			</p>
			<p class="f-text">首页</p>
		</div>
		<div :class="['f-item', {active: $store.state.botmNav == 2}]" @touchstart.prevent="cutNav(2)">
			<p 
			  :class="['f-icon', $store.state.botmNav == 2 ? 'zxsh-icon-camera_fill' : 'zxsh-icon-camera']">
			</p>
			<p class="f-text">参赛投稿</p>
		</div>
		<div :class="['f-item', {active: $store.state.botmNav == 3}]" @touchstart.prevent="cutNav(3)">
			<p 
			  :class="['f-icon', $store.state.botmNav == 3 ? 'zxsh-icon-chart' : 'zxsh-icon-chart-o']">
			</p>
			<p class="f-text">作品投票</p>
		</div>
		<div :class="['f-item', {active: $store.state.botmNav == 4}]" @touchstart.prevent="cutNav(4)">
			<p 
			  :class="['f-icon', $store.state.botmNav == 4 ? 'zxsh-icon-jiangbei' : 'zxsh-icon-jiangbei2']">
			</p>
			<p class="f-text">获奖作品</p>
		</div>
		<div :class="['f-item', {active: $store.state.botmNav == 5}]" @touchstart.prevent="cutNav(5)">
			<p 
			  :class="['f-icon', $store.state.botmNav == 5 ? 'zxsh-icon-yonghudianji' : 'zxsh-icon-yonghu']">
			</p>
			<p class="f-text">个人中心</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			cutNav(flag) {
				this.$router.push({
					name: `nav${flag}`
				});
			}
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/mixin.scss";
	.footer {
		width: 100vw;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		overflow: hidden;
		box-shadow: 0px -1px 5px 0px #efefef;
		.f-item {
			display: flex;
			align-items: center;
			flex-direction: column;
			flex: 1;
			height: 14vw;
			line-height: 8vw;
			* {
				color: #999;
			}
			.f-icon {
				height: 5vw;
				flex: 1;
				text-align: center;
				font-size: 5vw;
				&[class*='zxsh-icon-camera'] {
					font-size:6.5vw;
				}
				&.zxsh-icon-jiangbei{
					font-size:5.8vw;
				}
			}
			.f-text {
				font-size: 3.2vw;
				flex: 1;
			}
			&.active {
				*{
					color: #0093FF;
				}
			}
		}
	}
</style>