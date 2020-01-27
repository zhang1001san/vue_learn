<template>
  <div >
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn";

  export default {
    name: "App",
    data() {
      return {
        message: 'hello webpack app.vue'
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    },
    components:{
      Cpn
    }
  }
</script>

<style scoped>
  .title{
    color: forestgreen;
  }
</style>