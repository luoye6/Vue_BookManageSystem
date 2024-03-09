<template>
  <div id="echart-pie" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  methods: {
    initChart(pieData) {
      var chartDom = document.getElementById("echart-pie");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "借书类型分析统计图",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "借书类型分析统计图",
            type: "pie",
            radius: "50%",
            data:pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
   
      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>