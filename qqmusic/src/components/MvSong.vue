


<!-- MV  -->


<template>
  <div class="Slideshow MvSong">
    <h2>{{headline}}</h2>
    <div class="divs">
      <span v-for="(ietm,index) in classify" @click="show2(index)">{{ietm}}</span>
    </div>

    <el-carousel trigger="click" arrow="hover" class="el" :autoplay="false">
      <el-carousel-item class="elr" v-for="(k,i) in arrs" v-if="i>=bbb&&i<bbb+3">
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
      </el-carousel-item>
    </el-carousel>
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
      headline: "MV"
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
        if ((index + 1) % 10 == 0 || index == tath.aaa.length - 1) {
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
  letter-spacing: 10px;
  color: #333333;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  min-width: 1300px;
}
.divs {
  text-align: center;
  white-space: nowrap;
  margin: 30px 0;
  min-width: 1300px;
  position: relative;
}
.divs span {
  margin: 0 30px;
  cursor: pointer;
}
.divs span:hover,
.divs .span {
  color: #31c27c;
}

.el {
  width: 100%;
  height: 520px;
  min-width: 1300px;
}
.elr {
  width: 1300px;
  height: 520px;
  margin: 0 auto;
  left: calc(100% - 50% - 650px);
  text-align: center;
}

.div1 {
  display: inline-block;
  width: 18%;
  height: 220px;
  margin: 0 12px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 12px;
}

.div1 .span {
  cursor: pointer;
  font-size: 13px;
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
  height: 140px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
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
</style>
















