<template>
  <div>
    <h2>HOME</h2>
    <p>
      home首页,嘿嘿嘿嘿
    </p>
    <router-link to="/home/news">首页news</router-link>
    <router-link to="/home/message">首页message</router-link>


    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        path:'/home/news'
      }
    },
    created() {
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    // activated(),deactivated()这两个函数，只有该组件被保持了状态使用了keep-alive时，
    activated() {
      this.$router.push(this.path);
      // console.log('activated');
    },
    deactivated() {
      // console.log('deactivated');
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      // console.log(this.$route.path);
      this.path=this.$route.path;
      // this.path=from.path;
      next();
    }

  }
</script>

<style scoped>

</style>
