<template>
	<div class="input-component">
		<input
		  type="text"
		  @input="$emit('input', $event.target.value)"
		  v-bind:value="value"
		  v-bind="$attrs"
		  :placeholder="placeholder"
		  :autoComplete="autoComplete">
		<i class="clear-data" v-if="!!value" @click.stop="clearValue"></i>
	</div>
</template>
<script>
	export default {
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: [String, Number],
			type: {
				type: String,
				default: "text"
			},
			autoComplete: {
				type: String,
				default: 'off'
			},
			placeholder: {
				type: String,
				default: "请填写信息"
			}
		},
		data() {
			return {}
		},
		computed: {
		    inputListeners: function () {
		      var vm = this
		      // `Object.assign` 将所有的对象合并为一个新对象
		      return Object.assign({},
		        // 我们从父级添加所有的监听器
		        this.$listeners,
		        // 然后我们添加自定义监听器，
		        // 或覆写一些监听器的行为
		        {
		          // 这里确保组件配合 `v-model` 的工作
		          input: function (event) {
		            vm.$emit('input', event.target.value)
		          }
		        }
		      )
		    }
		},
		created() {},
		mounted() {},
		methods: {
			clearValue() {
				this.$emit('input', '');
				this.$emit('clear');
			}
		}
	}
</script>
<style lang="scss" scoped>
	.input-component {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: relative;
		.clear-data {
			display: block;
			width: 4vw;
			height: 4vw;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			right: 2vw;
			transform: translateY(-50%);
			background-image: url("../../../static/img/icon/error_n.png");
			background-color: rgba(100,100,100,0.6);
			background-size: 65%;
			background-repeat: no-repeat;
			background-position: center;
		}
		input {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 1vw;
			outline: none;
			border: none;
			display: block;
			font-size: 3.4vw;
			color: #333;
			padding-right: 8vw;
		}
	}
</style>