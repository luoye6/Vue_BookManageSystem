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
            v-model="value"
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
            v-model="input"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4" style="float: right"> 导出Excel、PDF </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="borrowId" label="ID">
        </el-table-column>
        <el-table-column prop="cardNumber" label="借阅证号">
        </el-table-column>
        <el-table-column prop="bookNumber" label="书籍ID"> </el-table-column>
        <el-table-column prop="borrowDate" label="借阅时间"> </el-table-column>
        <el-table-column prop="closeDate" label="截止时间"> </el-table-column>
        <el-table-column prop="returnDate" label="归还时间"> </el-table-column>
        <el-table-column prop="violationMessage" label="违章信息"> </el-table-column>
        <el-table-column prop="violationAdmin" label="处理人"> </el-table-column>
      </el-table>
      <!-- 分页查询区域 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.tableData.length">
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
          value: "选项1",
          label: "ID",
        },
        {
          value: "选项2",
          label: "借阅证号",
        },
        {
          value: "选项3",
          label: "书籍ID",
        },
        {
          value: "选项4",
          label: "借阅时间",
        },
        {
          value: "选项5",
          label: "截止时间",
        },
        {
          value: "选项6",
          label: "归还时间",
        },
        {
          value: "选项7",
          label: "违章信息",
        },
        {
          value: "选项8",
          label: "处理人",
        }
      ],
      value: "",
      tableData: [{
        borrowId:621,
        cardNumber: '1805010219',
        bookNumber: '12378',
        borrowDate: '2022-12-20 16:48:44',
        closeDate:'2023-02-08 16:49:37',
        returnDate:'2022-12-23 13:10:45',
        violationMessage:'',
        violationAdmin:'root',
        }, {
          borrowId:621,
        cardNumber: '1805010219',
        bookNumber: '12378',
        borrowDate: '2022-12-20 16:48:44',
        closeDate:'2023-02-08 16:49:37',
        returnDate:'2022-12-23 13:10:45',
        violationMessage:'',
        violationAdmin:'root',
        }, {
          borrowId:621,
        cardNumber: '1805010219',
        bookNumber: '12378',
        borrowDate: '2022-12-20 16:48:44',
        closeDate:'2023-02-08 16:49:37',
        returnDate:'2022-12-23 13:10:45',
        violationMessage:'',
        violationAdmin:'root',
        }, {
          borrowId:621,
        cardNumber: '1805010219',
        bookNumber: '12378',
        borrowDate: '2022-12-20 16:48:44',
        closeDate:'2023-02-08 16:49:37',
        returnDate:'2022-12-23 13:10:45',
        violationMessage:'',
        violationAdmin:'root',
        }, ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        input:'',

    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style>
</style>