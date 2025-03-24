/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 延迟时间（毫秒）
 * @param {boolean} [immediate=false] 是否立即执行
 * @returns {Function} 经过防抖处理的函数
 */
export const debounce = (fn, delay, immediate = false) => {
  let timer = null;
  
  return function (...args) {
    // 保存函数调用时的上下文和参数
    const context = this;
    
    // 清除之前的延时器
    if (timer) clearTimeout(timer);
    
    // 立即执行
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timer;
      
      // 设置延时器，在延时结束后将 timer 设为 null
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      
      if (callNow) fn.apply(context, args);
    } else {
      // 设置延时器，delay 毫秒后执行函数
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
};
