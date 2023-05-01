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
      <el-table :data="tableData" border style="width: 100%" stripe
      v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-table-column prop="noticeId" label="ID"> </el-table-column>
        <el-table-column prop="noticeTitle" label="标题"> </el-table-column>
        <el-table-column prop="noticeContent" label="公告"> </el-table-column>
        <el-table-column prop="createTime" label="发布日期"> </el-table-column>
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
                @click="showEditDialog(scope.row.noticeId)"
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
                @click="removeUserById(scope.row.noticeId)"
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
        :page-sizes="[1, 2, 3, 4,5]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
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
          <el-button type="primary" @click="editNoticeById"
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
          <el-button type="primary" @click="addNotice"
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
    
      tableData: [],
      
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
        noticeContent:"",
        noticeAdminId:0
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
      },
      queryInfo: {
        pageNum: 1,
        pageSize: 5,
      },
      total: 0,
      loading:true
    };
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;

      this.getNoticeList();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;

      this.getNoticeList();
    },
    //让修改公告的对话框可见,并从数据库中回显数据
    async showEditDialog(id) {
      this.loading = true;
      const {data:res} = await this.$http.get('bookadmin/get_notice/'+id);
      if(res.status !== 200){
      
        return this.$message.error(res.msg)
      }
      // console.log(res);
      this.editForm = res.data;
      // 让修改公告的对话框可见
      this.editDialogVisible = true;
      
    },
    //监听修改对话框的关闭，一旦对话框关闭，就重置表单，回显数据
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    // 修改公告根据公告id
    async editNoticeById(){
      const {data:res} = await this.$http.put('bookadmin/update_notice/'+this.editForm.noticeId,{
        noticeTitle:this.editForm.noticeTitle,
        noticeContent:this.editForm.noticeContent
      })
      if(res.status !== 200){
        return this.$message.error(res.msg)
      }
      // 对话框不可见
      this.editDialogVisible = false;
      this.getNoticeList();
      this.$message.success(res.msg)
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
      const {data:res} = await this.$http.get('bookadmin/delete_notice/'+id)
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success({
        message: res.msg,
        duration: 1500,
      });
      this.getNoticeList();
    },
    //监听添加公告对话框的关闭，一旦对话框关闭，就重置表单
    addDialogClosed(){
      this.$refs.addFormRef.resetFields();
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    showAddDialog(){
        this.addDialogVisible = true;
    },
    async getNoticeList(){
      this.loading = true;
      const {data:res} = await this.$http.post('bookadmin/get_noticelist',this.queryInfo)
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
    async addNotice(){
      // 取消可见性
      this.addDialogVisible = false;
      // 获取图书管理员id
      this.addForm.noticeAdminId = parseInt(window.sessionStorage.getItem('bookAdminId'))
      // 发送axios请求添加公告
      const {data:res} = await this.$http.post('bookadmin/add_notice',this.addForm)
      console.log(res);
      if(res.status!== 200){
        return this.$message.error(res.msg)
      }
      this.$message.success({
        message:res.msg,
        duration:1000
      })
      this.getNoticeList();

    }
  },
  created(){
    this.getNoticeList();
  }
};
</script>

<style>
</style>