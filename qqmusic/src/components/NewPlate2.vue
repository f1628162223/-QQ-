


<!-- 导航的新碟首发页面  -->


<template>
  <div class="Slideshow">
    <div class="divx">
      <span v-for="(ietm,index) in classify" @click="show5(index)">{{ietm}}</span>
    </div>

    <div class="elr" v-for="(tiem,index) in arrs" v-if="index>=bbb&&index<bbb+2">
  
      <div class="div2" v-for="(data,ins) in tiem ">
        <div class="img">
          <div class="div3">

            <i class="el-icon-caret-right"></i>
          </div>

          <img :src="data.pic" alt="">
          <!-- <img src="../assets/1567138072572.jpg" alt /> -->
        </div>
        <p>{{ data.name }}</p>
        
        <span>{{ data.artist}}</span>
        <br />
        <span>{{ data.releaseDate }}</span>
      </div>
    </div>

    <div class="div5">
      <span @click="Li(i)" v-for="i in 5">{{i}}</span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      bbb:0,
      arrs: [],
      classify: ["内地", "港台", "欧美", "韩国", "日本", "其他"]
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 100);
    this.show5(0);
    this.Li(1);
  },

  methods: {
    show() {
      var tath = this;
      var arr = [];
      tath.aaa.map((item, index) => {
        arr.push(item);
        if ((index + 1) % 10 == 0 || index == tath.aaa.length - 1) {
          tath.arrs.push(arr);
          arr = [];
        }
      });
    },

    show5(val) {
      $(".divx span")
        .eq(val)
        .addClass("span")
        .siblings()
        .removeClass("span");
      this.bbb = val+1 ;
    },
    Li(val) {
      $(".div5 span")
        .eq(val - 1)
        .addClass("v5")
        .siblings()
        .removeClass("v5");
    }
  }
};
</script>


<style scoped>
.Slideshow {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 40px;
  overflow: hidden;
  /* height: 820px; */
  min-width: 1300px;
}

.divx {
  width: 1300px;
  margin: 30px auto;
  text-align: left;
  white-space: nowrap;

  min-width: 1300px;
  position: relative;
}
.divx span {
  margin: 0 30px;
  cursor: pointer;
}
.divx span:hover,
.divx .span {
  color: #31c27c;
}

.divx .div {
  display: inline-block;
  position: relative;
  left: 320px;
  margin: 0;
}

.elr {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
}

.div2 {
  width: 240px;
  height: 308px;
  display: inline-block;
  float: left;
  margin: 0 9px;
  margin-bottom: 45px;
  position: relative;

}

.div2 .img {
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.div2 .img img {
  width: 100%;
    cursor: pointer;
}
.div2 p {
  margin-top: 7px;
  font-size: 15px;
}
.div2 span {
  font-size: 13px;
  color: gray;
}

.div2 p:hover ,.div2 span:nth-of-type(1):hover{
  cursor: pointer;
  color: #31c27c;
}
.img:hover img {
  transform: scale(1.2);
  transition: 0.8s;
  opacity: 0.8;
}

.img:hover .div3 {
  opacity: 1;
  transition: 0.5s;
  transform: scale(2);
  z-index: 2;
}

/* 播放图 */
.div3 {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  line-height: 30px;
  opacity: 0;
  position: absolute;
  left: calc(100% - 56%);
  top: calc(100% - 65%);
  text-align: center;
}
.div3 i {
  color: gray;
  font-size: 20px;
}
.div5 {
  text-align: center;
  margin-top: 50px;
  z-index: 2;
}
.div5 span {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 40px;
  cursor: pointer;
}
.div5 span.v5 {
  color: white;
  background-color: #31c27c;
}
</style>
















