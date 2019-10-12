


<!-- 客户端  -->


<template>
  <div class="home">
    <div class="top">
      <li class="mod_banner_list__item mod_banner_pc">
        <h2 class="mod_banner_pc__tit"></h2>
        <span class="btn_banner js_stat_down">立即下载</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>


<style scoped>
.top {
  display: block;
  background: url("https://imgcache.gtimg.cn/mediastyle/app/download/img/index/banner_pc.jpg?max_age=2592000&v=180d42ed7af7320f0f71b0d4bd1648b3")
    50% no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
.mod_banner_list__item {
  animation: name 2.5s linear;
  width: 100%;
  height: 100%;
}
.mod_banner_pc__tit {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -294px;
  margin-top: -195px;
  width: 587px;
  height: 145px;
  text-indent: -99em;
  overflow: hidden;
  background-image: url("https://imgcache.gtimg.cn/mediastyle/app/download/sprite/img_index_6bc275f9.png?max_age=2592000");
  background-position: 0 -312px;
  z-index: 3;
}

.btn_banner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 12px;
  margin-left: -2px;
  width: 293px;
  height: 69px;
  text-indent: -99em;
  overflow: hidden;
  z-index: 9;
  background-image: url("https://imgcache.gtimg.cn/mediastyle/app/download/sprite/img_index_6bc275f9.png?max_age=2592000");
  background-position: -416px -859px;
  margin-left: -146px;
}

@keyframes name {
  0% {
    opacity: 0;
  }
  30% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
















