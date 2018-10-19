/*
* 获取随机颜色
*/
export default () => {
	return `#${(function(color="") {
		return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? 
		color : arguments.callee(color);
	})()}`
}
