// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import store from 'vuex/store.js';
import App from './App';
import router from './router';
import '@/assets/css/reset.css';    //引入初始化css
import '@/assets/css/app.css';// 引入自定义样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont.css';    //引入图标
import NProgress from 'nprogress';//Progress进度条
import '@/assets/lib/nprogress/nprogress.css';// 不从moduel引入是为方便修改样式 

Vue.config.productionTip = false
Vue.use(ElementUI);
import store from '@/vuex/store';
router.beforeEach((to,from,next)=>{
  NProgress.start();//开启NPROGRESS
  if(!store.state.login && to.path!='/login'){
    next();
  }
});
router.afterEach(()=>{
  NProgress.done();//结束NProgress
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');