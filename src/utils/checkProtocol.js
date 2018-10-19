/*
* 检测字符串是否带有http(s)
*/ 
export default URL => {
	let str = URL;
	let Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	let objExp = new RegExp(Expression);

	return objExp.test(str);
}
