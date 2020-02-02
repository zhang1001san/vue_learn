<template>
  <div id="app">
    <h2>module的使用</h2>
    <p>obj:{{$store.state.moduleA.person}}</p>
    <p>年龄*2:{{$store.getters.doubleAge}}</p>
    <p>年龄*4:{{$store.getters.fourAge}}</p>
    <p>rootState:{{$store.getters.infoMessage}}</p>
    <button @click="updateName">修改name</button>

    <br>
    <br>
    <br>
    <h2>修改inof</h2>
    <p>info:{{$store.state.info}}</p>
    <button @click="updateInfo">修改info</button>

    <br>
    <h2>App页面</h2>
    <h2>app计数器:{{$store.state.counter}}</h2>
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->

    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent()">添加学生</button>


    <h2>2.getters界面</h2>
    <h2>{{$store.getters.doubleCounter}}</h2>
    <p>年龄大于20的student:{{$store.getters.more20Student}}</p>
    <p>年龄大于20的student的数量:{{$store.getters.more20StudentLength}}</p>

    <h2>传参</h2>
    <p>年龄大于25的student:{{$store.getters.moreAgeStudent(25)}}</p>

    <h2>3.HelloVuex界面</h2>
    <hello-vuex></hello-vuex>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./store/mutations-types";

  export default {
    name: 'App',
    components:{
      HelloVuex
    },
    methods:{
      add(){
       // this.$store.commit('increment');
        // 用常量
        this.$store.commit(INCREMENT);
      },
      sub(){
        this.$store.commit('decrement');
      },
      addCount(count){
        // 1.普通的提交风格
        // this.$store.commit('incrementCount',count);

        // 2.特殊的提交风格
        this.$store.commit({
          type:'incrementCountObject',// 方法名
          count
        })
      },
      addStudent(){
        const stu={id:111,name:'魔法师',age:30};
        this.$store.commit('addStudent',stu);
      },
      updateInfo(){
        // mutations
        // this.$store.commit('updateInfo');

        // actions 可异步
        // 1.this.$store.dispatch('actionUpdateInfo');
        const person={
          name:'hehh',
          age:34
        }
        // 2.传参数
        // this.$store.dispatch({
        //   type:'actionUpdateInfoParam',
        //   obj,
        //   success:function () {
        //     // 回调函数。执行成功调用
        //     console.log('更新成功');
        //   }
        // });

        // 3.回调。用promise
        this.$store.dispatch('actionUpdateInfoParam',{
          person
        }).then((data)=>{
          console.log(data);
        })
      },
      updateName(){
        const payload={
          name:'模块a-name'
        }
        // this.$store.commit('updateName',payload);
        this.$store.dispatch('actionUpdateName',payload).then((data)=>{
          console.log(data);
        });
      }
    }
  }
</script>

<style>
</style>
