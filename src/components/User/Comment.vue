<template>
  <div class="comment_container">
    <div class="backgroundImg">
      <img
        src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5563/animeboySkyMin.png"
        alt=""
      />
    </div>
    <div class="barrages-drop">
      <vue-baberrage
        :isShow="barrageIsShow"
        :barrageList="barrageList"
        :maxWordCount="maxWordCount"
        :throttleGap="throttleGap"
        :loop="barrageLoop"
        :boxHeight="boxHeight"
        :boxWidth="boxWidth"
        :messageHeight="messageHeight"
        :lanesCount="lanesCount"
        style="width: 1350px; height: 750px"
      >
      </vue-baberrage>
      <div class="addMain">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
          @keyup.enter.native = "addContent"
        >
          <el-button slot="append" icon="el-icon-edit" @click="addContent"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>


<script>
import { MESSAGE_TYPE } from "vue-baberrage";
import { nanoid, random } from "nanoid";
export default {
  data() {
    return {
      barrageIsShow: true, //是否展示弹幕
      messageHeight: 3, //消息高度(测试不生效)
      barrageLoop: false, //是否循环播放
      maxWordCount: 2, //弹幕字数(测试不生效)
      lanesCount: 1, //固定弹幕(测试不生效)
      boxWidth: 1600, //弹幕宽度
      boxHeight: 200, //弹幕高度(测试不生效)
      throttleGap: 3000, //消息间隔
      input: "",
      barrageList: [
        {
          id: 1,
          avatar:
            "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          msg: "祝你天天开心",
          time: 5,
          barrageStyle: "yibai",
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: 2,
          avatar:
            "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          msg: "好好学习,天天向上",
          time: 7,
          barrageStyle: "erbai",
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: 3,
          avatar:
            "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          msg: "学习如逆水行舟,不进则退",
          time: 5,
          barrageStyle: "sanbai",
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: 4,
          avatar:
            "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          msg: "平凡的生活亦能有非凡的人生",
          time: 8,
          barrageStyle: "sibai",
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: 5,
          avatar:
            "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          msg: "The only way to conquer a fear is to face it",
          time: 7,
          barrageStyle: "wubai",
          type: MESSAGE_TYPE.NORMAL,
        },
      ], //弹幕列表，格式为数组
    };
  },
  mounted() {
    this.addToList();
  },
  methods: {
    addToList() {
      this.barrageList.forEach((v) => {
        this.barrageList.push({
          id: v.id, //弹幕ID
          avatar: v.avatar, //头像
          msg: v.msg, //弹幕消息
          time: v.time, //屏幕展示时间
          type: MESSAGE_TYPE.NORMAL, //类型
          barrageStyle: v.barrageStyle, //自定义样式
        });
      });
    },
    addContent() {
      this.barrageList.push({
        id: nanoid(),
        avatar:
          "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        msg: this.input,
        time: Math.round(Math.random() * 5) + 5,
        barrageStyle: "wubai",
        type: MESSAGE_TYPE.NORMAL,
      });
      this.input = "";
      this.$message.success("添加留言成功");
    },
  },
};
</script>

<style lang="less" scoped>
.comment_container {
  position: relative;
  height: 100%;
  width: 100%;
}
.backgroundImg {
  position: absolute;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    opacity: 0.5;
  }
}
.barrages-drop {
  position: relative;
}
.addMain{
  position: absolute;
  width:300px;
  height: 100%;
  background-color: pink;
  top:450px;
  left:50%;
  transform: translate(-50%,-50%);

}
</style>