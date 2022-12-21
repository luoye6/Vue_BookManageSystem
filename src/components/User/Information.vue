<template>
  <div class="information_container">
    <div class="backgroundImg">
      <img
        src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5563/QQ图片20210618171651.png"
        alt="背景图片"
      />
    </div>
    <div class="information_header">
      <p>个人信息</p>
      <p>
        <i class="el-icon-s-flag"></i> By reading we enrich the mind, by
        conversation we polish it.
      </p>
    </div>
    <div class="information_banner">
      <div class="information_banner_left">
        <div class="banner_left_main">
          <div class="number"><i class="el-icon-collection-tag"></i>
            借阅证编号: 1805010219</div>
          <div class="name"><i class="iconfont icon-gerenxinxi"></i>
            借阅证姓名: 百里屠苏</div>
          <div class="rule"><i class="iconfont icon-guizeshezhi"></i>
            规则编号: 18</div>
          <div class="status"><i class="el-icon-refresh"></i>
            状态: 可用</div>
        </div>
      </div>
      <div class="information_banner_right">
        <el-button type="primary" class="changePWD" @click="changePassword">修改密码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changePassword(){
      alert('修改密码成功');
    }
  },
};
</script>

<style lang="less" scoped>
.information_container {
  position: relative;
  height: 100%;
}
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
}
.information_header {
  height: 200px;
  // background-color: pink;
  text-align: center;
  p:nth-child(1) {
    line-height: 140px;
    color: black;
    font-size: 36px;
  }
  p:nth-child(2) {
    color: black;
    font-size: 24px;
  }
}
.information_banner {
  display: flex;
  flex-direction: row;
  height: 400px;
  // background-color: pink;
  .information_banner_left {
    flex: 0.5;
    // background-color: brown;
    text-align: center;
  }
  .information_banner_right {
    flex: 0.5;
    // background-color: skyblue;
    text-align: left;
    line-height: 400px;
  }
}
.banner_left_main {
  margin-top:120px;
  color:black;
  font-size: 20px;
  div {
    margin-top:15px;
  }
}
.changePWD{
  position:absolute;
  top:50%;
  left:50%;
}
</style>