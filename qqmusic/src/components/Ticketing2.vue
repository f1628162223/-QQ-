


<!-- 票务轮播图  -->


<template>
  <div class="Ticketing">
    <div class="main">
      <div class="box">
        <div class="div" v-for="(item,index) in aaa" :key="index">
          <img :src="item" alt />
        </div>
      </div>
      <span @click="num(1)">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span @click="num(2)">
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      arr: [
        { width: 600, height: 240, top: 32, left: -600, zzIndex: 3, dex: 0 },
        { width: 600, height: 240, top: 32, left: 0, zzIndex: 4, dex: 0.8 },
        { width: 750, height: 300, top: 0, left: 225, zzIndex: 5, dex: 1 },
        { width: 600, height: 240, top: 32, left: 600, zzIndex: 4, dex: 0.8 },
        { width: 600, height: 240, top: 32, left: 1200, zzIndex: 3, dex: 0.8 },
        { width: 600, height: 240, top: 32, left: 1200, zzIndex: 3, dex: 0 }
      ]
    };
  },
  props: ["aaa"],
  methods: {
    show() {
      for (var i = 0; i < this.arr.length; i++) {
        $(".box .div")
          .eq(i)
          .css({
            zIndex: this.arr[i].zzIndex,
            opacity: this.arr[i].dex
          })
          .stop(true, true)
          .animate(this.arr[i], 500);
      }
    },
    num(val) {
      if (val == 1) {
        this.arr.push(this.arr.shift());
        this.show();
      } else {
        this.arr.unshift(this.arr.pop());
        this.show();
      }
    }
  },
  mounted() {
    setTimeout(this.show, 500);
    //  this.show();
  }
};
</script>


<style  scoped>
.Ticketing {
   background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 60px;
  margin-bottom: 50px;;
}
.main {
  /* width: 1900px; */
  /* border: 1px solid black; */
  position: relative;
}
.main:hover span {
  opacity: 1;
  transition: 0.8s;
}
.main span {
  display: inline-block;
  cursor: pointer;
  opacity: 0;
  font-size: 40px;
  position: absolute;
  padding: 28px 18px;
  background: rgba(0, 0, 0, 0.1);
}
.main span:nth-child(2) {
  left: 0px;
  top: calc(100% - 50% - 45px);
}
.main span:nth-child(3) {
  right: 0px;
  top: calc(100% - 50% - 45px);
}
.main .box {
  width: 1200px;
  height: 305px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.box .div {
  position: absolute;
  display: inline-block;
  width: 750px;
  height: 300px;
  opacity: 0;
}
.div img {
  width: 100%;
  height: 100%;
}

/* .box .div:nth-child(1) {
  width: 600px;
  height: 240px;
  left: 0px;
  top: 32px;
  opacity: 1;
}
.box .div:nth-child(2) {
  left: 225px;
  top: 0px;
  opacity: 1;
  z-index: 3;
}
.box .div:nth-child(3) {
  width: 600px;
  height: 240px;
  left: 600px;
  top: 32px;
  opacity: 1;
}

.box .div:nth-child(4) {
  width: 600px;
  height: 240px;
  left: -600px;
  top: 25px;
  opacity: 1;
  z-index: 9;
}
.box .div:nth-child(5) {
  width: 600px;
  height: 240px;
  left: 1200px;
  top: 25px;
  opacity: 1;
}
.box .div:nth-child(6) {
  width: 600px;
  height: 240px;
  left: 1200px;
  top: 25px;
  opacity: 1;
} */
</style>















