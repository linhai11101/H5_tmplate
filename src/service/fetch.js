import {getCookie} from "../utils/cookie";

/*
* data {JSON}
* init {JSON}
	* cache {String} no-cache(不需要缓存，默认为default)
	* credentials {String} omit ...
* headers {JSON}
	* Cookie {String}
	* Content-Type {String}
	* Accept {String}
	* responeType {string} Promise需要resolve的类型
*/
export default async(url="", data={}, method="GET", headers={}, init={}) => {
	const responeData = {
		arrayBuffer: "arrayBuffer", //ArrayBuffer,ArrayBufferView (Uint8Array and friends)
		blob: "blob", //Blob/Files
		json: "json",
		text: "text",
		formData: "formData"
	}
	if (typeof(data) == 'string') {
		method = data;
		data = {};
	}
	if (!responeData[headers.responeType]) {
		headers.responeType = "json";
	}

	method = method.toUpperCase();
	let sendData = "";

	if (method == "GET") {
		let dataArr = [];
		Object.keys(data).forEach(item => {
			dataArr.push(`${item}=${data[item]}`);
		})
		url = dataArr.length == 0 ? url : `${url}?${dataArr.join('&')}`;
	}else {
		sendData = JSON.stringify(data)
	}

	let headersConfig = {
		"Content-Type": headers["Content-Type"] ? headers["Content-Type"] : "application/json",
		"Accept": headers["Accept"] ? headers["Accept"] : "application/json"
	};

	if (getCookie("race-session") || headers["Cookie"] ) {
		headersConfig["Cookie"] = getCookie("race-session") ? getCookie("race-session") : headers["Cookie"];
	}

	if (window.fetch) {
		let initConfig = {
		    cache: init["cache"] ? init["cache"] : 'default',
		    credentials: init["credentials"] ? init["credentials"] : 'include',
		    method: method,
		    mode: init["mode"] ? init["mode"] : 'cors',
		    redirect: init["redirect"] ? init["redirect"] : 'follow',
		    referrer: 'no-referrer'
		}
		let headers = new Headers(headersConfig);

		Object.defineProperty(initConfig, "headers" {
			value: headers
		})

		if (method != "GET") {
			Object.defineProperty(initConfig, "body" {
				value: sendData
			})
		}

		try {
			const respone = await fetch(url, initConfig);
			const responeJson = await respone[headers.responeType]();
			return responeJson;
		}catch(error) {
			throw new Error(error);
		}

	}else {
		return new Promise((resolve, reject) => {
			try {
				let XHR = window.XMLHttpRquest ? new window.XMLHttpRquest() : new window.ActiveXObject('Microsoft.XMLHTTP');
			
				XHR.open(method, url, true);
				
				XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				if (init["cache"] == 'no-cache') {
					XHR.setRequestHeader("Cache-Control", init["cache"]);
				}
				if (headersConfig["Cookie"]) {
					XHR.setRquestHeader("Cookie", headersConfig["Cookie"]);
				}

				XHR.send(sendData);

				XHR.onreadystatechange = () => {
					if (XHR.readyState == 4) {
						let status = XHR.status;
						if (status >= 200 && status <= 299) {
							const resData = XHR.respone;
							resData = typeof(resData) !== 'object' ? JSON.parse(resData) : resData;
							resolve(resData);
						}else {
							reject(XHR);
						}
					}
				}
			}catch(error) {
				throw new Error(error);
			}
		})
	}
}
