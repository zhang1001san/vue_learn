import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex);

const moduleA={
  state:{
    person:{
      name:'哈哈',
      age:18
    }
  },
  mutations:{
    updateName(state,payload){
      state.person.name=payload.name;
    }
  },
  actions:{
    actionUpdateName(context,payload){
      console.log(context);
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateName',payload);
          resolve('模块A的回调');
        },1000)
      });
    }
  },
  getters:{
    doubleAge(state){
      return state.person.age*2;
    },
    fourAge(state,getters){
      return getters.doubleAge*2;
    },
    /**
     * 获取根的state
     * @param state
     * @param getters
     * @param rootState
     * @returns {*}
     */
    infoMessage(state,getters,rootState){
      return rootState.info;
    }
  },
  modules:{

  }
}

// 2.创建对象
const store = new Vuex.Store({
  state:{
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
  },
  mutations:{
    // increment(state){
    //   state.counter++;
    // },
    // 方法名用常量
    [INCREMENT](state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    incrementCount(state,count){
      state.counter+=count;
    },
    incrementCountObject(state,payload){
      state.counter+=payload.count;
    },
    addStudent(state,student){
      state.students.push(student);
    },
    updateInfo(state){
      // 3.同步操作响应式
      state.info.name='嘿嘿';

      // 异步devtools没有监听改变
      // setTimeout(()=>{
      //   state.info.name='嘿嘿';
      // });

      // 1.新属性，不是响应式
      // state.info['address']='北京';

      // 响应式
      // Vue.set(state.info,'address','北京');

      //2.删除属性。非响应式
      // delete state.info.age;

      //删除属性。响应式
      // Vue.delete(state.info,'age');
    }
  },
  actions:{
    /**
     * 修改info.可异步
     * @param context 上下文.可理解为store
     */
    actionUpdateInfo(context){
      // 异步修改
      setTimeout(()=>{
        // 类似 this.$store.commit('decrement');
        context.commit('updateInfo');
      },1000)
    },
    /**
     * 带参数异步
     * @param context
     * @param payload
     */
    actionUpdateInfoParam(context,payload){
      console.log(payload);
      // setTimeout(()=>{
      //   context.commit('updateInfo');
      //   // 执行回调函数
      //   payload.success();
      // },1000)

      // 用promise回调
     return  new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo');

          // 1.成功回调
          resolve('更新成功');
        },1000)
      });
    }
  },
  getters:{
    doubleCounter(state){
      return state.counter*2;
    },
    more20Student(state){
      return state.students.filter(stu=>stu.age>20);
    },
    more20StudentLength(state,getters){
      return getters.more20Student.length;
    },
    moreAgeStudent(state){
      // return function (age) {
      //   return state.students.filter(stu=>stu.age>age);
      // }
      return (age)=>{
        return state.students.filter(stu=>stu.age>age);
      }
    }
  },
  modules:{
    moduleA
  }
});

// 3.导出store对象
export default store;
