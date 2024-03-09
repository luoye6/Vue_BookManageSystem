<template>
  <div class="chat_container" style="height: 100%">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: red;

      "
    >
      <el-row style="height: 100%">
        <el-col :span="5" style="background-color: grey; height: inherit">
          <div>
            <!--            <div style="position: relative; top: 10px; left: 20px; width: 90%">-->
            <!--              <el-input class="search_input" placeholder="搜索"></el-input>-->
            <!--            </div>-->
            <el-row style="height: 60px;background-color:rgb(240, 197, 168);border: 1px solid #eee"
                    v-for="item in friendList" key="item.username">
              <el-col :span="6">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="35"
                           style="margin: 10px 30px">

                </el-avatar>
              </el-col>
              <el-col :span="18">
                <el-row>
                  <el-col :span="14">
                    <div style="margin:10px 0px 5px 0px">{{ item.username }}</div>
                    <div class="ellipsis">{{ item.text }}</div>
                  </el-col>
                  <el-col :span="10">
                    <div style="font-size: 10px;margin:10px 0px">
                      {{ item.date }}
                    </div>
                  </el-col>
                </el-row>
              </el-col>

            </el-row>
          </div>
        </el-col>
        <el-col :span="19" style="background-color: blue; height: inherit">
          <div style="background-color: yellowgreen; height: 600px;">
            <el-row style="height: 60px;background-color:red;display: flex;align-items: center;">
              <el-row style="margin-left: 20px;color:rgb(88, 88, 88);font-size:24px">
                王二离
              </el-row>
            </el-row>
            <el-row>
              <el-row
                  v-for="message in messages"
                  :key="message.id"
                  :class="{'left-message': message.role === 'user', 'right-message': message.role === 'me'}"
              >
                <!--                用户或者对方的单行消息包括头像和消息-->
                <el-row style="float:left;">
                  <div style="display: flex; align-items: center;">
                    <el-avatar v-if="message.role === 'user'"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               :size="35"></el-avatar>
                    <p :class="{'message-backgroudcolor':true,'left-message-content':message.role==='user','right-message-content':message.role ==='me'}" v-if="message.role === 'user'"> {{ message.content }}</p>
                  </div>
                </el-row>

                <el-row style="float: right;margin-top:10px">
                  <div style="display: flex; align-items: center;">
                    <span :class="{'message-backgroudcolor':true,'left-message-content':message.role==='user','right-message-content':message.role ==='me'}" v-if="message.role === 'me'"> {{ message.content }}</span>
                    <el-avatar v-if="message.role === 'me'"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               :size="35"></el-avatar>
                  </div>


                </el-row>
              </el-row>
            </el-row>
          </div>
          <!--          聊天框区域-->
          <el-row style="background-color:purple; height: 150px;box-sizing: border-box">
            <el-row style="height: 30px;background-color:red;display: flex; align-items: center;">
              <div style="margin-left: 20px">
                <span>表情</span>
                <span style="margin-left: 20px">文件</span>
              </div>

            </el-row>
            <el-row style="height: 200px">
              <el-input
                  type="textarea"
                  :autosize="{ minRows: 5, maxRows: 5}"
              >
              </el-input>
            </el-row>
          </el-row>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
//引入socket对象
import {socket} from "@/components/Utils/websocket";

export default {
  data() {
    return {
      loading: true,
      websocketCount: -1,
      //查询条件
      queryCondition: {
        "toId": 2,
        "text": "你好",
        "chatType": 1,
        "isAdmin": false
      },
      messages: [
        {
          id: 1, content: "你好23222222222222222222222222222哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈222222222222222222222222222222222222222222222222222222222222222222", role: "user",
        },
        {
          id: 2, content: "你好红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈", role: "me",
        },
        {
          id: 3, content: "你好23222222222222222222222222222哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈222222222222222222222222222222222222222222222222222222222222222222", role: "user",
        },
        {
          id: 4, content: "你好", role: "me",
        },
      ],
      friendList: [
        {
          username: "王二离",
          text: "最后一条聊天记录：你好",
          date: "2024年3月1日"
        },
        {
          username: "礼喆",
          text: "最后一条聊天记录：你好",
          date: "2024年12月24日"
        },

      ],
    };
  },
  created() {
    //初始化websocket对象
    //window.location.host获取ip和端口，
    //process.env.VUE_APP_WEBSOCKET_BASE_API获取请求前缀
    // socket.initWebSocket(`ws://localhost:8889/api/websocket/` + 1923);
    //绑定接收消息方法
    // socket.websocket.onmessage = this.websocketOnMessage;
  },
  methods: {
    backgroundColor() {
      return backgroundColor
    },
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

.ellipsis {
  font-size: 12px;
  color: rgb(127, 76, 69);
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  width: 100px; /* 设置元素宽度 */
}

.left-message {
  text-align: left;
  margin-left: 10px;
  margin-right:10px;
  margin-top: 10px;
}

.right-message {
  text-align: right;
  margin-right: 10px;
  margin-left: 10px;
}
.message-backgroudcolor {
  background-color: #e7f7ff;
  border-radius: 5px;
}
.left-message-content {
  margin-left: 10px;
}
.right-message-content {
  margin-right:10px;
}
</style>
