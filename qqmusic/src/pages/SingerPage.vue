






 <!-- 歌手 -->
<template>
  <div class="singer">
    <TabControl :aaa="data" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import TabControl from "../components/TabControl"; //歌手信息
import axios from "axios";
export default {
  data() {
    return {
      data: ""
    };
  },
  components: {
    BottomFooter, //底部导航
    TabControl //歌手信息
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      axios.get("/static/aaaaa.json").then(val => {
        this.data = val.data.ccccc.data.artistList;
      });
    }
  }
};
</script>


<style scoped>
</style>
















