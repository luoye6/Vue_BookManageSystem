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
        <el-table-column prop="bookNumber" label="图书编号">
        </el-table-column>
        <el-table-column prop="bookName" label="图书名称">
        </el-table-column>
        <el-table-column prop="bookAuthor" label="作者"> </el-table-column>
        <el-table-column prop="bookLibrary" label="图书馆"> </el-table-column>
        <el-table-column prop="bookType" label="分类"> </el-table-column>
        <el-table-column prop="bookLocation" label="位置"> </el-table-column>
        <el-table-column prop="bookStatus" label="状态"> </el-table-column>
        <el-table-column prop="bookDescription" label="描述" width="600px"> </el-table-column>
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
          label: "图书名称",
        },
        {
          value: "选项3",
          label: "作者",
        },
        {
          value: "选项4",
          label: "位置",
        },
        {
          value: "选项5",
          label: "描述",
        },
      ],
      value: "",
      tableData: [{
        bookNumber: '162',
        bookName: '四大名著',
        bookAuthor: '群英',
        bookLibrary:'教师之家',
        bookType:'',
        bookLocation:'3333',
        bookStatus:'未借出',
        bookDescription:'日本知名文化记者石桥毅史走遍日本全国特色书店。',
        }, {
          bookNumber: '162',
        bookName: '四大名著',
        bookAuthor: '群英',
        bookLibrary:'教师之家',
        bookType:'',
        bookLocation:'3333',
        bookStatus:'未借出',
        bookDescription:'日本知名文化记者石桥毅史走遍日本全国特色书店。',
        }, {
          bookNumber: '162',
        bookName: '四大名著',
        bookAuthor: '群英',
        bookLibrary:'教师之家',
        bookType:'',
        bookLocation:'3333',
        bookStatus:'未借出',
        bookDescription:'日本知名文化记者石桥毅史走遍日本全国特色书店。',
        }, {
          bookNumber: '162',
        bookName: '四大名著',
        bookAuthor: '群英',
        bookLibrary:'教师之家',
        bookType:'',
        bookLocation:'3333',
        bookStatus:'未借出',
        bookDescription:'日本知名文化记者石桥毅史走遍日本全国特色书店。',
        }],
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