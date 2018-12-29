<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:void(0);">菜鸟教程</a>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link :to="{name:'Html'}">HTML5</router-link></li>
              <li><router-link :to="{name:'Css'}">CSS3</router-link></li>
              <li><router-link :to="{name:'JavaScript'}">JavaScript</router-link></li>
              <li><router-link :to="{name:'JQuery'}">jQuery</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link :to="{name:'Sass'}">Sass</router-link></li>
              <li><router-link :to="{name:'Less'}">Less</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
