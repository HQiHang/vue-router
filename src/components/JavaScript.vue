<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="list-group">
          <router-link :to="{name:'Vuev'}" class="list-group-item">Vue.js</router-link>
          <router-link :to="{name:'Angular'}" class="list-group-item">Angular.js</router-link>
          <router-link :to="{name:'React'}" class="list-group-item">React.js</router-link>
        </ul>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "JavaScript"
    }
</script>

<style scoped>

</style>
