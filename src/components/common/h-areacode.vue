<!--
	isSelector: 1为下拉选择框；2为输入框
-->
<template>
	<div class="areacode-wrap">
		<select
		  v-if="isSelector==1" 
		  @change="$emit('change', $event.target.value)"
		  :value="value"
		  class="inline-select form-left">
			<option value="86">中国大陆+86</option>
			<option value="852">中国香港+852</option>
			<option value="853">中国澳门+853</option>
			<option value="886">中国台湾+886</option>
			<option value="60">马来西亚+60</option>
			<option value="82">韩国+82</option>
			<option value="81">日本+82</option>
			<option value="850">朝鲜+850</option>
			<option value="1">美国+1</option>
			<option value="1">加拿大+1</option>
			<option value="44">英国+44</option>
			<option value="33">法国+33</option>
			<option value="358">芬兰+358</option>
			<option value="49">德国+49</option>
			<option value="61">澳大利亚+61</option>
			<option value="64">新西兰+64</option>
			<option value="66">泰国+66</option>
			<option value="84">越南+84</option>
			<option value="63">菲律宾+63</option>
			<option value="855">柬埔寨+855</option>
			<option value="46">瑞典+46</option>
			<option value="other">其他地区</option>
		</select>
		<span v-if="isSelector==1" class="select-arrow"></span>
		<input 
		  v-if="isSelector==2"
		  @change="$emit('change', $event.target.value)"
		  :value="value"
		  v-bind="$attr"
		  type="text"
		  placeholder="请输入区号"/>
	</div>
</template>

<script>
    export default {
    	props:{
    		isSelector: {
    			type: Number,
    			default: 1
    		},
    		value: {
    			type: String,
    			default: "86"
    		}
    	},
    	data(){
            return{}
        },
        mounted() {},
        computed: {},
        methods: {},
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
	
	.areacode-wrap{
		width: 30vw;
		position: relative;
		.inline-select {
			display: block;
			width: 100%;
			height: 100%;
		}
		.select-arrow{
			position: absolute;
			display: block;
			content: "";
			width: 0;
			height: 0;
			top: 50%;
			right: 2vw;
			transform: translateY(-50%);
			border-left: 2vw solid transparent;
		    border-right: 2vw solid transparent;
		    border-top: 2vw solid #666;
		    font-size: 3vw;
		}
	}
	

</style>
