import Vue from 'vue'
import App from './App.vue'
//引入路由组件
import router from './router'
//引入element ui 组件库
import './plugins/element.js'
//引入粒子插件
import VueParticles from 'vue-particles'
//引入全局样式表
import './assets/css/global.css'
//引入图书管理系统的图标和字体库
import './assets/fonts/iconfont.css'

// 引入swiper的样式
// import 'swiper/css/swiper.css'
//单独引入Message axios拦截器需要
import {Message} from 'element-ui'
// 引入表格导出excel插件
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
// 导入pdf插件
import htmlToPdf from './components/Utils/htmlToPdf.js'
Vue.use(htmlToPdf)
// 引入echarts
import * as echarts from 'echarts'
// 引入Chrome PassiveEventListeners优化页面性能
import 'default-passive-events'
// 引入lodash
import _ from 'lodash'
Vue.prototype._ = _  //全局导入的挂载方式
// 设置全局变量
Vue.prototype.$echarts = echarts

//注册粒子插件
Vue.use(VueParticles)
//main.js:
import { vueBaberrage } from 'vue-baberrage'
//使用弹幕插件
Vue.use(vueBaberrage)
//导入axios
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:8889/api/'
Vue.prototype.$http = axios
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// export {source}
//导入NProgress包对应的js和CSS
import  NProgress  from 'nprogress'
import 'nprogress/nprogress.css'
//在request拦截器中，展示进度条NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start()
  // console.log(config);
  // 为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization = "Bearer "+window.sessionStorage.getItem('token');
  return config;
})
//在response拦截器中，隐藏进度条NProgress.done()
axios.interceptors.response.use(response => {
  NProgress.done()
  // 登录校验 响应状态码为401时拦截
  if(response.data.status === 401) {
    Message.error("未登录或登录过期，请重新登录");
    // 清除过期的token和原来保存的用户id
    window.sessionStorage.clear();
    // 跳转到登录页面
    router.replace('/login')
  }
  // }else if (response.data.status === 404){
  //   Message.error('访问的资源或地址不存在');
  //   router.replace('/404');
  // }
  return response
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
