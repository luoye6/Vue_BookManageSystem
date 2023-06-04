<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>书籍管理</el-breadcrumb-item>
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
            @keyup.enter.native="getBookList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getBookList"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showAddDialog()">
            <i class="el-icon-plus"></i> 添加书籍</el-button
          >
        </el-col>

        <el-col :span="2" style="float: right">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            :header="title"
            name="书籍管理.xls"
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
          <el-button type="warning" @click="removeBatch()" size="mini">
            <i class="el-icon-delete"></i>批量删除</el-button
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
        height="520"
        style="width: 100%"
        stripe
        id="pdfDom"
        :default-sort="{ prop: 'bookNumber', order: 'ascending' }"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="bookNumber" label="图书编号" sortable>
        </el-table-column>
        <el-table-column prop="bookName" label="书名" width="80px">
        </el-table-column>
        <el-table-column prop="bookAuthor" label="作者" width="80px">
        </el-table-column>
        <el-table-column prop="bookLibrary" label="图书馆" width="80px">
        </el-table-column>
        <el-table-column prop="bookType" label="分类" width="80px">
        </el-table-column>
        <el-table-column prop="bookLocation" label="位置" sortable width="80px">
        </el-table-column>
        <el-table-column prop="bookStatus" label="状态" sortable width="80px">
        </el-table-column>
        <el-table-column prop="bookDescription" label="描述" width="400px">
        </el-table-column>
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
                @click="showEditDialog(scope.row.bookId)"
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
                @click="removeUserById(scope.row.bookId)"
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
          <el-form-item label="书名" prop="bookName">
            <el-input v-model="editForm.bookName"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="bookAuthor">
            <el-input v-model="editForm.bookAuthor"></el-input>
          </el-form-item>
          <el-form-item label="图书馆">
            <el-radio-group v-model="editForm.bookLibrary">
              <el-radio-button label="南图"></el-radio-button>
              <el-radio-button label="北图"></el-radio-button>
              <el-radio-button label="教师之家"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="editForm.bookType" placeholder="请选择">
              <el-option
                v-for="item in types"
                :key="item.typeId"
                :label="item.typeName"
                :value="item.typeId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="位置" prop="bookLocation">
            <el-input v-model="editForm.bookLocation"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="bookStatus">
            <el-radio-group v-model="editForm.bookStatus">
              <el-radio label="已借出">已借出</el-radio>
              <el-radio label="未借出">未借出</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="书籍简介" prop="bookDescription">
            <el-input
              type="textarea"
              v-model="editForm.bookDescription"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateBook">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 添加书籍的对话框 -->
      <el-dialog
        title="添加书籍"
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
          <el-form-item label="书名" prop="bookName">
            <el-input v-model="addForm.bookName"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="bookAuthor">
            <el-input v-model="addForm.bookAuthor"></el-input>
          </el-form-item>
          <el-form-item label="图书馆">
            <el-radio-group v-model="addForm.bookLibrary">
              <el-radio-button label="南图"></el-radio-button>
              <el-radio-button label="北图"></el-radio-button>
              <el-radio-button label="教师之家"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="addForm.bookTypeNumber" placeholder="请选择">
              <el-option
                v-for="item in types"
                :key="item.typeId"
                :label="item.typeName"
                :value="item.typeId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="位置" prop="bookLocation">
            <el-input v-model="addForm.bookLocation"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="bookStatus">
            <el-radio-group v-model="addForm.bookStatus">
              <el-radio label="已借出">已借出</el-radio>
              <el-radio label="未借出">未借出</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="书籍简介" prop="bookDescription">
            <el-input
              type="textarea"
              v-model="addForm.bookDescription"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addBook">添加书籍</el-button>
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
        bookName: "",
        bookAuthor: "",
        bookLibrary: "南图",
        bookType: "",
        bookLocation: "",
        bookStatus: "",
        bookDescription: "",
      },
      editFormRules: {
        bookName: [
          { required: true, message: "图书名称不能为空", trigger: "blur" },
        ],
        bookAuthor: [
          { required: true, message: "图书作者不能为空", trigger: "blur" },
        ],
        bookLocation: [
          { required: true, message: "图书位置不能为空", trigger: "blur" },
        ],
        bookDescription: [
          { required: true, message: "图书介绍不能为空", trigger: "blur" },
        ],
      },
      addDialogVisible: false,
      addForm: {
        bookName: "",
        bookAuthor: "",
        bookLibrary: "南图",
        bookTypeNumber: "",
        bookLocation: "",
        bookStatus: "",
        bookDescription: "",
      },
      addFormRules: {
        bookName: [
          { required: true, message: "图书名称不能为空", trigger: "blur" },
        ],
        bookAuthor: [
          { required: true, message: "图书作者不能为空", trigger: "blur" },
        ],
        bookLocation: [
          { required: true, message: "图书位置不能为空", trigger: "blur" },
        ],
        bookDescription: [
          { required: true, message: "图书介绍不能为空", trigger: "blur" },
        ],
      },
      searchs: [
        {
          value: "book_number",
          label: "图书编号",
        },
        {
          value: "book_name",
          label: "书名",
        },
        {
          value: "book_author",
          label: "作者",
        },
        {
          value: "book_library",
          label: "图书馆",
        },
        {
          value: "book_location",
          label: "位置",
        },
        {
          value: "book_status",
          label: "状态",
        },
        {
          value: "book_description",
          label: "描述",
        },
      ],
      queryInfo: {
        pageNum: 1,
        pageSize: 5,
        condition: "",
        query: "",
      },
      total: 0,
      types: [
        {
          typeId: "童话",
          typeName: "童话",
        },
        {
          typeId: "文学",
          typeName: "文学",
        },
        {
          typeId: "散文",
          typeName: "散文",
        },
      ],
      title: "书籍管理",
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
      loading: true,
      multipleSelection: [],
    };
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
      this.getBookList();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
      this.getBookList();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //让修改图书的对话框可见,并从数据库中回显数据
    async showEditDialog(id) {
      // 让修改公告的对话框可见
      this.editDialogVisible = true;
      const { data: res } = await this.$http.get(
        "admin/get_bookinformation/" + id
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.editForm = res.data;
    },
    //监听修改对话框的关闭，一旦对话框关闭，就重置表单，回显数据
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    //删除单个图书
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
      const { data: res } = await this.$http.get("admin/delete_book/" + id);
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success(res.msg);
      // 防止删除出现数据显示错误
      this.queryInfo.pageNum = 1;
      this.queryInfo.pageSize = 5;
      this.getBookList();
    },
    //监听添加公告对话框的关闭，一旦对话框关闭，就重置表单
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    async showAddDialog() {
      // 发送axios请求 获取数据库中的书籍分类信息
      const { data: res } = await this.$http.get("admin/get_type");
      console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.types = res.data;
      this.addDialogVisible = true;
    },
    async getBookList() {
      this.loading = true;
      const { data: res } = await this.$http.post(
        "admin/get_booklist",
        this.queryInfo
      );
      this.tableData = [];
      // console.log(res);
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
    async addBook() {
      const { data: res } = await this.$http.post(
        "admin/add_book",
        this.addForm
      );
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error(res.msg);
      }
      this.$message.success(res.msg);
      this.getBookList();
      this.addDialogVisible = false;
    },
    async updateBook() {
      this.$refs.editFormRef.validate(async (valid) => {
        // console.log(valid);
        //如果表单验证无效，直接返回
        if (!valid) {
          return;
        }
        // 验证成功 发送axios请求
        const { data: res } = await this.$http.post(
          "admin/update_book",
          this.editForm
        );
        // console.log(res);
        if (res.status !== 200) {
          return this.$message.error(res.msg);
        }
        this.$message.success(res.msg);
        this.getBookList();
        this.editDialogVisible = false;
      });
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
    },
    // 批量删除图书
    async removeBatch(){
       //弹框，询问用户是否删除数据
       const confirmResult = await this.$confirm(
        "此操作将永久删除这些书籍, 是否继续?",
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
      // 判断multipleSelection数组是否为空，为空的话进行提示
      if(this.multipleSelection.length == 0){
        return this.$message.error({
          message:"选中项为空，无法进行批量删除",
          duration:1000
        });
      }
      //如果用户确认删除，那么下一步就是发送axios请求，检查响应状态码是否成功,成功则返回删除成功，否则返回删除失败
      // const { data: res } = await this.$http.get("admin/delete_book/" + id);
      const {data: res} = await this.$http.delete("admin/delete_book_batch",{
        data:this.multipleSelection
      });
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error({
          message:res.msg,
          duration:1000
        });
      }
      this.$message.success({
        message:res.msg,
        duration:1000
      });
      // 防止删除出现数据显示错误
      this.queryInfo.pageNum = 1;
      this.queryInfo.pageSize = 5;
      this.getBookList();
    }
  },
  created() {
    this.getBookList();
  },
};
</script>

<style>
</style>