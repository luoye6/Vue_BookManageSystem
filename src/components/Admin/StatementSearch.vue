<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>借阅信息查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="always">
      <!-- 搜索内容和导出区域 -->
      <el-row>
        <el-col :span="6"
          >条件搜索:<el-select
            v-model="queryInfo.condition"
            filterable
            placeholder="请选择"
            style="margin-left: 15px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            class="input-with-select"
            @keyup.enter.native = "getBorrowStatement"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getBorrowStatement"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="2" style="float: right">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            :header="title"
            name="借阅信息查询.xls"
          >
            <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <el-button type="primary" class="el-icon-printer" size="mini"
              >导出Excel</el-button
            >
          </download-excel>
        </el-col>
        <el-col :span="2" style="float: right">
          <el-button
            type="primary"
            class="el-icon-printer"
            size="mini"
            @click="downLoad"
            >导出PDF</el-button
          >
        </el-col>
        <el-col :span="2" style="float: right">
         
         <el-button type="success" class="el-icon-full-screen" size="mini" @click="fullScreen"
           >全屏</el-button
         >
       </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="tableData" border style="width: 100%" stripe id="pdfDom" :default-sort = "{prop: 'violationId', order: 'ascending'}"
      v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-table-column prop="violationId" label="ID" sortable>
        </el-table-column>
        <el-table-column prop="cardNumber" label="借阅证号" sortable>
        </el-table-column>
        <el-table-column prop="bookNumber" label="书籍ID" sortable> </el-table-column>
        <el-table-column prop="borrowDate" label="借阅时间" sortable> </el-table-column>
        <el-table-column prop="closeDate" label="截止时间" sortable> </el-table-column>
        <el-table-column prop="returnDate" label="归还时间" sortable> </el-table-column>
        <el-table-column prop="violationMessage" label="违章信息"> </el-table-column>
        <el-table-column prop="violationAdmin" label="处理人"> </el-table-column>
      </el-table>
      <!-- 分页查询区域 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-sizes="[1, 2, 3, 4,5]"
      :page-size="queryInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "card_number",
          label: "借阅证号",
        },
        {
          value: "book_number",
          label: "书籍ID",
        },
        {
          value: "borrow_date",
          label: "借阅时间",
        },
        {
          value: "close_date",
          label: "截止时间",
        },
        {
          value: "return_date",
          label: "归还时间",
        },
        {
          value: "violation_message",
          label: "违章信息",
        },
      ],
      tableData: [],
        queryInfo: {
        pageNum: 1,
        pageSize: 5,
        condition: "",
        query: "",
      },
      total: 0,
      title: "借阅信息查询",
      json_fields: {
        ID: "violationId",
        借阅证编号: "cardNumber",
        书籍编号: "bookNumber",
        借阅日期: "borrowDate",
        截止日期: "closeDate",
        归还日期:"returnDate",
        违章信息:"violationMessage",
        处理人:"violationAdmin"
      },
      loading:true
    };
  },
  methods: {
      handleSizeChange(val) {
        this.queryInfo.pageSize = val;
        this.getBorrowStatement();
      },
      handleCurrentChange(val) {
        this.queryInfo.pageNum = val;
        this.getBorrowStatement();
      },
      async getBorrowStatement(){
        this.loading = true;
        const {data:res} = await this.$http.post('bookadmin/get_borrow_statement',this.queryInfo)
        // console.log(res);
        this.tableData = [];
      if (res.status !== 200) {
        this.total = 0;
        this.loading = false;
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message: res.msg,
        duration: 1000,
      });
      this.tableData = res.data.records;
      this.total = res.data.total;
      this.loading = false;
      },
      downLoad() {
      this.getPdf(this.title); //参数是下载的pdf文件名
    },
    fullScreen(){
          // Dom对象的一个属性: 可以用来判断当前是否为全屏模式(trueORfalse)
    let full = document.fullscreenElement;
    // 切换为全屏模式
    if(!full){
        // 文档根节点的方法requestFullscreen实现全屏模式
        document.documentElement.requestFullscreen();
    }else{
        // 退出全屏模式
        document.exitFullscreen();
    }
    }
    },
    created(){
      this.getBorrowStatement();
    }
};
</script>

<style>
</style>