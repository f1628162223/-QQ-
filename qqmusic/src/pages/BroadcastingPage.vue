






 <!-- 电台 -->
<template>
  <div class="singer">
    <BroadcastingStation :aaa="data" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import axios from "axios";
import BroadcastingStation from "../components/BroadcastingStation";
export default {
  data() {
    return {
      data: ""
    };
  },
  components: {
    BottomFooter, //底部导航
    BroadcastingStation
  },
  mounted() {
    axios.get("/static/aaaaa.json/").then(val => {
      this.data = val.data.ddddd.artistList;
    });
  }
};
</script>


<style scoped>
</style>
















