/**
 * 检测是否微信端
 */
export default () => {
	let ua = window.navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false;
}
