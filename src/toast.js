import Vue from 'vue';
import Toast from './toast.vue'; //引入组件
/* 返回一个“扩展实例构造器” */
const ToastConstructor = Vue.extend(Toast); 
/* text 显示文字内容，callback 回调函数 ，指定显示时间 */
const myToast = (text, duration, callback) => {
  /* 将toast组件挂载到新创建的div上 */
  let toastDom = new ToastConstructor({
    el: document.createElement('div') 
  });
  /* 把toast组件的dom添加到body里 */
  document.body.appendChild(toastDom.$el); 
  /* 设置显示的文字 支持换行 */
  if (!!text) {
    toastDom.text = text;
  }
  /* 设置提示市场,默认3s */
  if (!!duration) {
    toastDom.duration = duration;
  } 
  /* 在指定duration之后让toast消失 */
  setTimeout(() => {
    toastDom.isShow = false;
    /* 如果设置了回调函数则再消失后执行回调函数 */
    if (callback) {
      callback();
    }
  }, toastDom.duration);
};
export default myToast;
