<template>
  <div class="borrowbook_container">
    <div class="header"><p>借阅图书</p></div>
    <div class="banner">
      <div class="card_number"> 
        <el-input placeholder="请输入借阅证号"  v-model="cardNumber">
    <el-button slot="prepend" icon="el-icon-notebook-2"></el-button>
  </el-input>
      </div>
      <div class="book_number">
        <el-input placeholder="请输入图书编号"  v-model="bookNumber">
    <el-button slot="prepend" icon="el-icon-collection"></el-button></el-input>
      </div>
      <div class="borrow_date">
        
        <el-date-picker
        v-model="borrowDate"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
      </div>
      <div class="borrow_button">
        <el-button type="primary">借阅</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cardNumber:"",
      bookNumber:"",
      borrowDate:""
    }
  },
  methods:{

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
    .borrow_button{
      margin-top:30px;
    }
  }
}
</style>