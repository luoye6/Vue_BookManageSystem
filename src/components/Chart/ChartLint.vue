<template>
  <div id="echart-line" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    initChart(name, xData, yData) {
      // echarts.init('根元素','主题')
      let getchart = echarts.init(document.getElementById("echart-line"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" },
        },
        legend: {
          data: [name],
          bottom: "0%",
     
        },
        grid: {
          //调整图表上下左右位置
          top: "10%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xData,
          axisLabel: {
            formatter: "{value}",
            align: "center",
            // ...
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: name,
            type: "line",
            data: yData,
            barWidth: "20%",
          },
        ],
      };

      getchart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
      });
    },
  },
};
</script>
