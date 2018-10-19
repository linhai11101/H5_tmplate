/*
* 进制转换
* num {number} 需要转换的数
* cardinal {number} 需要转换的进制基数
* type {string} 1:十进制转换为其他进制，2:其他进制数转换成十进制
*/
export default (num, cardinal=10, type=2) => {

	return type == 2 ? parseInt(num.toString(), cardinal) : num.toString(cardinal);
}
