<template>
	<div class="register-content">
		<form class="h-form">
			<div class="form-line">
				<div class="form-label">
					<label>中国大陆 +86</label>
				</div>
				<div class="form-control">
					<h-input v-model="formData.phone" placeholder="请输入您的手机号"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-control">
					<h-input v-model="formData.pwd" placeholder="请输入您的密码"></h-input>
				</div>
			</div>
			<div class="form-line">
				<div class="form-control auth-code-box">
					<h-input v-model="formData.authCode" placeholder="请输入您的验证码"></h-input>
					<div class="auth-code">
						<div>获取验证码</div>
					</div>
				</div>
			</div>
			<div class="cross-line"></div>
			<div class="form-line">
				<div class="form-control">
					<h-input v-model="formData.pwd" placeholder="请输入您的昵称"></h-input>
				</div>
			</div>
			<div class="form-line">
				<label for="uploadHead" class="upload-head">
					<div class="form-label">
						<label>上传头像</label>
					</div>
					<div id="avatarArea">
						<img v-if="!formData.headPortrait" id="avatarRound" src="http://iph.href.lu/40x40?text=头像" alt="" />
						<img v-else id="avatarRound" :src="avatarImg" alt="" />
						<i class="el-icon-arrow-right"></i>
					</div>
					<input type="file" id="uploadHead" name="uploadHead" accept="image/*" v-show="false">
				</label>
			</div>
			<div class="agreement">
				<div class="agreement-checkbox">
    				<input type="checkbox" />
				</div>
				<div class="agreement-desc">
					我已阅并同意遵守<span @click="lookAgreement(2)">服务许可协议与隐私政策</span>
				</div>
			</div>
			<div class="form-btn">
				<div class="normal-btn">
					<button type="button">确认注册</button>
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
				formData: {},
				avatarImg: ""
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
<style lang="scss" scoped>
	.form-btn {
		margin-top: 6vw;
	}
	.upload-head {
		display: flex;
		justify-content: space-between;
		height: 100%;
		width: 100%;
		&:active {
			background-color: rgba(200,200,200,0.3);
		}
	}
	#avatarArea{
		display: flex;
		align-items: center;
		#avatarRound{
			width: 9vw;
			height: 9vw;
			border-radius: 50%;
		}
		&>i{
			position: relative;
			top: REM(-20);
			margin-left: REM(10);
			color: #C1C1C1;
			font-size: REM(24);
		}
	}
</style>