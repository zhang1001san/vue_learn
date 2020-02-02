<template>
  <div id="app">
    {{result}}
  </div>
</template>

<script>
  import Axios from 'axios';

  export default {
    name: 'App',
    data(){
      return{
        result:{}
      }
    },
    created() {
      Axios({
        url:'http://123.207.32.32:8000/home/multidata',
        method:'get'
      }).then(res=>{
        this.result=res;
      })
    }
  }
</script>

<style>
</style>
