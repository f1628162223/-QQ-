


<!-- 导航分类歌单页面  -->


<template>
  <div class="Slideshow">
    <div class="box">
      <div class="bak" v-for="(key,ins) in ar">
        <p>{{key.name}}</p>
        <div class="spanx" v-for="(a,i) in key.arr">
          <span @click="Divclick(ins,i,a)">{{a}}</span>
        </div>
      </div>
    </div>

    <div class="h2">
      <h2>{{ msg }}</h2>
      <p @click="pss(0,20)">推荐</p>
      <p @click="pss(1,21)">最新</p>
    </div>
    <div class="elr" v-for="(tiem,index) in arrs" v-if="index>=ooo&&index<ooo+2">
      <div class="div2" v-for="(data,ins) in tiem ">
        <div class="img">
          <div class="div3">
            <i class="el-icon-caret-right"></i>
          </div>
          <img :src="data.pic" alt />
          <!-- <img src="../assets/1567138072572.jpg" alt /> -->
        </div>
        <p>{{ data.name }}</p>
        <span>{{ data.artist}}</span>
        <br />
        <span>{{ (data.rid/10000).toFixed(1)}}w</span>
      </div>
    </div>


  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      ooo: 0,
      ccc : '',
      arrs: [],
      msg: "全部歌单",
      ar: [
        {
          name: "语种",
          arr: [
            "国语",
            "英语",
            "韩语",
            "奥语",
            "日语",
            "小语种",
            "闸南语",
            "法语",
            "拉丁"
          ]
        },
        {
          name: "派流",
          arr: [
            "流行",
            "轻音乐",
            "摇滚",
            "民谣",
            "R&B",
            "嘻哈",
            "电子",
            "古典",
            "乡村"
          ]
        },
        {
          name: "主题",
          arr: [
            "ACG",
            "经典",
            "网络歌曲",
            "影视",
            "KTV热歌",
            "二歌",
            "中国风",
            "古风",
            "情歌"
          ]
        },
        {
          name: "心情",
          arr: [
            "伤感",
            "安静",
            "快乐",
            "治愈",
            "励志",
            "甜蜜",
            "寂寞",
            "宣泄",
            "思念"
          ]
        },
        {
          name: "场景",
          arr: [
            "睡前",
            "夜店",
            "学习",
            "运动",
            "开车",
            "约会",
            "工资",
            "旅行",
            "校园"
          ]
        }
      ]
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 500);
    this.pss(0,0);
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
    pss(val, ins) {
      $(".h2 p")
        .eq(val)
        .addClass("p")
        .siblings()
        .removeClass("p");
      this.ooo = ins;
    },
    Divclick(ins, i, name) {
      var obj = $(".bak")
        .eq(ins)
        .find($("div"));
      $(obj)
        .eq(i)
        .addClass("spanvP")
        .siblings()
        .removeClass("spanvP");
      $(".bak")
        .eq(ins)
        .siblings()
        .children()
        .removeClass("spanvP");
      this.msg = name;
      this.ooo = i;
    }
  }
};
</script>


<style scoped>
.Slideshow {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 40px;
  overflow: hidden;
  min-width: 1300px;
}
.Slideshow .box {
  width: 1280px;
  height: 150px;
  margin: 0 auto;
  /* border: 1px solid red; */
  margin-bottom: 15px;
}
.Slideshow .box .bak:nth-of-type(5) {
  border: none;
}
.box .bak {
  display: inline-block;
  width: 20%;
  padding: 0 20px;
  border-right: 1px solid rgb(226, 223, 223);
  font-size: 15px;
}
.box .bak p {
  color: gray;
  margin-bottom: 10px;
}
.box .bak .spanx {
  width: 33.3333%;
  float: left;
  display: inline-block;
  margin-bottom: 10px;
}
.box .bak .spanx span {
  display: inline-block;
  cursor: pointer;
  padding: 2px 5px;
}
.box .bak .spanvP span {
  background-color: #31c27c;
  color: white;
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
  font-size: 30px;
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
.p:hover {
  color: white;
  background-color: #31c27c;
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
.div2 p:hover,
.div2 span:nth-of-type(1):hover {
  cursor: pointer;
  color: #31c27c;
}

.img:hover img {
  transform: scale(1.1);
  transition: 0.8s;
  opacity: 0.9;
  cursor: pointer;
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
















