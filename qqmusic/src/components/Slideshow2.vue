


<!-- 轮播图2  -->


<template>
  <div class="Slideshow">
    <h2>{{headline}}</h2>
    <div class="div2">
      <span class="div">播放全部</span>
      <span v-for="(ietm,index) in classify" @click="show3(index+1)">{{ietm}}</span>
    </div>

    <el-carousel trigger="click" arrow="hover" class="el" :autoplay="false">
      <el-carousel-item class="elr" v-for="(key,ins) in arrs" v-if=" ins>=bbb && ins < bbb+3">
        <div class="div1" v-for="(item,index) in key">
          <div class="img">
            <!-- <img src="../assets/1567138072572.jpg" alt /> -->
                <img :src="item.pic" />

            <div class="div30">
              <i class="el-icon-caret-right"></i>
            </div>
          </div>
 
          <div class="div4">{{ item.name}}</div>
          <p>{{ item.artist}}</p>
          <span>{{ item.songTimeMinutes }}</span>
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
      classify: ["最新", "内地", "港台", "欧美", "韩国", "日本"],
      headline: "新歌首发"
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 1000);
    this.show3(1);
  },

  methods: {
    show() {
      var tath = this;
      var arr = [];
      tath.aaa.map((item, index) => {
        arr.push(item);
        if ((index + 1) % 9 == 0 || index == tath.aaa.length - 1) {
          tath.arrs.push(arr);
          arr = [];
        }
      });
    },

    show3(val) {
      $(".div2 span")
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
  letter-spacing: 10px;
  color: #333333;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  min-width: 1300px;
}
.div2 {
  text-align: center;
  white-space: nowrap;
  margin: 30px 0;
  min-width: 1300px;
  position: relative;
}
.div2 span {
  margin: 0 30px;
  cursor: pointer;
}
.div2 span:hover,
.div2 .span {
  color: #31c27c;
}
.div2 .div {
  padding: 7px 25px;
  border: 1px solid gray;
  cursor: pointer;
  position: relative;
  right: 295px;
  font-size: 14px;
  margin: 0;
}
.div2 .div:hover {
  background-color: #f0f0f0;
  color: black;
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

.div1 .img {
  width: 86px;
  height: 86px;
  left: 0;
  top: -5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.div1 .img img {
  width: 100%;
  height: 100%;
}
.elr .div1:nth-of-type(4),
.div1:nth-of-type(5),
.div1:nth-of-type(6) {
  border-top: 1px solid rgb(214, 212, 212);
  border-bottom: 1px solid rgb(214, 212, 212);
}
.div1 {
  padding: 10px 0;
  width: 30%;
  height: 33.3%;
  margin: 0 20px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  position: relative;
}
.div1 .div4 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  width: 200px;
  position: absolute;
  top: 20px;
  left: 110px;
}
.div1 p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
  font-size: 13px;
  position: absolute;
  top: 45px;
  left: 110px;
  color: gray;
}
.div1 p:hover,
.div1 div:hover {
  color: #31c27c;
  cursor: pointer;
}

.div1 span {
  float: right;
  color: gray;
  font-size: 13px;
  margin-top: 27px;
  margin-right: 30px;
}

.div1 .img:hover img {
  transform: scale(1.3);
  transition: 0.8s;
  opacity: 0.8;
}
.div1 .img:hover .div30 {
  transform: scale(1.3);
  transition: 0.5s linear;
  z-index: 2;
  opacity: 1;
}

/* 播放图 */
.div30 {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  left: 28px;
  top: 28px;
  text-align: center;
}
.div30 i {
  color: gray;
  font-size: 20px;
  position: relative;
  top: 5px;
}
</style>
















