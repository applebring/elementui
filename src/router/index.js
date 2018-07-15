import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/Layout/layout.vue'
import Home from '@/page/Layout/home.vue'

const Chart = resolve => require(['../page/Demo/echart/echart.vue'],resolve);
const VueEchart = resolve => require(['../page/Demo/echart/vueechart.vue'],resolve);
const VueEchartV3 = resolve => require(['../page/Demo/echart/vueechartv3.vue'],resolve);
const Logout = resolve => require(['../page/System/logout.vue'],resolve);
const Transfer = resolve => require(['../page/Demo/transfer.vue'],resolve);
Vue.use(Router)
let routes = [
  {
    path:'/',redirect:'/home',
    meta:{
      isMenu:false
    }
  },
  {
    path:'/',
    component:Layout,
    meta:{
      isMenu:true,
      isParent:false
    },
    children:[
      {
        path:'/home',
        component:Home,
        name:"首页",
        meta:{
          isMenu:true,
          isParent:false,
          icon:'el-icon-custom-chaozhijifen'
        }
      }
    ]
  },
  {
    path:'/',
    component:Layout,
    name:'示例',

    meta:{
      isMenu:true,
      isParent:true,
      icon:'el-icon-custom-liebiao1'
    },
    children:[
      {
        path:'/chart',
        component:Chart,
        name:"图表"
      },
      {
        path:'/transfer',
        component:Transfer,
        name:"自定义穿梭框"
      }
    ]
  },
  {
    path:'/logout',
    component:Logout,
    name:'登录',
    meta:{
      isMenu:false
    }
  }
];
export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
