<template>
	<div class="water-fall-content">
		<div class="column-content">
			<div class="column-item" v-for="(item, index) in dataList" :ref="`column${index}`">
				<div class="column-groove" v-for="a in item.data">
					<slot v-bind:item="a">
						<h-pannel-card
						  :imgShow="true"
						  :data="a">
						</h-pannel-card>  	
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import hPannelCard from "./h-pannel-card";

	const cItem = {columnHeight: 0, data: new Array()}

	export default {
		props: {
			column: {
				type: Number,
				default: 2
			},
			hashNewData: {
				type: Boolean,
				default: false
			},
			clearAll: {
				type: Boolean,
				default: false
			},
			data: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				dataList: [],
				insertIndex: 0,
				count: 0
			}
		},
		computed: {},
		created() {
			this.init();
		},
		mounted() {},
		methods: {
			init() {
				for (var i = 0; i < this.column; i++) {
					this.dataList.push(JSON.parse(JSON.stringify(cItem)));
				};
				if (this.data.length != 0) {
					this.dataFormat();
				}
			},
			clear() {
				this.dataList.forEach(item => {
					item.columnHeight = 0;
					item.data = new Array();
				});
				this.insertIndex = 0;
			},	
			dataFormat() {
				if (this.clearAll) {
					this.$emit("update:clearAll", false);
					this.clear();
				}
				if (this.data.length == this.count) {
					this.count = 0;
					this.$emit("update:data", new Array());
					return;
				}
				this.dataList[this.insertIndex].data.push(this.data[count]);
				this.getCurrentColumnH();
				this.count ++;
			},
			getCurrentColumnH() {
				this.$nextTick(() => {
					this.dataList[this.insertIndex].columnHeight = this.$ref[`column${this.insertIndex}`].offsetHeight;
					let minHeight = this.dataList[this.insertIndex].columnHeight;
					this.dataList.forEach((item, index) => {
						if (minHeight > item.columnHeight) {
							minHeight = item.columnHeight;
							this.insertIndex = index;
						}
					});
					this.dataFormat();
				})
			}
		},
		watch: {
			hashNewData(val) {
				if (val) {
					if (this.data.length != 0) {
						this.dataFormat();
					}
				}
			}
		},
		components: {
			hPannelCard
		}
	}
</script>
<style lang="scss" scoped>
	.water-fall-content {
		width: 100%;
		height: 100%;
		.column-content {
			width: 100%;
			height: 100%;
			display: flex;
			flex: 1;
			justify-content: flex-start;
			align-items: center;
			.column-item {
				.column-groove {

				}
			}
		}
	}
</style>