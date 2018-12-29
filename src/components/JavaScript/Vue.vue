<template>
  <div>
    <h1>欢迎学习Vue.js</h1>
    <router-link :to="{name:'VueRouterv'}">VueRouter</router-link>
    <router-link :to="{name:'Vuexv'}">Vuex</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Vue"
    }
</script>

<style scoped>

</style>
