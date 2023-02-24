<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- <img src="../assets/heima.png" alt="" /> -->
        <span>欢迎登录图书管理系统</span>
        <span style="color: #ccc; font-size: 16px">图书馆管理人员页面</span>
      </div>
      <div>
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="35"
            style="margin-right: 10px"
          ></el-avatar>
        </div>
        <div class="user">管理员:{{ this.bookAdmin.bookAdminName }}</div>
        <el-button type="info" @click="logout">退出</el-button>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="black"
          active-text-color="#ffd04b"
          :router="true"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-menu-item index="borrowbook" @click="saveNavState('borrowbook')">
            <i class="el-icon-collection"></i>
            <span slo="title">借阅图书</span>
          </el-menu-item>
          <el-menu-item index="returnbook" @click="saveNavState('returnbook')">
            <i class="el-icon-collection"></i>
            <span slot="title">归还图书</span>
          </el-menu-item>
          <el-menu-item
            index="borrowstatement"
            @click="saveNavState('borrowstatement')"
          >
            <i class="el-icon-folder-checked"></i>
            <span slot="title">借书报表</span>
          </el-menu-item>
          <el-menu-item
            index="returnstatement"
            @click="saveNavState('returnstatement')"
          >
            <i class="el-icon-folder-checked"></i>
            <span slot="title">还书报表</span>
          </el-menu-item>
          <el-menu-item
            index="noticemanage"
            @click="saveNavState('noticemanage')"
          >
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
        <div class="footer">
          <p>
            ©2022-2022 By 小白条<br /><a href="https://beian.miit.gov.cn"
              >备案号:浙ICP备2022034182号</a
            >
          </p>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
  
  <script>
export default {
  data() {
    return {
      //左侧菜单数据
      menulist: [],
      iconsObj: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
      //是否折叠
      isCollapse: false,
      //被激活的链接地址
      activePath: "",
      bookAdmin:{
        bookAdminId:Number,
        status:Number,
        username:"",
        password:"",
        bookAdminName:"",
        email:"",
        createTime:"",
        updateTime:""
      }
    };
  },
  async created() {
    // this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
    // console.log(this.activePath)
    // 先获取sessionStorage中的id
    const stringId = window.sessionStorage.getItem("bookAdminId");
    const id = parseInt(stringId);
    this.bookAdmin.bookAdminId = id;
    const { data: res } = await this.$http.post("bookadmin/getData", this.bookAdmin);
    // console.log(res);
    this.bookAdmin = res.data;
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/loginmanage");
    },
   
    //点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //保存链接的激活状态
    saveNavState(activePath) {
      // console.log("first")
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
      // console.log(this.activePath);
    },
  },
};
</script>
  
  <style lang="less" scoped>
  
  .footer {
  position: absolute;
  bottom: 0px;
  left: 50%;
  color:#ccc;
  a {
    color:#ccc;
  }
}
.home-container {
  height: 100%;
}
.el-header {
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #fff;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
  padding: 20px;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  //设置文字之间的间距
  letter-spacing: 0.2em;
  cursor: pointer;
}
.user {
  margin-right: 15px;
  color: #ccc;
  font-size: 16px;
}
.el-menu-item:hover {
  background-color: rgb(51, 122, 183) !important;
}
// .el-menu-item{
//   color:rgb(135, 206, 235) !important;
// }
</style>