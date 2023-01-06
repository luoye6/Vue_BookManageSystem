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
import HomeManage from '../components/Home/HomeManage.vue'
import BorrowBook from '../components/BookManage/BorrowBook.vue'
import ReturnBook from '../components/BookManage/ReturnBook.vue'
import BorrowStatement from '../components/BookManage/BorrowStatement.vue'
import ReturnStatement from '../components/BookManage/ReturnStatement.vue'
import NoticeManage from '../components/BookManage/NoticeManage.vue'
import BookExpire from '../components/BookManage/BookExpire.vue'
import LoginAdmin from '../components/Admin/LoginAdmin.vue'
import HomeAdmin from '../components/Admin/HomeAdmin.vue'
import BookManage from '../components/Admin/BookManage.vue'
import BookType from '../components/Admin/BookType.vue'
import StatementManage from '../components/Admin/StatementManage.vue'
import StatementSearch from '../components/Admin/StatementSearch.vue'
import StatementRuleManage from '../components/Admin/StatementRuleManage.vue'
import BookAdminManage from '../components/Admin/BookAdminManage.vue'
import AdminManage from '../components/Admin/AdminManage.vue'
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
{path:'/homemange',component:HomeManage,
  children:[
    {path:'/borrowbook',component:BorrowBook},
    {path:'/returnbook',component:ReturnBook},
    {path:'/borrowstatement',component:BorrowStatement},
    {path:'/returnstatement',component:ReturnStatement},
    {path:'/noticemanage',component:NoticeManage},
    {path:'/bookexpire',component:BookExpire}
  ]},
  {path:'/loginadmin',component:LoginAdmin},
  {path:'/homeadmin',component:HomeAdmin,
  children:[
    {path:'/bookmanage',component:BookManage},
    {path:'/booktype',component:BookType},
    {path:'/statementmanage',component:StatementManage},
    {path:'/statementsearch',component:StatementSearch},
    {path:'/statementrulemanage',component:StatementRuleManage},
    {path:'/bookadminmanage',component:BookAdminManage},
    {path:'/adminmanage',component:AdminManage}
  ]}

]

const router = new VueRouter({
  routes
})

export default router
