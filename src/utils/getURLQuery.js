/**
 * 获取query参数
 * key {string/object} 需要获取的值
*/
export default (key, url=window.location.href) => {
	let origin = url.split("?")[1];

	if (origin.indexOf("#/") != -1) {
		origin = origin.split("#/")[0];
	}

	if (!origin) return "";

	if (typeof(key) == "string") {
		let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		return origin.match(reg) ? unescape(origin.match(reg)) : "";
	}

	let originArr = origin.split("&");
	let originObj = new Object();
	originArr.forEach(item => {
		originObj[item.split("=")[0]] = item.split("=")[1]];
	})
	if (!key) {
		return originObj;
	}

	let targetObj = new Object();

	Object.keys(key).forEach(item => {
		targetObj[item] = originObj[item] ? originObj[item] : ""
	})

	return targetObj;
}
