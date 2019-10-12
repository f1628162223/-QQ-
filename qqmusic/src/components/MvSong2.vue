


<!-- 导航MV页面  -->


<template>
  <div class="Slideshow MvSong">
    <div class="box">
      <div v-for="(k,i) in ars" class="nav">
        <span class="span p">{{k.name}}</span>
        <span @click="shos( i, ins,key)" class="p" v-for="(key,ins) in k.arr">{{key}}</span>
      </div>
    </div>

    <div class="h2">
      <h2>{{ headline }}</h2>

      <p @click="p(0)">推荐</p>
      <p @click="p(1)">最新</p>
    </div>

    <div class="div" v-for=" (k,i) in arrs " v-if="i==bbb">
      <div class="div1" v-for=" (key,ins) in k">
  
        <div class="img">
          <!-- <img src="../assets/1567138072572.jpg" alt /> -->
            <img :src="key.pic" alt />
          <div class="div30">
            <i class="el-icon-caret-right"></i>
          </div>
        </div>
        <span class="span">{{key.name}}</span>
        <p>{{ key.artist }}</p>
        <i class="el-icon-video-camera"></i>
        <span class="span1" v-if="key.albumid<10000">{{key.albumid}}千</span>
        <span class="span1" v-if="key.albumid>=10000">{{ (key.albumid/10000).toFixed(1) }} 万</span>
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
      bbb: 0,
      arrs: [],
      classify: ["精选", "内地", "韩国", "港台", "欧美", "日本"],
      headline: "全部MV",
      ars: [
        {
          name: "区域",
          arr: ["全部", "内地", "港台", "欧美", "日本", "韩国"]
        },
        {
          name: "版本",
          arr: ["全部", "MV", "现场", "翻唱", "舞蹈", "影视", "综艺", "儿童"]
        }
      ]
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 1000);
    this.show2(0);
    this.shos(0, 0);
    this.shos(1, 0);
    this.p(0);
    this.Li(1);
  },

  methods: {
    Li(val) {
      $(".div5 span")
        .eq(val - 1)
        .addClass("v5")
        .siblings()
        .removeClass("v5");
    },
    p(val) {
      $(".h2 p")
        .eq(val)
        .addClass("p")
        .siblings()
        .removeClass("p");
      this.bbb = val;
    },
    show() {
      var tath = this;
      var arr = [];
      tath.aaa.map((item, index) => {
        arr.push(item);
        if ((index + 1) % 20 == 0 || index == tath.aaa.length - 1) {
          tath.arrs.push(arr);
          arr = [];
        }
      });
    },
    show2(val) {
      $(".divs span")
        .eq(val)
        .addClass("span")
        .siblings()
        .removeClass("span");

      this.bbb = val + 22;
    },
    shos(i, ins, key) {
      var obj = $(".nav")
        .eq(i)
        .find($("span"));

      $(obj[ins + 1])
        .addClass("spanx ")
        .removeClass("p")
        .siblings()
        .removeClass("spanx ")
        .addClass("p");

      if (ins > 0) {
        var msg = $(".spanx")
          .eq(0)
          .html();
        var msg2 = $(".spanx")
          .eq(1)
          .html();
      } else {
        var msg = "";
        var msg2 = "全部MV";
      }

      this.headline = msg + "  " + msg2;
      this.bbb = ins * (i + 1);
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

.box {
  width: 1280px;
  margin: 0 auto;
}

.nav {
  margin-bottom: 20px;
}
.nav span {
  padding: 2px 4px;
  cursor: pointer;
  margin-right: 30px;
}
.nav .span {
  margin-right: 30px;
}
.p:hover {
  color: #31c27c;
  /* background-color: #31c27c */
}
.spanx {
  color: white;
  background-color: #31c27c;
}

.Slideshow .h2 {
  overflow: hidden;
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.Slideshow .h2 h2 {
  float: left;
  font-weight: 100;
  font-size: 24px;
}
.Slideshow .h2 p {
  font-size: 15px;
  float: right;
  padding: 8px 20px;
  border: 1px solid rgb(218, 214, 214);
  cursor: pointer;
}
.h2 p:hover {
  color: #31c27c;
}
.Slideshow .h2 .p {
  color: white;
  background-color: #31c27c;
}

.div {
  width: 1300px;
  margin: 0 auto;
  /* border: 1px solid red; */
}

.div1 {
  display: inline-block;
  width: 23%;
  margin: 0 12px;
  margin-bottom: 35px;
  text-align: left;
  font-size: 14px;
}

.div1 .span {
  cursor: pointer;
  font-size: 15px;
}
.div1 p {
  color: gray;
  margin: 3px 0;
  cursor: pointer;
}
.div1 .span:hover,
.div1 p:hover {
  color: #31c27c;
}
.div1 i {
  font-size: 20px;
  color: rgb(194, 188, 188);
}
.div1 .span1 {
  color: gray;
  position: relative;
  top: -3px;
  left: 2px;
}

.div1 .img {
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  right: 5px;
}
.div1 .img img {
  width: 100%;
  height: 100%;
}
.div1 .img:hover .div30 {
  opacity: 1;
  transition: 0.5s;
  transform: scale(2);
}
.div1 .img:hover img {
  transition: 1s;
  transform: scale(1.1);
}
/* 播放图 */
.div30 {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  left: calc(100% - 50% - 15px);
  top: calc(100% - 50% - 15px);
  text-align: center;
}
.div30 i {
  color: gray;
  font-size: 20px;
  position: relative;
  top: 5px;
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
















