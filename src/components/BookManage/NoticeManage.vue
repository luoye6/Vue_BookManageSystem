<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布公告</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="always">
      <!-- 搜索内容和导出区域 -->
      <el-row>
        <el-col :span="4">
          <el-button type="primary" @click="showAddDialog()">
            <i class="el-icon-s-promotion"></i> 发布新公告</el-button
          >
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="cardNumber" label="ID"> </el-table-column>
        <el-table-column prop="bookNumber" label="标题"> </el-table-column>
        <el-table-column prop="borrowDate" label="公告"> </el-table-column>
        <el-table-column prop="closeDate" label="发布日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-tooltip
              effect="dark"
              content="修改"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="showEditDialog()"
              ></el-button
            ></el-tooltip>

            <!-- 删除按钮 -->
            <el-tooltip
              effect="dark"
              content="删除"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="removeUserById()"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页查询区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.tableData.length"
      >
      </el-pagination>
      <!-- 修改公告的对话框 -->
      <el-dialog
        title="修改公告"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClosed"
      >
        <el-form
          :model="editForm"
          ref="editFormRef"
          :rules="editFormRules"
          label-width="100px"
        >
          <el-form-item label="公告标题" prop="noticeTitle">
            <el-input v-model="editForm.noticeTitle"></el-input>
          </el-form-item>
          <el-form-item label="公告内容" prop="noticeContent">
            <el-input
              type="textarea"
              v-model="editForm.noticeContent"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 添加公告的对话框 -->
      <el-dialog
        title="添加公告"
        :visible.sync="addDialogVisible"
        width="50%"
        @close="addDialogClosed"
      >
        <el-form
          :model="addForm"
          ref="addFormRef"
          :rules="addFormRules"
          label-width="100px"
        >
          <el-form-item label="公告标题" prop="noticeTitle">
            <el-input v-model="addForm.noticeTitle"></el-input>
          </el-form-item>
          <el-form-item label="公告内容" prop="noticeContent">
            <el-input
              type="textarea"
              v-model="addForm.noticeContent"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false"
            >添加公告</el-button
          >
        </span>
      </el-dialog>
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
          label: "借阅证号",
        },
        {
          value: "选项2",
          label: "图书编号",
        },
        {
          value: "选项3",
          label: "借阅日期",
        },
        {
          value: "选项4",
          label: "截止日期",
        },
      ],
      value: "",
      tableData: [
        {
          cardNumber: "1805010219",
          bookNumber: "12378",
          borrowDate: "2022-12-20 16:48:44",
          closeDate: "2023-02-08 16:49:37",
          operation: "2022-12-23 13:10:45",
        },
        {
          cardNumber: "1805010219",
          bookNumber: "12378",
          borrowDate: "2022-12-20 16:48:44",
          closeDate: "2023-02-08 16:49:37",
          returnDate: "2022-12-23 13:10:45",
          violationMessage: "",
          violationAdmin: "root",
        },
        {
          cardNumber: "1805010219",
          bookNumber: "12378",
          borrowDate: "2022-12-20 16:48:44",
          closeDate: "2023-02-08 16:49:37",
          returnDate: "2022-12-23 13:10:45",
          violationMessage: "",
          violationAdmin: "root",
        },
        {
          cardNumber: "1805010219",
          bookNumber: "12378",
          borrowDate: "2022-12-20 16:48:44",
          closeDate: "2023-02-08 16:49:37",
          returnDate: "2022-12-23 13:10:45",
          violationMessage: "",
          violationAdmin: "root",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      input: "",
      editDialogVisible: false,
      editForm: {
        noticeTitle: "",
        noticeContent: "",
      },
      editFormRules: {
        noticeTitle: [
          { required: true, message: "请输入公告标题", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在6到30个字符",
            trigger: "blur",
          },
        ],
        noticeContent: [
          { required: true, message: "请输入公告内容", trigger: "blur" },
        ],
      },
      addDialogVisible:false,
      addForm:{
        noticeTitle:"",
        noticeContent:""
      },
      addFormRules:{
        noticeTitle: [
          { required: true, message: "请输入公告标题", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在6到30个字符",
            trigger: "blur",
          },
        ],
        noticeContent: [
          { required: true, message: "请输入公告内容", trigger: "blur" },
        ],
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //让修改公告的对话框可见,并从数据库中回显数据
    showEditDialog() {
      // 让修改公告的对话框可见
      this.editDialogVisible = true;
    },
    //监听修改对话框的关闭，一旦对话框关闭，就重置表单，回显数据
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
      console.log("231");
    },
    //删除公告
    async removeUserById() {
      //弹框，询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该公告, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((error) => {
        return error;
      });
      //如果用户确认删除，则返回值为字符串confirm
      //如果用户取消删除，则返回值为字符串cancel
      // console.log(confirmResult);
      if (confirmResult !== "confirm") {
        return this.$message.info("已经取消删除");
      }
      //如果用户确认删除，那么下一步就是发送axios请求，检查响应状态码是否成功,成功则返回删除成功，否则返回删除失败
    },
    //监听添加公告对话框的关闭，一旦对话框关闭，就重置表单
    addDialogClosed(){
      this.$refs.addFormRef.resetFields();
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    showAddDialog(){
        this.addDialogVisible = true;
    }
  },
};
</script>

<style>
</style>