import fetcher from "./fetch";
import {judgeWeChat} from "../utils/judgeWeChat";

let lead = global.MODEL_ENV == "dialy" ? 1 : 2;

/**
 * 获取oss上传凭证
 */
export const registerOssSpace = uri => fetcher(`/oss/upload?dir=${uri}`, 'GET');
/**
 * 用户注册
 */
export const userRegister = data => fetcher('/h5/user/register', data, 'POST');
/**
 * 获取短信验证码
 */
export const getSmsCode = (areaCode, phone) => fetcher('/app/void/sms/code', {areaCode, phone}, 'POST');
/**
 * 获取短信验证码（登录和忘记密码）
 */
export const getLoginCode = (areaCode, phone) => fetcher('/sms/loginCode', {areaCode, phone}, 'POST');
/**
 * 登录
 * type {number} 登录的类型手机登录为2，验证码登录为1, 3为微信登录
 * areaCode {string} 区号（1和2）
 * phoneNumber {string} 电话号码（1和2）
 * password {string} 密码（手机登录）
 * verificationCode {string} 验证码（验证码登录）
 * formToken {string} 验证码token（验证码登录）
 * uniqueCode {string} wechat token （微信登录）
 * nickname {string} 用户名（微信登录）
 * headPortrait {string} 用户头像（微信登录）
*/ 
export const Login = data => fetcher('/h5/user/login', data, "POST", {responeType: "text"});
/**
 * 忘记密码
* password {string} 密码
* areaCode {string} 区号
* phone {string} 手机号
* verificationCode {string} 验证码
* formToken {string} 获取验证码的token
 */
export const userForget = (data) => fetcher('/h5/user/forget', data, 'POST');
/**
 * 退出登录
 */
export const userOut = () => fetcher('/h5/user/out', 'POST');
/**
 * 微信授权
 */
export const wechatLogin = uri => fetcher('/h5/user/wechat', {redirect_uri: uri}, 'POST');
/**
 * 微信端用户信息
 * code {string} 微信code
 * activityId {string} 活动id
 */
export const wechatInfo = (code, activityId) => fetch('/h5/user/back', {code, activityId}, 'POST');
/**
 * 请求是否已关注公众号
 */
export const userHasFollowed = () => fetcher('/h5/game/creation/submissionPage', 'POST');
/**
 * 微信分享凭证
 */
export const wechatShare = (url) => fetcher('/h5/share/signature', {url}, 'POST');
/**
 * 绑定手机
 */
export const userBind = (areaCode, phone) => fetcher('/h5/user/bind', {areaCode, phone}, 'POST');
/**
 * 首页头图获取（公告消息、分享文案、首页模块、活动规则）
 */
export const getBanner = activityId => fetcher('/h5/game/banner/info', {activityId}, 'POST');

/**
 * 投稿
	activityId	是	string	活动ID
	title	是	string	标题
	description	是	string	作品总描述
	list	是	array	图片参数列表
		url	是	string	图片地址
		description	否	string	描述
		width	否	int	图片宽像素
		height	否	int	图片高像素
		Shield	否	int	是否屏蔽(1—屏蔽)
		angle	否	int	旋转角度
		multiple	否	int	放大倍数
		model	否	string	机型
		photoAt	否	long	拍摄时间
		size	否	string	图片大小
		brand	否	string	手机品牌
		focal	否	string	焦距
		aperture	否	string	光圈
		shutterSpeed	否	string	快门速度
		iso	否	int	iso
		exposure	否	string	曝光补偿
		lens	否	string	镜头
		GPSLongitude	否	string	经度
		GPSLatitude	否	string	纬度
 */
export const contribute = (data) => {
	let url = lead == 1 ? '/h5/daily/creation/dailyContribute' : '/h5/game/creation/contribute';
	return fetcher(url, data, 'POST');
}
/**
* 精彩作品
* data {JSON}
	* activityId {string} 活动id 
	* orderBy {string} 排序passAt/votes
	* page {number} 页数索引
	* number {number} 每页的数目
	* sort {number} 默认-1
	* search {string} 搜索关键字
 */
