<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>图书管理员管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="always">
      <!-- 搜索内容和导出区域 -->
      <el-row>
        <el-col :span="4">
          <el-button type="primary" @click="showAddDialog()">
            <i class="el-icon-plus"></i> 添加管理员</el-button
          >
        </el-col>
        <el-col :span="2" style="float: right">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            :header="title"
            name="图书管理员.xls"
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
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        stripe
        id="pdfDom"
        :default-sort="{ prop: 'bookAdminId', order: 'ascending' }"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <el-table-column prop="bookAdminId" label="ID" sortable>
        </el-table-column>
        <el-table-column prop="username" label="账号"> </el-table-column>
        <el-table-column prop="bookAdminName" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
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
                @click="showEditDialog(scope.row.bookAdminId)"
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
                @click="removeUserById(scope.row.bookAdminId)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页查询区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[1, 2, 3, 4, 5]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      >
      </el-pagination>
      <!-- 修改公告的对话框 -->
      <el-dialog
        title="修改管理员"
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
          <el-form-item label="姓名" prop="bookAdminName">
            <el-input v-model="editForm.bookAdminName"></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="username">
            <el-input v-model="editForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="editForm.password"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateBookAdmin">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 添加管理员的对话框 -->
      <el-dialog
        title="添加管理员"
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
          <el-form-item label="姓名" prop="bookAdminName">
            <el-input v-model="addForm.bookAdminName"></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addForm.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addBookAdmin">添加管理员</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      editDialogVisible: false,
      editForm: {
        username: "",
        password: "",
        email: "",
        bookAdminName: "",
      },
      editFormRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 5,
            max: 30,
            message: "长度在5到30个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 50,
            message: "长度在6到50个字符",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入正确的邮箱",
            trigger: "blur",
            type: "email",
          },
          {
            min: 6,
            max: 50,
            message: "长度在6到50个字符",
            trigger: "blur",
          },
        ],
        bookAdminName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
      },
      addDialogVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        bookAdminName: "",
      },
      addFormRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 5,
            max: 30,
            message: "长度在5到30个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 50,
            message: "长度在6到50个字符",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入正确的邮箱",
            trigger: "blur",
            type: "email",
          },
          {
            min: 6,
            max: 50,
            message: "长度在6到50个字符",
            trigger: "blur",
          },
        ],
        bookAdminName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
      },
      queryInfo: {
        pageNum: 1,
        pageSize: 5,
      },
      total: 0,
      title: "图书管理员",
      json_fields: {
        图书管理员编号: "bookAdminId",
        用户名: "username",
        姓名: "bookAdminName",
        邮箱: "email",
      },
      loading:true
    };
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
      this.getBookAdminList();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
      this.getBookAdminList();
    },
    //让修改公告的对话框可见,并从数据库中回显数据
    async showEditDialog(id) {
      const { data: res } = await this.$http.get("admin/get_bookadmin/" + id);
      console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.editForm = res.data;
      // 让修改公告的对话框可见
      this.editDialogVisible = true;
    },
    //监听修改对话框的关闭，一旦对话框关闭，就重置表单，回显数据
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    //删除公告
    async removeUserById(id) {
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
      const { data: res } = await this.$http.delete(
        "admin/delete_bookadmin/" + id
      );
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message: res.msg,
        duration: 1000,
      });
      this.getBookAdminList();
    },
    //监听添加公告对话框的关闭，一旦对话框关闭，就重置表单
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    showAddDialog() {
      this.addDialogVisible = true;
    },
    // 获取图书管理员列表
    async getBookAdminList() {
      this.loading = true;
      const { data: res } = await this.$http.post(
        "admin/get_bookadminlist",
        this.queryInfo
      );
      // console.log(res);
      if (res.status !== 200) {
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
    async addBookAdmin() {
      const { data: res } = await this.$http.post(
        "admin/add_bookadmin",
        this.addForm
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message: res.msg,
        duration: 1500,
      });
      this.getBookAdminList();
      this.addDialogVisible = false;
    },
    async updateBookAdmin() {
      const { data: res } = await this.$http.put(
        "admin/update_bookadmin",
        this.editForm
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message: res.msg,
        duration: 1500,
      });
      this.getBookAdminList();
      this.editDialogVisible = false;
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
  created() {
    this.getBookAdminList();
  },
};
</script>

<style>
</style>