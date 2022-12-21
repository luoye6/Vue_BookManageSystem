import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import LoginManage from '../components/BookManage/LoginBookManage.vue'
import Home from '../components/Home/Home.vue'
import Index from '../components/Index/Index.vue'
import Search from '../components/Book/Search.vue'
import Rule from '../components/User/Rule.vue'
import Notice from '../components/User/Notice.vue'
import Information from  '../components/User/Information.vue'
import Borrow from '../components/User/Borrow.vue'
import Violation from '../components/User/Violation.vue'
import Comment from '../components/User/Comment.vue'
Vue.use(VueRouter)

const routes = [
 {path:'/',redirect:'/login'},
 {path:'/login',component:Login},
 {path:'/loginmanage',component:LoginManage},
{path:'/home',component:Home,redirect:'/index',
children:[
  {path:'/index',component:Index},
  {path:'/search',component:Search},
  {path:'/rule',component:Rule},
  {path:'/notice',component:Notice},
  {path:'/information',component:Information},
  {path:'/borrow',component:Borrow},
  {path:'/violation',component:Violation},
  {path:'/comment',component:Comment}
]},

]

const router = new VueRouter({
  routes
})

export default router
