<template>
  <div class="search_container">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>书籍类型</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="always">
      <!-- 搜索内容和导出区域 -->
      <el-row>
        <el-col :span="4">
          <el-button type="primary" @click="showAddDialog()">
            <i class="el-icon-plus"></i>添加分类</el-button
          >
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="typeId" label="ID"> </el-table-column>
        <el-table-column prop="typeName" label="分类名"> </el-table-column>
        <el-table-column prop="typeContent" label="描述">
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
      <!-- 修改规则的对话框 -->
      <el-dialog
        title="修改分类"
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
        <el-form-item label="分类名" prop="typeName">
            <el-input v-model="editForm.typeName"></el-input>
          </el-form-item>
          <el-form-item label="分类描述" prop="typeContent">
            <el-input v-model="editForm.typeContent" type="textarea"></el-input>
          </el-form-item>
         
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 添加规则的对话框 -->
      <el-dialog
        title="添加分类"
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
          <el-form-item label="分类名" prop="typeName">
            <el-input v-model="addForm.typeName"></el-input>
          </el-form-item>
          <el-form-item label="分类描述" prop="typeContent">
            <el-input v-model="addForm.typeContent" type="textarea"></el-input>
          </el-form-item>
          
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false"
            >添加分类</el-button
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
      value: "",
      tableData: [
        {
          typeId: 183,
          typeName: "童话",
          typeContent: "孩子的世界",
        },
        {
          typeId: 184,
          typeName: "小说",
          typeContent: "带你看世界",
        },
        {
          typeId: 185,
          typeName: "文言文",
          typeContent: "深奥文学",
        },
        {
          typeId: 186,
          typeName: "人文",
          typeContent: "人文主义",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      input: "",
      editDialogVisible: false,
      editForm: {
        typeName: "",
        typeContent: "",
      },
      editFormRules: {
        typeName: [
          { required: true, message: "请输入分类名", trigger: "blur" },
        ],
        typeContent: [
          { required: true, message: "请输入分类描述", trigger: "blur" },
        ],
      },
      addDialogVisible: false,
      addForm: {
        typeName: "",
        typeContent: "",
      },
      addFormRules: {
        typeName: [
          { required: true, message: "请输入分类名", trigger: "blur" },
        ],
        typeContent: [
          { required: true, message: "请输入分类描述", trigger: "blur" },
        ],
       
      
      },
    
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
      this.editForm.checkList =["南图", "北图", "教师之家"]
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
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
      this.addForm.checkList =["南图", "北图", "教师之家"]
    },
    //当用户点击发送新公告时，让添加对话框的visible改为true
    showAddDialog() {
      this.addDialogVisible = true;
    },
  },
};
</script>

<style>
</style>