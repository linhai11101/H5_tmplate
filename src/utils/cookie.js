/*
 * cookie
 */
export default {
	/**
	* key {string} 需要获取的key
	*/ 
	get(key) {
		try {
			let arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"))
			if (arr != null) {
				return decodeURIComponent(arr[2])
			}
		}catch (e) {
			console.warn(e);
		}
		return false
	},
	/**
	* key {string} key值
	* value {string} 需要保存的value值
	* date {string} 期限
	* domain {string} 域名
	*/ 
	set(key, value, date, domain) {
		try {
			domain = domain ? (';domain=' + domain) : '';

			let sec = date ? date * 1000 : 3600 * 1000;
			let exp = new Date();
			
			exp.setTime(exp.getTime() + sec);
			document.cookie = `${key}=${encodeURIComponent(value)}${domain};expires=${exp.toGMTString()};path=/`;
		}catch (e) {
			console.warn(e);
		}
	},
	/**
	* key {string} key值
	* domain {string} 域名
	*/ 
	rm(key, domain) {
		setCookie(key, "", -24 * 60 * 60, domain)
	}
}
