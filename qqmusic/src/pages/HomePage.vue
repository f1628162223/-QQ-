


<!-- 首页  -->


<template>
  <div class="home">
    <Slideshow :aaa="data" />
    <Slideshow2 :aaa="data2" />
    <Slideshow3 :aaa="data3" />
    <NewPlate :aaa="data2" />
    <RankingList :aaa="data2" />
    <MvSong :aaa="data2" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import Slideshow from "../components/Slideshow"; //轮播图
import Slideshow2 from "../components/Slideshow2"; //轮播图2
import Slideshow3 from "../components/Slideshow3"; //轮播图3
import NewPlate from "../components/NewPlate"; //新歌排行
import RankingList from "../components/RankingList"; //排行榜
import MvSong from "../components/MvSong"; //MV

import axios from "axios";
export default {
  data() {
    return {
      data: "",
      data2: "",
      data3: ""
    };
  },
  components: {
    BottomFooter, //底部导航
    Slideshow,
    Slideshow2,
    Slideshow3,
    NewPlate,
    RankingList,
    MvSong
  },
  mounted() {
    axios.get("/static/aaaaa.json").then(val => {
      this.data = val.data.result.data;
      this.data2 = val.data.bbbbb.musicList;
      this.data3 = val.data.aaaaa.data;
    });
  }
};
</script>


<style scoped>
</style>
















