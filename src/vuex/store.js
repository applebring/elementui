import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import router from '../router';
Vue.use(Vuex);
const state={
  isCollapse:false,
  login:false
}
const mutations = {
  toggleCollapse(state){
    state.isCollapse=!state.isCollapse;
  },
  logout(state){
    state.login=false;
    router.push('/logout');
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
});


