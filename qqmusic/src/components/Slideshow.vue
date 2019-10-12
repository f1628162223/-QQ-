


<!-- 轮播图  -->


<template>
  <div class="Slideshow">
    <h2>{{headline}}</h2>
    <div class="div">
      <span v-for="(ietm,index) in classify" @click="show2(index)">{{ietm}}</span>
    </div>

    <el-carousel trigger="click" arrow="hover" class="el" :autoplay="false">
      <el-carousel-item class="elr" v-for="(key,ins) in arrs" v-if=" ins>=bbb && ins < bbb+3  ">
        <div class="div1" v-for="(item,index) in key">
          <div class="img">
            <img :src="item.albumLogo" />
            <!-- <img src="../assets/1567138072572.jpg" alt /> -->

            <div class="div3">
              <i class="el-icon-caret-right"></i>
            </div>
            
          </div>

          <div class="div2">{{ item.singerVOs[0].artistName }}</div>
          <span>播放量 ：{{ (item.length)/10000 }} 万</span>
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
      classify: [
        "为你推荐",
        "经典国语",
        "经典",
        "网路歌曲",
        "官方歌单",
        "情歌"
      ],
      headline: "歌单推荐"
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
        if ((index + 1) % 5 == 0 || index == tath.aaa.length - 1) {
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
}
.elr {
  width: 1300px;
  margin: 0 auto;
  left: calc(100% - 50% - 650px);
  text-align: center;
}
.elr .img {
  width: 224px;
  height: 224px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 15px;
}
.div1 .img img {
  width: 100%;
}
.div1 {
  height: 300px;
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

.div1 span {
  width: 224px;
  color: gray;
  font-size: 13px;
}

.div1 .img:hover img {
  transform: scale(1.3);
  transition: 0.8s;
  opacity: 0.8;
}
.div1 .img:hover .div3 {
  transform: scale(2.2);
  transition: 0.5s;
  opacity: 1;
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
  left: 98px;
  top: 98px;
  text-align: center;
}
.div3 i {
  color: gray;
  font-size: 20px;
}
</style>
















