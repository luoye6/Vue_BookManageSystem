<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>借阅量查询</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="width: 100%; height: 500px">
      <ChartLine ref="chart_line_one" />
    </div>
  </div>
</template>

<script>
import ChartLine from "../Chart/ChartLint.vue";

export default {
  data() {
    return {
      name: "借阅量",
      xData: ["", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134],
      allData: {
        xData: ["", "2020-03", "2020-04", "2020-05"],
        yData: [30, 132, 80, 134],
      },
    };
  },
  methods: {
    // async getBorrowData() {
    //   console.log(res);
    // },
  },
  // created() {
  //   this.getBorrowData();
  // },
  async mounted() {
    // console.log(this.$refs);
    const { data: res } = await this.$http.get("admin/get_borrowdata");
    console.log(res);
    this.allData.xData = res.data.borrowDates;
    this.allData.yData = res.data.borrowNumber;
    this.$refs.chart_line_one.initChart(
      this.name,
      this.allData.xData,
      this.allData.yData
    );
  },
  components: {
    ChartLine,
  },
};
</script>
<style>
</style>