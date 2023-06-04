<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>图书查询</el-breadcrumb-item>
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
            @keyup.enter.native="searchBookByPage"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchBookByPage"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="2" style="float: right">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            :header="title"
            name="图书查询表格.xls"
          >
            <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <el-button type="primary" class="el-icon-printer" size="mini"
              >导出Excel</el-button
            >
          </download-excel>
      
        </el-col>
        <el-col :span="2" style="float: right">
         
          <el-button type="primary" class="el-icon-printer" size="mini" @click="downLoad"
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
      <el-table
        :data="tableData"
        height="520"
        border
        style="width: 100%; font-size: 14px"
        v-loading="loading"
        element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
        id="pdfDom"
        :default-sort = "{prop: 'bookNumber', order: 'ascending'}"
        stripe
      >
        <el-table-column prop="bookNumber" label="图书编号" sortable> </el-table-column>
        <el-table-column prop="bookName" label="图书名称"> </el-table-column>
        <el-table-column prop="bookAuthor" label="作者" > </el-table-column>
        <el-table-column prop="bookLibrary" label="图书馆"> </el-table-column>
        <el-table-column prop="bookType" label="分类"> </el-table-column>
        <el-table-column prop="bookLocation" label="位置" sortable> </el-table-column>
        <el-table-column prop="bookStatus" label="状态" sortable> </el-table-column>
        <el-table-column prop="bookDescription" label="描述" width="600px">
        </el-table-column>
      </el-table>
      <!-- 分页查询区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.queryInfo.pageNum"
        :page-sizes="[1, 2, 3, 4, 5]"
        :page-size="this.queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      >
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
          value: "book_number",
          label: "图书编号",
        },
        {
          value: "book_name",
          label: "图书名称",
        },
        {
          value: "book_author",
          label: "作者",
        },
        {
          value: "book_location",
          label: "位置",
        },
        {
          value: "book_description",
          label: "描述",
        },
      ],
      tableData: [
      
      ],
      queryInfo: {
        pageNum: 1,
        pageSize: 5,
        condition: "",
        query: "",
      },
      total: 0,

      title: "图书查询表格",
      json_fields: {
        图书编号: "bookNumber",
        图书名称: "bookName",
        作者: "bookAuthor",
        图书馆: "bookLibrary",
        分类: "bookType",
        位置: "bookLocation",
        状态: "bookStatus",
        描述: "bookDescription",
      },
      loading: true
    };
  },
  created() {
    this.searchBookByPage();
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
 
      this.searchBookByPage();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
    
      this.searchBookByPage();
    },
    async searchBookByPage() {
      this.loading = true;
      const { data: res } = await this.$http.post(
        "user/search_book_page",
        this.queryInfo
      );
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
      this.loading = false;
      this.tableData = res.data.records;
      this.total = res.data.total;
    },
    downLoad(){
      this.getPdf(this.title);//参数是下载的pdf文件名
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
};
</script>

<style lang="css">

</style>