<template>
    <div>
        <div class="title-container" @click="toggleSidebar">
            <div class="title" v-show="!isCollapse">
                导航菜单
                <span class="sidebar-toggle">
          <i class="el-icon-custom-liebiao2" :label="true"></i>
        </span>
            </div>
            <div v-show="isCollapse"><img src="../../assets/images/logoleft.png"></div>
        </div>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#2B82C2"
            text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" unique-opened router>
            <template v-for="(item,index) in menus">
                <template v-if="item.meta.isMenu">
                    <el-submenu :index="index+''" v-if="item.meta.isParent">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{item.name }}</span>
                        </template>
                        <template v-for="child in item.children">
                            <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="item.children[0].path" v-else><i :class="item.children[0].meta.icon"></i><span slot="title">{{item.children[0].name}}</span></el-menu-item>
                </template>
            </template>
            
        </el-menu>
        <!-- <div>{{menus}}</div> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        computed: {
            isCollapse() {
                return this.$store.getters.getIsCollapse;
            },
            menus(){
                console.log("$route",this.$route.path);
                return this.$router.options.routes;
                
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toggleSidebar() {
                this.$store.commit("toggleCollapse");
            }
        }
    };

</script>
<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 230px;
        min-height: 400px;
    }
    
    .el-menu {
        border-right: none;
    }
    
    .el-menu-item i,
    .el-submenu__title i {
        color: #fff;
    }
    
    .el-menu-item.is-active i{
        color: rgb(255, 208, 75)
    }
    
    .item-group-bg {
        background-color: #8aa4af;
    }
    
    .title-container {
        background-color: #2d6894;
        font-size: 14px;
        vertical-align: middle;
        color: #fff;
        &>.title {
            line-height: 30px;
            padding-left: 30px;
            position: relative;
        }
    }
    
    .title {
        &>span {
            position: absolute;
            right: 0;
            display: inline-block;
            width: 30px;
            height: 30px;
            text-align: center;
        }
        &>span:hover {
            background-color: #2b82c2;
        }
    }
</style>