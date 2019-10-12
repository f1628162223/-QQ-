


<!-- 我的音乐  -->


<template>
  <div class="home">
    <div class="top">
      <div class="div">
        <h1>私人音乐空间,听我想听的歌</h1>
        <p>登录管理我的音乐,多终端同步</p>
        <button>立即登录</button>
      </div>
    </div>
    <BottomFooter class="BottomFooter" />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
export default {
  data() {
    return {};
  },
  components: {
    BottomFooter //底部导航
  },
  mounted() {}
};
</script>


<style scoped>
.top {
  background: url("https://y.gtimg.cn/mediastyle/yqq/img/bg_profile_unlogin.jpg?max_age=2592000&v=13351eccb28020677a18a0f57349e5e6")
    no-repeat;
  background-position: center;
  height: 920px;
  position: relative;
  border: 1px solid transparent;
}
.BottomFooter {
  margin-top: 0 !important;
}
.div {
  width: 800px;
  margin: 200px auto;
  color: white;
  text-align: center;
  animation: name 2.5s linear;
}
.div h1 {
  font-size: 60px;
  font-weight: 100;
}
.div p {
  font-size: 27px;
  font-weight: 100;
  margin: 18px 0;
}
.div button {
  border: none;
  background-color: rgb(49, 195, 124);
  color: white;
  padding: 10px 35px;
  font-size: 20px;
  cursor: pointer;
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
















