<template>
 <el-card class="box-card">
   <div class="component-tips">
     基于echart.js无任何处理表格 官网：http://echarts.baidu.com/
   </div>
    <div id="chart1" class="chart" style="height:400px;"></div>
 </el-card>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      charts: "",
      xAxidata: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      chartdata: [120, 200, 150, 80, 70, 110, 130]
    };
  },
  methods: {
    echartInit(id) {
      this.charts = echarts.init(document.getElementById(id));
      var option = {
        title: { text: "echart.js","left":"center"},
        xAxis: {
          type: "category",
          data: this.xAxidata
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.chartdata,
            type: "bar",
            barWidth:'50'
          }
        ]
      };
      this.charts.setOption(option);
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.echartInit("chart1");
    });
  }
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
}
.chart {
  height: 500px;
}
</style>