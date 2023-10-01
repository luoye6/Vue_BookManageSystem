<template>
  <div class="chat-container">
    <h2 style="text-align: center;color:deepskyblue;">AI 智能推荐 by小白条</h2>
    <el-card class="chat" style="margin-top:10px;height: 80vh;border-radius: 15px;border-color: #ccc;">
      <el-card class="main_chat">
        <div v-for="item in messages" :key="message.id" class="message">
          <div v-if="item.inputMessage!=null&&item.inputMessage!==''" class="user-message">
            {{ item.inputMessage }}
          </div>
          <div v-if="item.aiResult!=null&&item.aiResult!==''" class="bot-message">{{ item.aiResult }}</div>
        </div>

      </el-card>
      <el-input
          placeholder="请输入内容，例如：我喜欢动物类的书籍，请给我推荐"
          v-model.trim="inputMessage"
          :disabled="loading"
          @keyup.enter.native="sendMessage"
      >
        <el-button
            slot="append"
            icon="el-icon-s-promotion"
            v-loading="loading"
            @click="sendMessage"
            :disabled="loading"
        ></el-button>
      </el-input
      >
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      inputMessage: "",
      message: {
        inputMessage: "",
        aiResult: "",
        userId: null
      },
      loading: false
    }
  },
  methods: {
    /**
     * 发送消息，接受AI结果
     * @returns {Promise<ElMessageComponent>}
     */
    async sendMessage() {
      // 将用户输入的消息添加到消息列表中
      if (this.inputMessage.trim() === "") {
        return this.$message.info({
          message: "文本不能为空",
          duration: 1500
        })
      }
      if (this.inputMessage.trim() !== "") {
        var userId = window.sessionStorage.getItem("userId");
        this.messages.push({
          id: Date.now(),
          inputMessage: this.inputMessage,
          userId: parseInt(userId)
        });
        // 这里可以是调用 GPT API 的逻辑
        this.message.inputMessage = this.inputMessage.trim();
        this.message.userId = userId;
        // 清空输入框
        this.inputMessage = "";
        this.loading = true;
        this.$message.info({
          message:"文本输入越长，接口调用时间越长，请耐心等待10-20秒",
          duration:2500
        })
        const {data: res} = await this.$http.post("user/ai_intelligent", this.message)

        if (res.status !== 200) {
          this.loading = false;
          return this.$message.error(res.msg);
        }
        this.$message.success({
          message: res.msg,
          duration: 1500
        })
        this.messages.push({
          id: Date.now(),
          aiResult: res.data,
          userId: userId
        });
        this.loading = false;

      }
    },
    /**
     * 获取最近五条该用户和AI交流的信息
     * @returns {Promise<void>}
     */
    async getHistoryRecords() {
      var userId = window.sessionStorage.getItem("userId");
      const {data: res} = await this.$http.get("user/ai_list_information/" + userId)
      if (res.status !== 200) {
        return this.$message.error(res.msg)
      }
      this.$message.success({
        message: res.msg,
        duration: 1500
      })
      res.data.forEach((item) => {
        this.messages.push(item);
      })
    }
  },
  created() {
    this.getHistoryRecords();
  }
}
</script>

<style scoped lang='less'>
//.chat-container {
//  display: flex;
//  flex-direction: column;
//  height: 100vh;
//}
.main_chat {
  margin-bottom: 10px;
  height: 70vh;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 10px;
  overflow-y: scroll;
}

.message {
  display: flex;
  flex-direction: column;
}

.user-message {
  display: flex;
  flex-direction: row;
  background-color: #e7f7ff;
  padding: 10px;
  border-radius: 10px;
  align-self: flex-end;
  text-align: right;
  margin-top: 10px;

}

.bot-message {
  background-color: #f4f6f8;
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  align-self: flex-start;
  margin-top: 10px;
  white-space: pre-wrap;
}
</style>
