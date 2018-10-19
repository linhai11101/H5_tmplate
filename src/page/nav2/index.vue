<template>
	<div class="content">
		<div class="contribute">
			<div class="publisity-banner">
				<img src="../../../static/img/banner.png">
			</div>
			<div class="upload-state">
				<div class="upload-num">
					<!-- <p class="descr">上传作品(最多20张图)</p> -->
					<div class="descr">
						<span>已上传</span><span class="uploaded">8</span><span>/20</span>
					</div>
				</div>
				<div class="description2">单击图片可输入图片说明</div>
			</div>
			<div class="upload-content clearfix">
				<div class="upload-item" @click="picDesc">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					<img src="../../../static/img/avatar.jpg">
					<div class="delete-img"></div>
				</div>
				<div class="upload-item">
					
				</div>
			</div>
			<div class="input-thing">
				<div class="input-title">
					<input type="text" name="title" placeholder="请在此输入您的作品标题，15字以内">
				</div>
				<div class="input-desc">
					<textarea 
					  resize="none"
					  rows="4"
                      cols="100"
                      placeholder="请描述您的作品，200字以内">
                    </textarea>
				</div>
			</div>
			<div class="agreement">
				<div class="agreement-checkbox">
    				<input type="checkbox" />
				</div>
				<div class="agreement-desc">
					发稿即表示您已同意我们的<span @click="lookAgreement(1)">投稿条款</span>
				</div>
			</div>
			<div class="normal-btn">
				<button>确认参赛</button>
			</div>
		</div>

		<!-- 图片描述弹窗 -->
		<h-dialog
            width="90%" 
            top="20vh"
            title="图片说明" 
            :visible.sync="dialogImgDesc"
            v-if="dialogImgDesc"
            @cancel="cancelImgDes">
            <div class="img-desc-banner">
            	<h-banner
            	  :swiperBoxWidth="50"
            	  :hashDot="false"
            	  :autoPlay="false"
            	  :btnRight="3"
				  :btnLeft="3"
				  :currIndex="currentIndex">
				</h-banner>
            </div>
            <div class="img-desc-input">
            	<textarea placeholder="描述当前图片，200字以内" maxlength="200"></textarea>
            </div>
            <div class="normal-btn" style="margin-bottom: 2vw;padding: 0 4vw;">
				<button>确 定</button>
			</div>
        </h-dialog>
        <!-- 手机绑定 -->
        <h-dialog
            width="90%"
            title="请先手机号码注册，才可投稿"
            top="20%"
            :visible.sync="phoneAsignShow">
            <div class="phone-bind">
            	<div class="info-gather">
            		<div class="flex-item phone-num border-bot">
            			<div>
            				<h-areacode></h-areacode>
            			</div>
            			<div class="input-content">
            				<h-input></h-input>
            			</div>
            		</div>
            		<div class="flex-item autho-code border-bot">
            			<div class="input-content">
            				<h-input></h-input>
            			</div>
            			<div><span>获取验证码</span></div>
            		</div>
            	</div>
            	<div class="agreement">
					<div class="agreement-checkbox">
	    				<input type="checkbox" />
					</div>
					<div class="agreement-desc">
						我已阅并同意遵守<span @click="lookAgreement(2)">服务许可协议与隐私政策</span>
					</div>
				</div>
	            <div class="normal-btn" style="margin-bottom: 2vw;">
					<button>确认注册</button>
				</div>
            </div>
        </h-dialog>
        <!-- 协议 -->
        <h-dialog
            width="90%"
            title="摄影大赛投稿协议"
            top="10%"
            :visible.sync="submitShow">
            <h-submit></h-submit>
        </h-dialog>
        <h-dialog
            width="90%"
            title="摄影大赛服务协议"
            top="10%"
            :visible.sync="serviceShow"
            :zIndex="10001">
            <h-service></h-service>
        </h-dialog>
	</div>
</template>
<script>
	import hDialog from "../../components/common/dialog";
	import hBanner from "../../components/common/h-banner";
	import hSubmit from "../../components/common/agreement/submit";
	import hService from "../../components/common/agreement/service";
	import hInput from "../../components/common/h-input";
	import hAreacode from "../../components/common/h-areacode";
	export default {
		data() {
			return {
				dialogImgDesc: false,
				submitShow: false,
				serviceShow: false,
				phoneAsignShow: false,

				currentIndex: 0,

				formData: {
					uploadImgs: [1,1,1,1,1,1,1,1]
				}
			}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			cancelImgDes() {
				this.dialogImgDesc = false;
			},
			lookAgreement(type) {
				type == 1 ? this.submitShow = true : this.serviceShow = true;
			},
			picDesc() {
				this.dialogImgDesc = true;
				this.currentIndex = 1;
			}
		},
		components: {
			hDialog,
			hBanner,
			hSubmit,
			hInput,
			hAreacode,
			hService
		},
		watch: {}
	}
</script>
<style lang="scss" scoped>
	.content {
		height: 100%;
		.contribute {
			padding: 3.2vw;
			.publisity-banner {
				width: 100%;
				img {
					width: 100%;
				}
			}
			.input-thing {
				margin-top: 1vw;
				> div {
					border-bottom: 0.01vw solid #eee;
					padding: 2vw 0;
				}
				.input-title {
					height: 10vw;
					display: flex;
					input {
						height: 100%;
						width: 100%;
					}
				}
				.input-desc {
					width: 100%;
					textarea {
						width: 100%;
						height: 12vh;
						vertical-align: bottom;
					}
				}
			}
			.upload-content {
				margin-top: 2.7vw;
				.upload-item {
					position: relative;
					width: 29.8vw;
					height: 29.8vw;
					border-radius: 2vw;
					overflow: hidden;
					float: left;
					margin-top: 2vw;
					&:nth-child(3n+1) {
						margin-left: 0 !important;
					}
					img {
						width: 100%;
						height: 100%;
					}
					.delete-img {
						position: absolute;
						top: 1.6vw;
						right: 1.6vw;
						width: 5vw;
						height: 5vw;
						background-image: url("../../../static/img/icon/error_n.png");
						background-repeat: no-repeat;
						background-size: 60%;
						background-position: center;
						background-color: rgba(0,0,0,0.7);
						border-radius: 50%;
					}
				}
				.upload-item + .upload-item {
					margin-left: 2vw;
				}
			}
			.upload-state {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.upload-num {
					.descr {
						color: #333333;
						font-size: 4vw;
						.uploaded {
							color: #0093FF;
							padding-left: 2vw;
						}
					}
				}
				.description2 {
					color: #9B9B9B;
					font-size: 2vw;
				}
			}
		}
	}
	.img-desc-banner {
		width: 100%;
	}
	.img-desc-input {
		padding: 2vw 4vw;
		box-sizing: border-box;
		width: 100%;
		textarea {
			padding: 2.5vw;
			box-sizing: border-box;
			background-color: rgba(200,200,200,0.3);
			width: 100%;
			height: 35vw;
			resize: none;
			border-radius: 2vw;
		}
		
	}
	.phone-bind {
		padding: 4vw;

		.flex-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.phone-num, .autho-code {
			padding: 3vw 0;
		}
		.autho-code {
			>div:last-child {
				width: 40vw;
				border-left: 0.15vw solid #eee;
			    text-align: center;
			    color: #0093FF;
			    font-size: 3.5vw;
			}
		}
		.input-content {
			width: 100%;
		}
	}
	.border-bot {
		border-bottom: 0.15vw solid #f5f5f5;
	}
</style>