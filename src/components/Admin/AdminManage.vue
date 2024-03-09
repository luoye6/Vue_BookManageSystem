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
    <div style="width: 100%; height: 500px; margin-top: 50px">
      <PieChart ref="chart_pie_one"></PieChart>
    </div>
  </div>
</template>

<script>
import ChartLine from "../Chart/ChartLint.vue";
import PieChart from "../Chart/PieChart.vue";
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
      pieData: [],
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
    if (res.status !== 200) {
      return this.$message.error(res.msg);
    }
    this.$message.success({
      message: res.msg,
      duration: 800,
    });
    const { data: res2 } = await this.$http.get(
      "admin/get_borrowtype_statistics"
    );
    if (res2.status !== 200) {
      return this.$message.error(res2.msg);
    }
    this.$message.success({
      message: res2.msg,
      duration: 800,
    });
    console.log(res2);
    for (var element of res2.data) {
      this.pieData.push({
        name: element.bookTypes,
        value: element.borrowNumbers,
      });
    }
    this.allData.xData = res.data.borrowDates;
    this.allData.yData = res.data.borrowNumber;
    this.$refs.chart_line_one.initChart(
      this.name,
      this.allData.xData,
      this.allData.yData
    );
    this.$refs.chart_pie_one.initChart(this.pieData);
  },
  components: {
    ChartLine,
    PieChart,
  },
};
</script>
<style>
</style>