<template>
  <el-container>
    <el-header height="100px">
      <head-top></head-top>
    </el-header>
    <el-container class="sidebar-content">
      <el-aside :width="isCollapse?'64px':'230px'">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="current-title">
          <template v-for="item in $route.matched">
            <el-breadcrumb-item v-if="item.name"><i v-if="item.meta.icon"  :class="item.meta.icon"></i>{{item.name}}</el-breadcrumb-item>
          </template>
      </el-breadcrumb>
        <div class="current-page">
          <transition name="el-fade-in" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import headTop from "./header.vue";
import sideBar from "./sidebar.vue";
export default {
    data() {
        return {
            title: "首页"
        };
    },
    components: { headTop, sideBar },
    mounted() {
        //给左边sidebar设置高度
        document.getElementsByClassName("sidebar-content")[0].style.height =
            window.innerHeight - 100 + "px";

       console.log(this.$route);
    },
    computed: {
        isCollapse() {
            return this.$store.getters.getIsCollapse;
        }
    }
};
</script>
<style lang="less" scoped>
.el-header {
    background: url("../../assets/images/top02.png") no-repeat;
}

.el-aside {
    background-color: #2b82c2;
    min-height: 100%;
    transition: width linear 0.3s;
}

.el-main {
    background-color: #f0f3fa;
    box-sizing: border-box;
    padding: 0 !important;
}

.current-title {
    line-height: 30px;
    font-size: 14px;
    padding-left:10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    color: #2b82c2;
    & > i {
        margin: 0 10px;
    }
    & > .title {
        color: #666;
    }
}
.current-page {
    padding: 10px;
}
</style>