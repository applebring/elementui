<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card bg-success">
        Success<br/>
        #67C23A
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card bg-warning">
        Warning<br/>
#E6A23C
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card bg-danger">
        Danger</br>
#F56C6C
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
<style lang="less" scoped>
  .el-card{
    height:200px;
    line-height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  
</style>