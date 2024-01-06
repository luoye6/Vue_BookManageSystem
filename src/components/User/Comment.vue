<template>
  <div class="comment_container">
    <div class="backgroundImg">
      <img
        src="https://xxx.xiaobaitiao.icu/img/icu/202312211243628.jpg"
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
        style="width: 1330px; height: 750px"
      >
      </vue-baberrage>
      <div class="addMain">
        <el-input
          placeholder="请输入内容"
          v-model.trim="input"
          class="input-with-select"
          @keyup.enter.native="addContent"
        >
          <el-button
            slot="append"
            icon="el-icon-edit"
            @click="addContent"
          ></el-button>
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
      //弹幕列表，格式为数组
      barrageList: [],
      barrage: {
        id: "",
        avatar:
          "https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        msg: "",
        time: "",
        type: MESSAGE_TYPE.NORMAL,
        barrageStyle: "",
      },
    };
  },
  methods: {
   addContent:_.throttle(async function(){
      // 先判断文本内容是否为空或者是无意义的数字，如果是提示用户信息
      if(this.input.trim()===''||/^\d+$/.test(this.input)||/^[a-zA-Z]+$/.test(this.input)){
        this.$message.info({
          message: "请不要输入无意义的内容",
          duration:1000
        })
        return;
      }
      // 文本框中内容赋值给barrage
      this.barrage.msg = this.input;
      //向数据库发送请求 addComment
      const {data:res} = await this.$http.post('user/add_comment',this.barrage);
      if(res.status !== 200){
        return this.$message.error(res.msg)
      }
      //调用获取新的留言列表
      this.getCommentList();
      //重置内容框
      this.input = "";
      this.$message.success(res.msg);
    },5000,{ trailing: false }),
    async getCommentList() {
      // 发送axios请求
      const { data: res } = await this.$http.get("user/get_commentlist");
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success(res.msg);
      this.barrageList = res.data
      //添加空对象，数组更新，组件更新
      this.barrageList.push({})
    },

  },

  mounted(){
    this.getCommentList();
  }
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
.addMain {
  position: absolute;
  width: 300px;
  height: 100%;
  background-color: pink;
  top: 450px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
