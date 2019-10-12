


<!-- 新碟首发  -->


<template>
  <div class="Slideshow">
    <h2>{{headline}}</h2>
    <div class="divx">
      <span v-for="(ietm,index) in classify" @click="show5(index)">{{ietm}}</span>
      <span class="div">
        <a @click="bus(2)" href="#/Plate">更多</a>

        <i class="el-icon-arrow-right"></i>
      </span>
    </div>

    <div class="el">
      <div class="elr" v-for="(tiem,index) in arrs" v-if="  index==bbb ">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../router/bus"; //传值vue实例
import $ from "jquery";
export default {
  data() {
    return {
      bbb: 0,
      arrs: [],
      classify: ["内地", "港台", "欧美", "韩国", "日本", "其他"],
      headline: "新碟首发"
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 1000);
    this.show5(0);
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
      this.bbb = val 
    },

    bus(val) {
      bus.$emit("chuan", val);
    }
  }
};
</script>


<style scoped>
.Slideshow {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 40px;
  overflow: hidden;
  height: 820px;
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
.divx {
  text-align: center;
  white-space: nowrap;
  margin: 30px 0;
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
.divx .div a {
  color: black;
}
.divx .div a:hover {
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
  overflow: hidden;
}

.div2 {
  width: 240px;
  height: 308px;
  display: inline-block;
  float: left;
  margin: 0 9px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
}

.div2 .img {
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.div2 .img img {
  width: 100%;
}
.div2 p {
  margin-top: 7px;
  font-size: 15px;
}
.div2 span {
  font-size: 13px;
  color: gray;
}

.div2:hover img {
  transform: scale(1.3);
  transition: 0.8s;
  opacity: 0.8;
}

.div2:hover .div3 {
  opacity: 1;
  transition: 0.5s;
  transform: scale(2.5);
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
</style>
















