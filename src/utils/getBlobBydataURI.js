/**  
* 将以base64的图片url数据转换为Blob
  * @param dataURI：based64字符串  
  * @param type：图片类型('image/png' | 'image/jpg')
*/
export default (dataURI, type) => {
  let binary = atob(dataURI.split(',')[1]);
  let array = [];

  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  };

  return new Blob([new Uint8Array(array)], {type:type });
}
