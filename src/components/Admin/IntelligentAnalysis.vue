<template>
  <div class="intelligent_analysis">
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card header="智能分析">
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-width="90px"
            enctype="multipart/form-data"
          >
            <el-form-item label="分析目标: " prop="goal">
              <el-input type="textarea" v-model="form.goal"></el-input>
            </el-form-item>
            <el-form-item label="图表名称: " prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="图表类型: " prop="chartType">
              <el-select v-model="form.chartType" placeholder="请选择图表类型">
                <el-option label="折线图" value="折线图"></el-option>
                <el-option label="柱状图" value="柱状图"></el-option>
                <el-option label="堆叠图" value="堆叠图"></el-option>
                <el-option label="饼图" value="饼图"></el-option>
                <el-option label="雷达图" value="雷达图"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="原始数据: ">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-remove="handleRemove"
                :on-change="handleChange"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                name="file"
                :file-list="fileList"
                ref="upload"
                :auto-upload="false"
              >
                <el-button size="small" type="success" icon="el-icon-upload2"
                  >上传Excel文件</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  只能上传xls/xlsx文件，且不超过1MB
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="onSubmit"
                v-loading="submitting"
                :disabled="submitting"
                >提交</el-button
              >
              <el-button @click="resetForm" :disabled="submitting"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="分析结论" v-loading="submitting">
          <div v-if="chart.genResult" style="white-space: pre-wrap">
            {{ chart.genResult }}
            <!-- 根据具体的需求来显示生成结果 -->
          </div>
          <div v-else>
            <div v-if="!submitting">请先在左侧进行提交</div>
          </div>
        </el-card>
        <el-divider></el-divider>
        <el-card header="可视化图表" v-loading="submitting">
          <div v-show="chart.genChart">
            <div
              ref="chartContainer"
              style="width: 100%; height: 50vh"
              class="chartContainer"
            ></div>
          </div>
          <div v-show="!chart.genChart">
            <div v-if="!submitting" @click="createChart()">
              请先在左侧进行提交
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      form: {
        goal: "",
        name: "",
        chartType: "",
        adminId: undefined,
      },
      file: {},
      rules: {
        goal: [
          { required: true, message: "请输入分析目标", trigger: "blur" },
          {
            min: 5,
            max: 100,
            message: "长度在 5 到 100 个字符",
            trigger: "blur",
          },
        ],
      },
      chart: {
        genChart: "",
        genResult: "",
        chartId: "",
      },
      resultChart: {},
      fileList: [],
      submitting: false,
    };
  },
  methods: {
    // 文件数量超过限制
    handleExceed(files, fileList) {
      this.$message.info({
        message: "最多只能上传一个文件",
        duration: 1500,
      });
    },
    // 文件状态发生改变回调(添加文件、上传成功和上传失败时都会被调用)
    handleChange(file, fileList) {
      // 1. 检查文件类型 只能为xls或者xlsx\
      // 第一种是xls 第二种是xlsx
      const acceptTypeList = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      // 表示用户上传的文件类型不在允许范围内
      if (acceptTypeList.indexOf(file.raw.type) === -1) {
        this.$message.info({
          message: "只允许xls或者xlsx格式的文件上传",
          duration: 1500,
        });
        this.handleRemove(file);
        return;
      }
      // 2.检查文件大小是否大于1MB
      const acceptSize = 1 * 1024 * 1024;
      if (file.raw.size > acceptSize) {
        this.$message.info({
          message: "只允许文件大小在1MB之内的Excel文件",
          duration: 1500,
        });
        this.handleRemove(file);
        return;
      }
      this.file = file.raw;
    },
    async onSubmit() {
      if (this.submitting) {
        return;
      }
      this.submitting = true;
      const formData = new FormData();

      if (this.file) {
        formData.append("file", this.file);
      }
      this.form.adminId = parseInt(window.sessionStorage.getItem("adminId"));
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      this.$message.info({
        message: "接口调用花费时间在30秒左右，AI模型暂时不稳定",
        duration: 2500,
      });
      const { data: res } = await this.$http.post("/admin/gen", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status !== 200) {
        this.submitting = false;
        return this.$message.error({
          message: res.msg,
          duration: 1500,
        });
      }
      this.chart = res.data;
      this.resultChart = res.map.genChart;
      this.createChart();
      this.$message.success({
        message: res.msg,
        duration: 1500,
      });
      this.submitting = false;
    },
    createChart() {
      const chartOption = this.resultChart;
      if (!chartOption) {
        return this.$message.error({
          message: "图表代码解析错误",
          duration: 1500,
        });
      }
      this.$nextTick(() => {
        const chart = echarts.init(this.$refs.chartContainer);
        chart.setOption(chartOption);
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
      this.handleRemove();
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
      this.fileList = [];
      this.file = {};
    },
  },
  mounted() {},
};
</script>
<style scoped lang="less"></style>
