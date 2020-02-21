import eventBus from './eventBus';

/**
 * 图片预加载进度
 * @param {Array} arr 图片路径集合 
 */
export const preloadimg = function(arr){
  let n = 0;
  
  const TOTAL_IMG_NUMBER = arr.length;
  for(let i=0;i<TOTAL_IMG_NUMBER;i++){
    new loadImg(arr[i]);
  }
  
  function loadImg(src){
		let img = new Image();
		img.onload = function(){
			n++;
      let t = Math.round(n/(TOTAL_IMG_NUMBER)*100);
      eventBus.$emit('loading', `${t}%`);
		}
		img.src = src;
	}
}