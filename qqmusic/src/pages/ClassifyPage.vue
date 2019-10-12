






 <!-- 分类 -->
<template>
  <div class="singer">
    <ClassifySong :aaa="datas"/>
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import ClassifySong from "../components/ClassifySong"; //底部导航

import axios from "axios"
export default {
  data() {
    return {
      datas:''
    };
  },
  components: {
    BottomFooter, //底部导航
    ClassifySong
  },
  mounted(){
    axios.get('/static/aaaaa.json').then((val) => {

      this.datas = val.data.bbbbb.musicList
    })
  }
};
</script>


<style scoped>
</style>
















