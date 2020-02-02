import {INCREMENT} from "./mutations-types";

export default {
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
}
