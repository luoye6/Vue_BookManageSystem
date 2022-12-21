<template>
  <div class="notice_container">
    <div class="header">
      <div class="scroll-text" ref="scrollText">
        <i class="el-icon-s-opportunity"></i> {{ text }}
        <i class="el-icon-s-opportunity"></i>
      </div>
    </div>
    <div class="banner">
      <div class="banner_header"><p>近期公告</p></div>
      <div class="banner_main">
        <div class="banner_main_item" v-for="(item,index) in bannerList" :key="index">
          <div class="banner_main_item_header">    <p> {{ item.header }}</p></div>
       
          <div class="banner_main_item_main">
                <p>{{ item.main }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "图书馆公告栏,记得查收公告呀!",
      bannerList:[
        {header:"本应用源代码地址,欢迎star 2022-12-20 00:00:00",main:"发现bug请提出issue,请勿恶意攻击,谢谢"},
        {header:"本应用源代码地址,欢迎star 2022-12-20 00:00:00",main:"发现bug请提出issue,请勿恶意攻击,谢谢"},
        {header:"本应用源代码地址,欢迎star 2022-12-20 00:00:00",main:"发现bug请提出issue,请勿恶意攻击,谢谢"},
        {header:"本应用源代码地址,欢迎star 2022-12-20 00:00:00",main:"发现bug请提出issue,请勿恶意攻击,谢谢"},
      ]
    };
  },
  methods: {},
  mounted() {
    const containerWidth = this.$refs.scrollText.offsetWidth;
    const textWidth = this.$refs.scrollText.scrollWidth;

    // If the text is longer than the container, start the animation
    if (textWidth > containerWidth) {
      this.$refs.scrollText.style.animation = "scroll 10s linear infinite";
    }
  },
};
</script>

<style lang="less" scoped>
.notice_container {
  overflow: hidden;
}
.header {
  width: 100%;
  height: 50px;
  background-color: rgb(70, 130, 180);
  border-radius: 15px;
  // box-shadow: 0px 0px 5px 5px rgb(66, 142, 5);
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
}
.scroll-text {
  white-space: nowrap;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
.banner {
  width: 100%;
  height: 100%;
  // background-color: pink;
  margin-top:30px;
}
.banner_header {
  width: 100%;
  height: 80px;
  // background-color: brown;
 
  p {
    color:black;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
  }
}
.banner_main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:skyblue;

}

.banner_main_item:nth-child(n+2) {
  margin-top: 30px;
}
.banner_main_item:nth-child(n+2){
  background-color: #D1EEEE;
}
.banner_main_item:nth-child(1){
  background-color: pink;
}

.banner_main_item {
  width: 80%;
  height: 120px;
  // background-color: aqua;
  .banner_main_item_header {
    width: 100%;
    height: 50px;
    // background-color: pink;
    border:1px solid skyblue;
    box-sizing: border-box;
    p {
      color:rgb(175, 129, 143);
      text-align: center;
      line-height: 50px;
      font-size: 16px;
    }
  }
  .banner_main_item_main{
    width: 100%;
    height: 70px;
    background-color: white;
    border:1px solid skyblue;
    box-sizing: border-box;
    text-align: center;
    p {
      line-height: 70px;
    }
  }
}
</style>