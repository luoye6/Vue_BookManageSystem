<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>借阅证管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="always">
      <!-- 搜索内容和导出区域 -->
      <el-row :gutter="10">
        <el-col :span="6"
          >条件搜索:<el-select
            v-model="queryInfo.condition"
            filterable
            placeholder="请选择"
            style="margin-left: 15px"
          >
            <el-option
              v-for="item in searchs"
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
            @keyup.enter.native="getStatementList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getStatementList"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showAddDialog()">
            <i class="el-icon-plus"></i> 添加借阅证</el-button
          >
        </el-col>
        <el-col :span="2" style="float: right">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            :header="title"
            name="借阅证管理.xls"
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
      <el-table :data="tableData" border style="width: 100%" stripe id="pdfDom" :default-sort = "{prop: 'cardNumber', order: 'ascending'}"
      v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-table-column prop="cardNumber" label="借阅证编号" sortable>
        </el-table-column>
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="ruleNumber" label="借阅规则" sortable> </el-table-column>
        <el-table-column prop="status" label="状态" sortable> </el-table-column>
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
                @click="showEditDialog(scope.row.userId)"
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
                @click="removeUserById(scope.row.userId)"
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
      <!-- 修改规则的对话框 -->
      <el-dialog
        title="修改书籍"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClosed"
      >
        <el-form
          :model="editForm"
          ref="editFormRef"
          :rules="editFormRules"
          label-width="120px"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="editForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="editForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="规则" prop="ruleNumber">
            <el-select v-model="editForm.ruleNumber" placeholder="请选择">
              <el-option
                v-for="item in bookRuleIdLists"
                :key="item.ruleId"
                :label="item.bookRuleId"
                :value="item.bookRuleId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" prop="userStatus">
            <el-radio-group v-model="editForm.userStatus">
              <el-radio label="可用">可用</el-radio>
              <el-radio label="挂失">挂失</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateStatement">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 添加书籍的对话框 -->
      <el-dialog
        title="添加借书证"
        :visible.sync="addDialogVisible"
        width="50%"
        @close="addDialogClosed"
      >
        <el-form
          :model="addForm"
          ref="addFormRef"
          :rules="addFormRules"
          label-width="120px"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="规则" prop="ruleNumber">
            <el-select v-model="addForm.ruleNumber" placeholder="请选择">
              <el-option
                v-for="item in bookRuleIdLists"
                :key="item.ruleId"
                :label="item.bookRuleId"
                :value="item.bookRuleId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" prop="userStatus">
            <el-radio-group v-model="addForm.userStatus">
              <el-radio label="可用">可用</el-radio>
              <el-radio label="禁用">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addStatement">添加借阅证</el-button>
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
        ruleNumber: "",
        status: "",
        userStatus: "",
      },
      editFormRules: {},
      addDialogVisible: false,
      addForm: {
        username: "",
        password: "",
        ruleNumber: "",
        userStatus: "",
      },
      addFormRules: {},
      searchs: [
        {
          value: "card_number",
          label: "借阅证编号",
        },
        {
          value: "username",
          label: "用户名",
        },
        {
          value: "rule_number",
          label: "借阅规则",
        },
        {
          value: "status",
          label: "状态",
        },
      ],
      bookRuleIdLists: [
        {
          ruleId: "18",
          bookRuleId: "18",
        },
        {
          ruleId: "357",
          bookRuleId: "357",
        },
      ],
      queryInfo: {
        pageNum: 1,
        pageSize: 5,
        condition: "",
        query: "",
      },
      total: 0,
      title: "借阅证管理",
      json_fields: {
        借阅证遍号: "cardNumber",
        用户名: "username",
        借阅规则: "ruleNumber",
        状态: "status",
      },
      loading:true
    };
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
      this.getStatementList();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
      this.getStatementList();
    },
    //让修改公告的对话框可见,并从数据库中回显数据
    async showEditDialog(id) {
      // 让修改公告的对话框可见
      const { data: res } = await this.$http.get("admin/get_statement/" + id);
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      // 发送axios请求回显规则列表
      const { data: res2 } = await this.$http.get("user/get_rulelist");
      this.bookRuleIdLists = res2.data;
      this.editForm = res.data;
      this.editDialogVisible = true;
    },
    //监听修改对话框的关闭，一旦对话框关闭，就重置表单，回显数据
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
      this.editForm.checkList = ["南图", "北图", "教师之家"];
    },
    //删除公告
    async removeUserById(id) {
      //弹框，询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该书籍, 是否继续?",
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
        "admin/delete_statement/" + id
      );
      console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success(res.msg);
      this.getStatementList();
    },
    //监听添加公告对话框的关闭，一旦对话框关闭，就重置表单
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    async showAddDialog() {
      // 发送axios请求回显规则列表
      const { data: res } = await this.$http.get("user/get_rulelist");
      this.bookRuleIdLists = res.data;
      this.addDialogVisible = true;
    },
    async getStatementList() {
      this.loading = true;
      const { data: res } = await this.$http.post(
        "admin/get_statementlist",
        this.queryInfo
      );
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
    async addStatement() {
      const { data: res } = await this.$http.post(
        "admin/add_statement",
        this.addForm
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }

      this.$message.success(res.msg);
      this.addDialogVisible = false;
      this.getStatementList();
    },
    async updateStatement() {
      const { data: res } = await this.$http.post(
        "admin/update_statement",
        this.editForm
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success(res.msg);
      this.getStatementList();
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
    this.getStatementList();
  },
};
</script>

<style>
</style>