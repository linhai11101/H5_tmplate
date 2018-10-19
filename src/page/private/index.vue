<template>
	<div class="person-content">
		<div>
			<h-return></h-return>
		</div>
		<form class="h-form">
			<div class="form-line">
				<div class="form-label">
					<label>姓名</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.name" placeholder="请输入姓名"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-label">
					<label>手机</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.phone" placeholder="请输入手机"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-label">
					<label>身份证</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.iCard" placeholder="请输入身份证"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-label">
					<label>性别</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.sex" placeholder="请输入性别"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-label">
					<label>居住地区</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.area" placeholder="请输入居住地区"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-label">
					<label>详细地址</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.detail" placeholder="请输入详细地址"></h-input>
				</div>
			</div>
			<div class="form-btn">
				<div class="normal-btn">
					<button type="button">保 存</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
	import hReturn from "../../components/common/h-return";
	import hInput from "../../components/common/h-input";

	export default {
		data() {
			return {
				formData: {
					name: "",
					phone: "",
					iCard: "",
					sex: "",
					area: "",
					detail: ""
				}
			}
		},
		created() {},
		mounted() {},
		methods: {},
		watch: {
			"formData.name"(val) {
				console.log(val);
			}
		},
		components: {
			hReturn,
			hInput
		}		
	}
</script>
<style lang="scss" scoped>
	.h-form {
		padding: 0 4vw;
	}
	.form-btn {
		margin-top: 10vw;
	}
</style>