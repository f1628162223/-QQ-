






 <!--排行榜 -->
<template>
  <div class="singer">
    <RankingList2 :aaa="data2"/>
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import RankingList2 from "../components/RankingList2"; //所有内容


import axios from "axios";
export default {
  data() {
    return {
      data2:''
    };
  },
  components: {
    BottomFooter, //底部导航
    RankingList2
  },
  mounted() {
    axios.get("/static/aaaaa.json").then(val => {
      this.data2 = val.data.bbbbb.musicList;

    });
  }

};
</script>


<style scoped>
</style>
















