<template>
  <div>
    <h2>cpn组件标题</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data(){
      return{
        message:'hello vue 组件'
      }
    }
  }
</script>

<style scoped>

</style>