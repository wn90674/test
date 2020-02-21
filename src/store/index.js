import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
     percent: 0, // 加载进度
   },
   mutations: {
     /**
      * 修改页面加载进度
      * @param {number} n 加载进度
      */
     SET_PERCENT(state, n) {
       state.percent = n;
     }
   }
});