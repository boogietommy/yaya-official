<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$navbar-item-hover-color: $primary;
$navbar-item-hover-background-color: $white;

$footer-background-color: $white-ter;
$footer-padding: 3rem 1.5rem 1rem;

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

@import "~bulma";
</style>
