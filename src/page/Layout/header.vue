<template>
  <div class="header">
    <!-- <img src="../../assets/images/logo2.png" class="header-logo"> -->
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <img src="../../assets/images/user.png" class="user-logo">
        猫咪老师
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="repwd">重置密码</el-dropdown-item>
        <el-dropdown-item command="changeuser">切换账号</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default{
     methods: {
      handleCommand(command) {
        if(command=='logout'){
          this.$store.commit("logout");
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .header{
    line-height:100px;
  }
  .user-info{
    float:right;
    font-size:16px;
  }
  .user-info .el-dropdown-link{
    position:relative;
    display:inline-block;
    cursor:pointer;
    vertical-align:middle;
    padding-left:90px;
    color:#fff;
  }
  .user-logo{
    position:absolute;
    left:0;
    top:10px;
    width:80px;
    height:80px;
  }
  .header-logo{
    margin-top:10px;
  }
</style>