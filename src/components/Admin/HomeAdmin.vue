<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- <img src="../assets/heima.png" alt="" /> -->
        <span>欢迎登录图书管理系统</span>
        <span style="color: #ccc; font-size: 16px">系统管理人员页面</span>
      </div>
      <div>
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="35"
            style="margin-right: 10px"
          ></el-avatar>
        </div>
        <div class="user">管理员:{{ this.admin.adminName }}</div>
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
          <el-menu-item index="bookmanage" @click="saveNavState('bookmanage')">
            <i class="el-icon-notebook-1"></i>
            <span slo="title">书籍管理</span>
          </el-menu-item>
          <el-menu-item index="booktype" @click="saveNavState('booktype')">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">书籍类型</span>
          </el-menu-item>
          <el-menu-item
            index="statementmanage"
            @click="saveNavState('statementmanage')"
          >
            <i class="el-icon-bank-card"></i>
            <span slot="title">借阅证管理</span>
          </el-menu-item>
          <el-menu-item
            index="statementsearch"
            @click="saveNavState('statementsearch')"
          >
            <i class="el-icon-search"></i>
            <span slot="title">借阅信息查询</span>
          </el-menu-item>
          <el-menu-item
            index="statementrulemanage"
            @click="saveNavState('statementrulemanage')"
          >
            <i class="el-icon-key"></i>
            <span slot="title">借阅规则管理</span>
          </el-menu-item>
          <el-menu-item
            index="bookadminmanage"
            @click="saveNavState('bookadminmanage')"
          >
            <i class="el-icon-user-solid"></i>
            <span slot="title">图书管理员管理</span>
          </el-menu-item>
          <el-menu-item
            index="adminmanage"
            @click="saveNavState('adminmanage')"
          >
            <i class="el-icon-s-tools"></i>
            <span slot="title">系统管理</span>
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
      admin: {
        adminId: Number,
        status: Number,
        adminName: "",
        username: "",
        password: "",
        createTime: "",
        updateTime: "",
      },
    };
  },
  async created() {
    // this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
    // console.log(this.activePath)
    // 先获取sessionStorage中的id
    const stringId = window.sessionStorage.getItem("adminId");
    const id = parseInt(stringId);
    this.admin.adminId = id;
    const { data: res } = await this.$http.post("admin/getData", this.admin);
    this.admin = res.data;
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/loginadmin");
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
  position: fixed;
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