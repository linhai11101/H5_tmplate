export default function (){ 
	let userAgentInfo = navigator.userAgent;
	let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
	let flag = true;
	for (let v = 0; v < Agents.length; v++) {  
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}  
	return flag;  
}
