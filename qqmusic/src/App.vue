
    <!-- 全局样式 -->

<template>
  <div id="app">
    <TopNav></TopNav>

    <router-view />
  </div>
</template>

<script>
import TopNav from "./components/TopNav"; //顶部导航




export default {
  data() {
    return {};
  },
  components: {
    TopNav,
  }
};
</script>

<style>
#app {
}
</style>
