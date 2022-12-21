<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>违章信息</el-breadcrumb-item>
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
        <el-table-column prop="cardNumber" label="借阅证号">
        </el-table-column>
        <el-table-column prop="bookNumber" label="图书编号">
        </el-table-column>
        <el-table-column prop="borrowDate" label="借阅日期"> </el-table-column>
        <el-table-column prop="closeDate" label="截止日期"> </el-table-column>
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
          label: "图书编号",
        },
        {
          value: "选项2",
          label: "借阅日期",
        },
        {
          value: "选项3",
          label: "截止日期",
        },
        {
          value: "选项4",
          label: "归还日期",
        },
        {
          value: "选项5",
          label: "违章信息",
        },
        {
          value: "选项6",
          label: "处理人",
        },
      ],
      value: "",
      tableData: [{
        cardNumber: '1805190219',
        bookNumber: '12378',
        borrowDate: '2022-11-11 12:00:00',
        closeDate:'2023-02-03 12:00:00',
        returnDate:'2023-01-15 11:44:34',
        violationMessage:'书籍损坏',
        violationAdmin:'admin',
        }, {
        cardNumber: '1805190219',
        bookNumber: '12378',
        borrowDate: '2022-11-11 12:00:00',
        closeDate:'2023-02-03 12:00:00',
        returnDate:'2023-01-15 11:44:34',
        violationMessage:'书籍损坏',
        violationAdmin:'admin',
        }, {
        cardNumber: '1805190219',
        bookNumber: '12378',
        borrowDate: '2022-11-11 12:00:00',
        closeDate:'2023-02-03 12:00:00',
        returnDate:'2023-01-15 11:44:34',
        violationMessage:'书籍损坏',
        violationAdmin:'admin',
        }, {
        cardNumber: '1805190219',
        bookNumber: '12378',
        borrowDate: '2022-11-11 12:00:00',
        closeDate:'2023-02-03 12:00:00',
        returnDate:'2023-01-15 11:44:34',
        violationMessage:'书籍损坏',
        violationAdmin:'admin',
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