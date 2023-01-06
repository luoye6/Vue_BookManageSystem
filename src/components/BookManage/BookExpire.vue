<template>
  <div class="expire_container">
    <div class="header">
        <p>归还图书</p>
    </div>
    <div class="banner">
        <div class="expireDays">
                <p>还剩47天</p>
        </div>
        <div class="bookNumber">
            <el-input placeholder="请输入图书编号"  v-model="bookNumber">
    <el-button slot="prepend" icon="el-icon-collection"></el-button></el-input>
        </div>
        <div class="closeDate">
            <el-input placeholder="请输入截止日期"  v-model="closeDate">
    <el-button slot="prepend" icon="el-icon-date"></el-button></el-input>
        </div>
        <div class="returnDate">
            <el-input placeholder="请输入归还日期"  v-model="returnDate">
    <el-button slot="prepend" icon="el-icon-date"></el-button></el-input>
        </div>
        <div class="violationMsg">
            <el-input placeholder="若无违规信息,则不填"  v-model="returnDate">
    <el-button slot="prepend" icon="iconfont icon-weizhangchaxun"></el-button></el-input>
        </div>
        <div class="adminId">
            <el-input placeholder="管理员编号"  v-model="adminId">
    <el-button slot="prepend" icon="el-icon-s-custom"></el-button></el-input>
        </div>
        <div class="return_button">
            <el-button type="warning">归还</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.header{
    text-align: center;
    height: 100px;
    // background-color: pink;
    p {
        font-size: 30px;
        line-height: 100px;
    }
}
.banner {
    height: 680px;
    // background-color:brown;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .expireDays{
        margin-top:20px;
        width: 700px;
        height: 100px;
        border: 2px solid #ccc;
        text-align: center;
        p {
            line-height: 100px;
            font-size: 24px;
        }
    }
    div:nth-child(n+2){
        margin-top: 25px;
    }
}
</style>