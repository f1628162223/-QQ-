





 <!-- 票务 -->
<template>
  <div class="singer">
    <Ticketing2 :aaa="data2" />
    <Ticketing3 @chuanzhi="aa" />
    <Ticketing :aaa="data" v-if="num==0" />
    <Ticketing4 :aaa="data " v-if="num!=0" :bbb="num" />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import Ticketing from "../components/Ticketing"; //票务底部1
import Ticketing2 from "../components/Ticketing2"; //票务轮播
import Ticketing3 from "../components/Ticketing3"; //票务轮播
import Ticketing4 from "../components/Ticketing4"; //票务内容（分类）

import axios from "axios";
export default {
  data() {
    return {
      data: "",
      data2: "",
      num: 0
    };
  },
  components: {
    BottomFooter, //底部导航
    Ticketing,
    Ticketing2,
    Ticketing3,
    Ticketing4
  },
  mounted() {
    axios.get("/static/aaaaa.json").then(val => {
      this.data = val.data.fffff.data;
      this.data2 = val.data.fffff.artistList;
    });
  },
  methods: {
    aa(val) {
      this.num = val;
    }
  }
};
</script>


<style scoped>
.singer {
  min-width: 1300px;
}
</style>
















