<template>
  <div class="rule_container">
    <div class="header">
      <p>读者规则信息查看</p>
    </div>
    <div class="banner">
      <el-tooltip
      v-for="(item,index) in ruleList"
      :key="index"

        effect="dark"
        :content="item.content"
        placement="right"
      >
        <el-button>借阅证规则编号: 18</el-button>
      </el-tooltip>
     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ruleList:[
        {content:"1"},
        {content:"2"},
        {content:"3"},
        {content:"4"},
        {content:"5"},

      ]
    }
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

</style>