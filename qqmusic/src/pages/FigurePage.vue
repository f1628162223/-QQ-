






 <!-- 数字专辑 -->
<template>
  <div class="singer">
    <FigureSpecial :aaa="data" />
    <FigureSpecial2 :aaa="data2" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import FigureSpecial from "../components/FigureSpecial"; //轮播图
import FigureSpecial2 from "../components/FigureSpecial2"; //轮播图

import axios from "axios";

export default {
  data() {
    return {
      data: "",
      data2: ""
    };
  },
  components: {
    BottomFooter, //底部导航
    FigureSpecial, //轮播图
    FigureSpecial2 //内容
  },
  mounted() {
    axios.get("/static/aaaaa.json").then(val => {
      this.data = val.data.eeeee.artistList;
      this.data2 = val.data.eeeee.datas;
    });
  }
};
</script>


<style scoped>
.singer {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  width: 100vw;
  min-width: 1300px;
  overflow: hidden;
}
</style>
















