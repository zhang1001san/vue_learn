<template>
  <div>
    <h2>Vuex</h2>
    <p>计数器{{$store.state.counter}}</p>
    <p>乘2:{{$store.getters.doubleCounter}}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
