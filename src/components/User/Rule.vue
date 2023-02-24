<template>
  <div class="rule_container">
    <div class="header">
      <p>读者规则信息查看</p>
    </div>
    <div class="banner">
      <el-tooltip
      v-for="item in ruleList"
      :key="item.ruleId"
        effect="dark"
        placement="right"
      >
      <div slot="content" class="content_tip">可借阅数量: {{ item.bookLimitNumber }}<br/>可借阅天数: {{ item.bookDays }}
      <br/>可借阅图书馆: {{ item.bookLimitLibrary }}<br/>过期扣费/天: {{ item.bookOverdueFee }}</div>
        <el-button style="font-size:16px">借阅证规则编号: {{ item.bookRuleId }}</el-button>
      </el-tooltip>
     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ruleList:[
        {
          ruleId:0,
          bookRuleId:Number,
          bookDays:Number,
          bookLimitNumber:Number,
          bookOverdueFee:Number,
          bookLimitLibrary:"",
          createTime:"",
          updateTime:"",
          
        }

      ]
    }
  },
  methods:{
   async  getRuleList(){
      const {data:res} = await this.$http.get("user/get_rulelist")
      if(res.status !== 200){
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message:res.msg,
        duration:1000
      })
      this.ruleList = res.data
    }
  },
  created(){
      this.getRuleList()
  }
};
</script>

<style lang="less" scoped>
.rule_container {
  position: relative;
}
.header {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  p {
    font-size: 36px;
    color: rgb(70, 130, 180);
  }
}
.banner {
  display: flex;
  flex-direction: column;
  position:absolute;
  left:50%;
  transform: translate(-50%);

}
.el-tooltip{
  width: 500px;
  font-size: 16px;
  color:white;
}
.el-tooltip:hover{
  color:black;
}
.el-tooltip:nth-child(1){
  margin-top:100px;
}
.el-tooltip:nth-child(n+2){
  margin-top:50px;
  margin-left:0px;
}
.el-tooltip:nth-child(odd){
  background-color: pink;
}
.el-tooltip:nth-child(even){
  background-color: rgb(49, 176, 213)
}
.content_tip {
  font-size: 16px;
}
</style>