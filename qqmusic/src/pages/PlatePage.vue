



 <!-- 新碟 -->
<template>
  <div class="plate">
    <NewPlate2 :aaa="data" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import NewPlate2 from "../components/NewPlate2"; //新歌排行
import axios from "axios";
export default {
  data() {
    return {
      data:'',
    };
  },
  components: {
    BottomFooter, //底部导航
    NewPlate2
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
















