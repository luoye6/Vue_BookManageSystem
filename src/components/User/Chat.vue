<template>
  <div class="chat_container" style="height: 100%">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: red;
        display: inline-block;
      "
    >
      <el-row style="height: 100%">
        <el-col :span="6" style="background-color: grey; height: inherit">
          <div>
            <div style="position: relative; top: 10px; left: 20px; width: 90%">
              <el-input class="search_input" placeholder="搜索"></el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="18" style="background-color: blue; height: inherit">
          <div style="background-color: yellowgreen; height: 600px"></div>
          <div></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
//引入socket对象
import { socket } from "@/components/Utils/websocket";

export default {
  data() {
    return {
      loading: true,
      websocketCount: -1,
      //查询条件
      queryCondition: {
        type: "message",
      },
      messages: [],
    };
  },
  created() {
    //初始化websocket对象
    //window.location.host获取ip和端口，
    //process.env.VUE_APP_WEBSOCKET_BASE_API获取请求前缀
    socket.initWebSocket(`ws://localhost:8889/api/websocket/` + 1923);
    //绑定接收消息方法
    socket.websocket.onmessage = this.websocketOnMessage;
  },
  methods: {
    init() {
      this.queryCondition.type = "message";
      socket.sendMsg(JSON.stringify(this.queryCondition));
    },
    websocketOnMessage(event) {
      //初始化界面时，主动向后台发送一次消息，获取数据
      this.websocketCount += 1;
      if (this.websocketCount === 0) {
        this.init();
      }
      let info = event.data;
      this.messages.push(info);
      switch (info.type) {
        case "PONG":
          socket.websocketState = true;
          break;
        case "message":
          this.loading = true;
          this.$nextTick(() => {
            this.consumeMessage(info);
          });
          break;
        case "error":
          console.log("错误");
          this.loading = false;
          break;
      }
    },
    consumeMessage(info) {
      //拿到最新数据重新渲染界面
      console.log(info);
    },
  },
};
</script>
<style lang="less" scoped>
.chat_container {
}
</style>
