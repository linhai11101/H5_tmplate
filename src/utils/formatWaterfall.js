/*
* data {JSON} 
	fields {string} 字段，图片的字段
	arr {array} 数组
* row {number} 几列
* gap {number} 间隙
* elseH {string} 除了图片以外的高度
* unit {string} 使用的单位
**********return*********
* arr {array} 数组
item
	* width {number} 宽度
	* height {number} 高度
	* aspectRatio {number} 纵横比（保留两位小数）
	* aLeft {number} 绝对定位的left位置
	* atop {number} 绝对定位的top位置
*/

export default (data, row=2, gap=0, elseH=0, unit="px") => {
	let baseImgUrl = "http://oss-cn-shenzhen.aliyuncs.com/jimicn/";
	let argus = "?x-oss-process=image";
	let imgInfo = "/info";
	let resize = "/resize,p_30";

	arr.forEach(item => {
		getImgInfo(item);
	})

	var getImgInfo = async obj => {
		let params = {width: 0, height: 0, aspectRatio: 1}
		let url = obj[data[fields]];
		if (!url) {
			obj.width = 0;
			obj.height = 0;
			obj.aspectRatio = 1;
		}

		let imgInfo = `${baseImgUrl + url}?x-oss-process=image/info`;
        let resData = await fetch(imgInfo, {method: 'get'});
        let response = await resData.json();
        if (response) {
            obj.width = response.width*1;
            obj.height = response.height*1;
            obj.aspectRatio = (((obj.height/obj.width)*100).toString().split(".")[0]*1)/100;
        }else {
        	let imgObj = new Image();
        	imgObj.src = `${baseImgUrl + url}`;
        	imgObj.onload = function() {
        		obj.width = this.width*1;
            	obj.height = this.height*1;
            	obj.aspectRatio = (((obj.height/obj.width)*100).toString().split(".")[0]*1)/100;
        	}
        }
	}
}