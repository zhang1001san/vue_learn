<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户1</router-link>
    <router-link :to="user">用户2</router-link>

<!--    <router-link to="/profile">profile</router-link>-->
    <router-link :to="{path:'/profile',query:{name:'zhangsan',age:18,height:23.2}}">profile</router-link>

    <button @click="userClick"> 用户3按钮</button>
    <button @click="profileClick">profile按钮</button>

    <!--所有路径匹配到的视图组件都会被缓存! -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'zhangsan'
    }
  },
  computed:{
    user(){
      console.log('hah');
      return '/user/'+this.userId;
    }
  },
  methods:{
    userClick(){
     this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'李四',
          age:22,
          height:34
        }
      });
    }


  }
}
</script>

<style>

.router-link-active{
  color: red;
}
</style>
