<template>
  <div id="app">
    <h2>1.正常</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <br>
    <br>
    <br>
    <p>
      2.tag可以指定router-link之后渲染成什么组件,比如上面的代码会被渲染成一 个li元素,而不是a标签
    </p>

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>

    <br>
    <br>
    <br>
    <p>
      3.replace: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
    </p>
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>

    <p>
      4.active-class: 当router-link对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置active-class可以修改默认的名称.
    </p>

<!--    <router-link to="/home" tag="button" active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->

    <p>
      5.路由代码跳转
    </p>

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      homeClick(){
        // 通过代码跳转路由
        // push  ->history.pushState
        // replace = >history.replaceState
        // this.$router.push('/home');
        this.$router.replace('/home');
      },
      aboutClick(){
        // this.$router.push('/about');
        this.$router.replace('/about');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /*.router-link-active{*/
  /*  color: red;*/
  /*}*/

  .active{
    color: blue;
  }

</style>
