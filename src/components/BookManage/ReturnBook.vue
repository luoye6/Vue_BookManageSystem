<template>
  <div class="borrowbook_container">
    <div class="header"><p>查看图书是否逾期</p></div>
    <div class="banner">

      <div class="book_number">
        <el-input placeholder="请输入图书编号"  v-model="bookNumber">
    <el-button slot="prepend" icon="el-icon-collection"></el-button></el-input>
      </div>
      <div class="query_button">
        <el-button type="warning" @click="goExpire">查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bookNumber:"",
    }
  },
  methods:{
    goExpire(){
      this.$router.push('/bookexpire')
    }
  }
}
</script>

<style lang="less" scoped>
.borrowbook_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .header{
    width: 100%;
    height: 100px;
    // background-color: pink;
    p {
      color:black;
      font-size: 30px;
      text-align: center;
      line-height: 60px;
    }
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 400px;
    // background-color: brown;
    div  {
      margin-top:15px;
      // margin-left: ;
    }
    .borrow_date{
      margin-left: 8px;
    }
    .query_button{
      margin-top:30px;
    }
  }
}
</style>