<template>
  <el-card class="box-card">
    <div class="component-tips">
      vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
      访问地址：<a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
    </div>
    <el-radio-group v-model="seriesRadio" :change="seriesChange" size="small">
      <el-radio-button label="1">数据一</el-radio-button>
      <el-radio-button label="2">数据二</el-radio-button>
      <el-radio-button label="3">数据三</el-radio-button>
    </el-radio-group>
    <div class="mix-echarts">
      <Echarts :option="mix" ></Echarts>
    </div>
  </el-card>
</template>

<script>
  import Echarts from 'vue-echarts-v3';
  export default {
    data: function(){
      return {
        seriesRadio:"1",
        seriesData:[
          {
            name: "数据一",
            type: "line",
            data: [15, 20, 26, 30, 40, 27]
          },
          {
            name: "数据二",
            type: "bar",
            data: [5, 30, 36, 10, 34, 20]
          },
          {
            name: "数据三",
            type: "bar",
            data: [35, 40, 30, 50, 60, 40]
          }
        ],
        mix:{
          color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
          title : {
            text: '多图切换',
            x:'center'
          },
          xAxis: {
            data: ['周一','周二','周三','周四','周五','周末']
          },
          yAxis:{},
          series: []
        }
      }
    },
    components: {
      Echarts
    },
    computed:{
      seriesChange:function(){
        let seriesRadio=this.seriesRadio-1
        this.mix.series=this.seriesData[seriesRadio];
      }
    },
    beforeMount(){
      this.mix.series=this.seriesData[0];
    }
  }
</script>

<style scoped>
  .mix-echarts{
    height:600px;
  }
  /* inline-block元素会有空隙的bug */
  .el-radio-group{
    font-size:0;
  }
</style>