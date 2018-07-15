<template>
  <el-card class="box-card">
    <div class="component-tips">
      vue-echart github地址：https://github.com/ecomfe/vue-echarts
    </div>
    <chart :options="polar"></chart>
  </el-card>
</template>
<script>
  import Vue from 'vue';
  import ECharts from 'vue-echarts/components/ECharts';
  // import ECharts modules manually to reduce bundle size
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'

  // register component to use
  Vue.component('chart', ECharts)
  export default {
    data: function () {
      let data = []

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }

      return {
        polar: {
          title: {
            text: '极坐标双数值轴',
            left:'center'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000
        }
      }
    }
  }

</script>
<style scoped>
.echarts {
  height: 300px;
}
</style>