export const wonderful = (data) => {
	let url = lead == 1 ? '/h5/daily/creation/goodCreation' : '/h5/game/creation/wonderfulworks';
	return fetcher(url, data, 'POST');
}
/**
 * 作品投票页列表(参数同上)
 */
export const creationInfo = (data) => {
	let url = lead == 1 '/h5/daily/creation/dailyInfo' : '/h5/game/creation/info';
	return fetcher(url, data, 'POST');
}
/**
 * 作品投票
 */
export const creationVote = (activityId, works_id, isWechat=1) => {
	isWechat = judgeWeChat() ? 1 : 0;
	let url = lead == 1 ? '/h5/daily/creation/dailyVote' : '/h5/game/creation/vote';
	return fetcher(url, {activityId, works_id, isWechat}, 'POST');
}
/**
 * 作品详情
 * works_id {string} 作品id
 */
export const creationDetail = works_id => { 
	let url = lead == 1 ? '/h5/daily/creation/dailyDetail' : '/h5/game/creation/detail';
	return fetcher(url, {works_id}, 'POST');
}
/**
 * 我的作品
 * activityId (string) 活动id
 * type (string) 
 	* 0为全部；1为待审核；2为已审核；3为已获奖；4为审核失败
 	* 0为系统消息；1为获奖消息
 * page (string) 页面索引
 * number (string) 每一页的数据量
 */
export const creationCheck = data => {
	let url = lead == 1 ? '/h5/daily/creation/dailyCheck' : '/h5/game/creation/check';
	return fetcher(url, data, 'POST');
}
/**
 * 我的投票
 * activityId
 * page
 * number
 */
export const myVotelist = data => fetcher('/h5/game/creation/votelist', data, 'POST');
/**
 * 消息
 * activityId
 * type
 * page
 * number
 */
export const myMessage = data => fetcher('/h5/game/message/list', data, 'POST');
/**
 * 奖项名
 */
export const awardsName = activityId => fetcher('/h5/game/creation/awardsPage', {activityId}, 'POST');
/**
 * 获奖作品（人气奖）
 * activityId
 * awardsId
 * type
 * page
 * number
 */
export const getAwards = (data) => fetcher('/h5/game/creation/awards', data, 'POST');
/**
 * 获奖作品（周期奖和终评大奖）
 * activityId
 * awardsId
 * rank
 * type
 * page
 * number
 */
export const getAwardsRank = data => fetcher('/h5/game/creation/prizeInfo', data, 'POST');
/**
 * 每周好稿
 * activityId
 * dailyType {string} 奖项类型
 * page
 * number
 */
export const weeklyGood = data => fetcher(`/h5/daily/creation/firstGoodCreation`, data, 'POST');
/**
 * 活动详细信息
 */
export const getActivityInfo = activityId => fetcher('/h5/game/activity/activityInfo', {activityId}, 'POST');
/**
 * 获取和保存领奖记录
 * creationId
 * awardsId
 * childAwardsId
 */
 export const recordOption = (data, type="GET") => {
 	return fetcher('/app/record', data, type);
 }
/**
 * 用户验证
 * address
 * idCard {string} 身份证
 * phone
 * settlement {string} 详细地址
 * sex
 * username
*/ 
export const userVerify = data => fetcher("/app/user/qualifica", data, "put");
/**
* 奖项
*/ 
export const obtainAwards = (awardsId, period) => fetcher("/h5/game/creation/prizePageInfo", {
	awardsId,
	period
}, "POST");
/*
* 获取推荐赛区
* id {string} 活动id
*/
export const getAreaRecommend = id => fetcher(`/h5/raceAreaActivity/nominate/${id}`);
/*
* 获取总赛区下的所有赛区
* id {string} 活动id
*/
export const getAreaAll = id => fetcher(`/h5/raceAreaActivity/list/${id}`);
/*
* 获取赛区奖项
* id {string} 活动id
*/
export const getAllAwards = id => fetcher(`/h5/game/creation/awardsInfo/${id}`);
