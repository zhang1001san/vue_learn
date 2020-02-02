import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./module/moduleA";

// 1.安装插件
Vue.use(Vuex);

const state={
  counter:100,
  students:[
    {id:1,name:'zhangsan',age:21},
    {id:2,name:'lis',age:19},
    {id:3,name:'wangwu',age:23},
    {id:4,name:'zhaoliu',age:30},
    {id:5,name:'zhouqi',age:18}
  ],
  info:{
    name:'呵呵',
    age:19,
    height:1.9
  }
}

// 2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    moduleA
  }
});

// 3.导出store对象
export default store;
