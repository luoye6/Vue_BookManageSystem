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

//注册粒子插件
Vue.use(VueParticles)
//main.js:
import { vueBaberrage } from 'vue-baberrage'
//使用弹幕插件
Vue.use(vueBaberrage)
//导入axios
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
//导入NProgress包对应的js和CSS
import  NProgress  from 'nprogress'
import 'nprogress/nprogress.css'
//在request拦截器中，展示进度条NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start()
  // console.log(config);
  // 为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
//在response拦截器中，隐藏进度条NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
