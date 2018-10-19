
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
/*--------session------*/ 
export const setSessionStorage = (key, value) => {
	if (!key) return;
	if (typeof value !== 'string') {
		value = JSON.stringify(value);
	}
	window.sessionStorage.setItem(key, value);
}
export const getSessionStorage = (key) => {
	if (!key) return;
	return window.sessionStorage.getItem(key);
}
export const removeSessionStorage = key => {
	if (!key) return;
	window.sessionStorage.removeItem(key);
}
/**
 * 获取地址栏参数
 */
export const getQueryString = name => {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    if (!window.location.search) return;
    let r = window.location.search.substr(1).match(reg)
    if(r!=null)return  unescape(r[2]); return null
}

/**
 * 获取地址栏参数（hash模式路由）
 */
export const getQueryString2 = name => {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    if (!window.location.hash) return;
    let r = window.location.hash.split("?")[1].match(reg)
    if(r!=null)return  unescape(r[2]); return null
}

/**
 * 获取地址栏参数（参数在域名之后，在#/前）
 */
export const getQueryString3 = name => {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    if (!window.location.href.split("?")[1]) return;
    let r = window.location.href.split("?")[1].split('#/')[0].match(reg)
    if(r!=null)return  unescape(r[2]); return null
}

/**
 * 检测字符串是否带有http(s)
 */
export const checkURL = URL => {
	let str = URL
	let Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
	let objExp = new RegExp(Expression)
	if(objExp.test(str) == true){
		return true
	}else{
		return false
	}
} 

/**
 * 验证手机格式
 */
export const isPhone = str => {
//	if(typeof str === 'number'){
//		str = str.toString()
//	}
//	return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(str)

	return true  //由于每个国家手机号格式不一，暂不验证手机格式
}

/**
 * 返回 YYYY/MM/DD 格式的日期字符串
 */
export const getDate = () => {
	let myDate = new Date()
	myDate = myDate.toLocaleString()
	let arr = myDate.split(" ")
	return arr[0]
}

/**
 * 根据传入的时间戳返回 YYYY-MM-DD 格式的日期字符串
 */
export const getDate2 = (timestamp) => {
	let myDate = new Date(timestamp)
	let args = {
		"Y": myDate.getFullYear(),
		"M": myDate.getMonth()+1,
		"D": myDate.getDate()
	}
	return args.Y + '-' + args.M + '-' + args.D
}

/**
 * 检测是否微信端
 */
export const isWeiXin = () => {
	let ua = window.navigator.userAgent.toLowerCase()
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		//微信
		return true
	} else {
		//非微信
		return false
	}
}

/**
 * 根据传入的时间戳返回 YYYY-MM-DD hh:mm:ss 格式的日期字符串
 */
export const getDate3 = (timestamp) => {
	const add0 = (m) => {
		return m < 10 ? '0'+m : m
	}
	
	let myDate = new Date(timestamp)
	let args = {
		"Y": myDate.getFullYear(),
		"M": myDate.getMonth()+1,
		"D": myDate.getDate(),
		"hh": myDate.getHours(),
		"mm": myDate.getMinutes(),
		"ss": myDate.getSeconds(),
	}
	return args.Y + '-' + add0(args.M) + '-' + add0(args.D) + ' ' + add0(args.hh) + ':' + add0(args.mm) + ':' + add0(args.ss)
}

/**
 * 返回目录名（时分秒+4位随机数）
 */
export const randomFilename = () => {
	let myDate = new Date()
	let args = {
		"H": myDate.getHours(),
		"M": myDate.getMinutes(),
		"S": myDate.getSeconds()
	}
	let timeStr = ''
	let randomStr = ''
	for (let i in args) {
    	let n = args[i]
    	if(args[i] < 10){
    		args[i] = '0' + args[i].toString()
    	}else{
    		args[i] = args[i].toString()
    	}
    	timeStr += args[i]
	}
	randomStr = timeStr + (Math.floor(Math.random()*8999 + 1000)).toString()
	randomStr = randomStr + '/' + randomStr
	
	return randomStr
}

/**
 * 返回上传图片的文件名（时分秒+4位随机数）
 * @params originalName {str} 图片原有文件名
 * @params num {int} 图片文件名下划线加数字后缀，如'_0'：不传入时不会带后缀
 */
export const uploadName = (originalName, num, randomStr) => {
	let tempArr = originalName.split('.')
	if(num != undefined){
		randomStr += '_' + num
	}
	
	return randomStr + '.' + tempArr[tempArr.length - 1]
}

/**
   * 预览图加水印
   * @param url {String} 图片url
   * @param obj {Object} 图片信息对象（宽、高、缩放倍数、旋转角度等）
   */
export const addWatermark = (url, obj, w) => {
	var str = ''
	if(obj.angle){
		str += "/rotate," + obj.angle
	}
//	if(obj.multiple){
//		str += "/resize," + parseInt(obj.multiple * 100)
//	}
	
	var tempWidth = (w ? w : obj.width)
	
	//阿里云oss图片4096有bug
	if(tempWidth > 4096){
		tempWidth = 4096
	}

	return (url.split("?")[0] + "?x-oss-process=image/resize,w_" + tempWidth + str +"/watermark,image_emhvbmd4aW5zaC8xMjAwXzIucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfOTY=,t_90,g_south")
}


/**  
 * 将以base64的图片url数据转换为Blob
 * @param dataURI：based64字符串  
 * @param type：图片类型('image/png' | 'image/jpg')
 */
export const getBlobBydataURI = (dataURI, type) => {
  var binary = atob(dataURI.split(',')[1])
  var array = []
  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], {type:type })
}

export const tip = (tips="提示", type="primary", hideTime=3000, cb) => {
	
	if (typeof(type) == "number") {
		cb = hideTime;
		hideTime = type;
		type = "primary";
	};
	if (typeof(type) == "function") {
		cb = type;
		type = "primary";
		hideTime = 3000;
	}
	if (typeof(hideTime) == "function") {
		cb = hideTime;
		hideTime = 3000;
	};
	let mainColor = {
		primary: "rgba(0,0,0,0.8)",
		warn: "rgba(250,170,50,0.9)",
		error: "rgba(250,0,0,0.9)",
		succes: "rgba(50,250,70,0.9)",
	};
	let tip = document.createElement("div");
	let text = document.createTextNode(tips);
	tip.appendChild(text);
	tip.style.backgroundColor = "rgba(0,0,0,0.8)";
	tip.style.transition = "all 0.2s";
	tip.style.position = "fixed";
	tip.style.zIndex = 999;
	tip.style.top = "-6vh";
	tip.style.padding = "2.5vw 3.2vw";
	tip.style.borderRadius = "10vw";
	tip.style.left = "50%";
	tip.style.transform = "translate(-50%, 0)";
	tip.style.fontSize = "3.6vw";
	tip.style.maxWidth = "96%";
	tip.style.color = "#fff";
	tip.style.opacity = 1;
	tip.style.letterSpacing = "0.4vw";
	document.body.appendChild(tip);
	setTimeout(() => {
		tip.style.top = "10vh";
	}, 0);

	setTimeout(() => {
		tip.style.top = "-6vh";
		tip.style.opacity = 0;

		setTimeout(() => {
			document.body.removeChild(tip);
			if (typeof(cb) == "function") cb();
		}, 500);
	}, hideTime);
}
