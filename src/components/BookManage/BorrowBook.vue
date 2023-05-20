<template>
  <div class="borrowbook_container">
    <div class="header"><p>借阅图书</p></div>
    <div class="banner">
      <div class="card_number">
        <el-input placeholder="请输入借阅证号" v-model.number="borrowInfo.cardNumber">
          <el-button slot="prepend" icon="el-icon-notebook-2"></el-button>
        </el-input>
      </div>
      <div class="book_number">
        <el-input placeholder="请输入图书编号" v-model.number="borrowInfo.bookNumber">
          <el-button slot="prepend" icon="el-icon-collection"></el-button
        ></el-input>
      </div>
      <div class="borrow_date">
        <el-date-picker
          v-model="borrowInfo.borrowDate"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
          value-format="yyyy-MM-dd HH:mm:ss"
        >
        </el-date-picker>
      </div>
      <div class="borrow_button">
        <el-button type="primary" @click="borrowBook">借阅</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      borrowInfo: {
        cardNumber: "",
        bookNumber: "",
        borrowDate: "",
        bookAdminId:0
      },
    };
  },
  methods: {
    async borrowBook(){
      // console.log(this.borrowInfo.borrowDate);
      if(this.borrowInfo.borrowDate=== ""){
        return this.$message.error({
          message:"借阅时间不能为空",
          duration:1000
        })
      }
      this.borrowInfo.bookAdminId = parseInt(window.sessionStorage.getItem('bookAdminId')) 
      const {data:res} = await this.$http.post('bookadmin/borrow_book',this.borrowInfo)
      if(res.status !== 200){
        return this.$message.error(res.msg)
      }
      this.$message.success(res.msg)
      // 清空数据
      this.borrowInfo.bookNumber = "";
      this.borrowInfo.cardNumber = "";
      this.borrowInfo.borrowDate = "";
    }
  },
};
</script>

<style lang="less" scoped>
.borrowbook_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    height: 100px;
    // background-color: pink;
    p {
      color: black;
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
    div {
      margin-top: 15px;
      // margin-left: ;
    }
    .borrow_date {
      margin-left: 8px;
    }
    .borrow_button {
      margin-top: 30px;
    }
  }
}
</style>