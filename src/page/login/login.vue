<template>
	<div class="login-content">
		<form class="h-form">
			<div class="form-line">
				<div class="form-label">
					<label>中国大陆 +86</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.phone" placeholder="请输入您的手机号"></h-input>
				</div>
			</div>
			<div class="form-line" v-if="isPassward">
				<div class="form-control">
					<h-input v-model="formData.pwd" placeholder="请输入您的密码"></h-input>
				</div>
			</div>
			<div class="form-line" v-else>
				<div class="form-control auth-code-box">
					<h-input v-model="formData.authCode" placeholder="请输入您的验证码"></h-input>
					<div class="auth-code">
						<div>获取验证码</div>
					</div>
				</div>
			</div>
			<div class="opt-pannel">
				<a href="javascript:;">忘记密码</a>
				<a href="javascript:;" @click="isPassward = !isPassward">获取动态密码</a>
			</div>
			<div class="form-btn">
				<div class="normal-btn">
					<button type="button">立即登录</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
	import hInput from "../../components/common/h-input";
	export default {
		data() {
			return {
				isPassward: true,
				formData: {
					phone: "",
					pwd: "",
					authCode: ""
				}
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {},
		watch: {},
		components: {
			hInput
		}
	}
</script>
<style lang="scss">
	.form-btn {
		margin-top: 6vw;
	}
	
	.opt-pannel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2vw;
		a {
			font-size: 3.2vw;
			line-height: 12vw;
			color: #4A90E2;
		}
	}
</style>