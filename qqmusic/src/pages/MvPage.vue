





 <!-- MV -->
<template>
  <div class="singer">
    <MvSong2 :aaa="data" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import MvSong2 from "../components/MvSong2"; //mv页面

import axios from "axios";
export default {
  data() {
    return {
      data: ""
    };
  },
  components: {
    BottomFooter, //底部导航
    MvSong2
  },
  mounted() {
    axios.get("/static/aaaaa.json").then(val => {
      this.data = val.data.bbbbb.musicList;
    });
  }
};
</script>


<style scoped>



</style>
















