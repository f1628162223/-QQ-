


<!-- 轮播图3  -->


<template>
  <div class="Slideshow">
    <h2>{{headline}}</h2>

    <div class="div">
      <span v-for="(ietm,index) in classify" @click="show2(index)" :key="index">{{ietm}}</span>
    </div>

    <el-carousel trigger="click" arrow="hover" class="el" :autoplay="false">
      <el-carousel-item class="elr" v-for="(key,ins) in arrs" v-if=" ins>=bbb && ins < bbb+3  " :key="ins">
        <div class="div1" v-for="(item,index) in key" :key="index">
          <div class="img">
            <img :src="item.pic"/>
            <!-- <img src="../assets/1557311466098_.png" alt /> -->
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      bbb: 3,
      arrs: [],
      classify: [],
      headline: "精彩推荐"
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 1000);
    this.show2(0);
  },

  methods: {
    show() {
      var tath = this;
      var arr = [];
      tath.aaa.map((item, index) => {
        arr.push(item);
        if ((index + 1) % 2 == 0 || index == tath.aaa.length - 1) {
          tath.arrs.push(arr);
          arr = [];
        }
      });
    },

    show2(val) {
      $(".div span")
        .eq(val)
        .addClass("span")
        .siblings()
        .removeClass("span");

      this.bbb = val * 3;
    }
  }
};
</script>


<style scoped>

.Slideshow {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 40px;
  padding-bottom: 20px;
    min-width: 1300px;
}
h2 {
  min-width: 1300px;
  letter-spacing: 10px;
  color: #333333;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
}
.div {
  text-align: center;
  white-space: nowrap;
  margin: 30px 0;
  min-width: 1300px;
}
.div span {
  margin: 0 30px;
  cursor: pointer;
}
.div span:hover,
.div .span {
  color: #31c27c;
}

.el {
  width: 100%;
  height: 350px;
  min-width: 1300px;
  height: 280px;
  overflow: hidden;


}
.elr {
  width: 1300px;
  margin: 0 auto;
  left: calc(100% - 50% - 650px);
  text-align: center;
}
 .div1 .img {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 15px;
}
.div1 .img img {
  width: 100%;
  height: 100%;
}
.div1 {
  height: 75%;
  width: 45%;
  display: inline-block;
  text-align: left;
  margin: 0 20px;
  vertical-align: top;
  position: relative;
}
.div1 .div2 {
  width: 224px;
  font-size: 15px;
  margin-top: 7px;
  margin-bottom: 2px;
}





</style>
















