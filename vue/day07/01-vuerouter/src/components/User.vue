<template>
  <div>
    <h2>用户界面</h2>
    <p>
      用户详情，呵呵呵呵
    </p>
    <h2>用户id:{{userId}}</h2>
    <h2>{{$route.params.user_id}}</h2>

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        return this.$route.params.user_id;
      }
    },
    created() {
      console.log('User created');
    },
    destroyed() {
      console.log('User destroyed');
    },
    methods:{
      btnClick(){
        console.log('$router');
        console.log(this.$router);

        console.log('$route...........');
        console.log(this.$route);

        this.test();
        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>
