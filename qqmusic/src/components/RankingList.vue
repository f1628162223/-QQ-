


<!-- 排行榜  -->


<template>
  <div class="Slideshow">
    <h2>{{headline}}</h2>
    <div class="divx">
      <span class="div">
        <a @click="bus(3)" href="#/Ranking">更多</a>
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>

    <div class="el">
      <div class="elr">
        <div class="div2" v-for=" (k,i) in 5 " :style="{backgroundPosition:`${-235*(k-1)}px  0px`}">
          <p class="p1">巅峰榜</p>
          <p class="p2" v-for="(key,ins) in ccc" v-if="ins==i">{{key}}</p>
          <div class="span">
            <div class="div3">
              <i class="el-icon-caret-right"></i>
            </div>
          </div>
          <div class="div4" v-for="(item,index) in arrs[k] ">
            <span class="span2">{{index+1}}</span>
            <span>{{ item.name }}</span>
            <p>&nbsp; {{ item.artist }}</p>
          </div>
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
      headline: "排行榜",
      ccc: ["流行指数", "热歌", "新歌", "欧美", "韩国"]
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
        if ((index + 1) % 3 == 0 || index == tath.aaa.length - 1) {
          tath.arrs.push(arr);
          arr = [];
        }
      });
    },

    show5(val) {
      this.bbb = val + 3;
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
  height: 690px;
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
  margin: 0px auto;
  width: 1300px;
  overflow: hidden;
  position: relative;
  top: -25px;
}

.divx span {
  float: right;
  cursor: pointer;
  position: relative;
  right: 30px;
}

.divx .div a {
  color: black;
}
.divx .div a:hover {
  color: #31c27c;
}

.el {
  width: 100%;
  min-width: 1300px;
  /* border: 1px solid red; */
}
.elr {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  /* border: 1px solid black; */
  height: 100%;
}

.div2 {
  width: 235px;
  height: 500px;
  display: inline-block;
  margin: 0 12px;
  background: url("../assets/bg_index_top.jpg") no-repeat;
  background-size: 500% 100%;
  background-position: -235px 0px;
  color: white;
  text-align: center;
  cursor: pointer;
  padding-top: 30px;
}
.div2 .p1 {
  font-size: 21px;
}
.div2 .p2 {
  font-size: 28px;
  margin-bottom: 30px;
}

.span {
  display: inline-block;
  width: 36px;
  background-color: white;
  height: 2px;
  margin-bottom: 40px;
}
.div2:hover .div3 {
  opacity: 1;
  transition: 0.5s;
  transform: scale(1.5);
}
.div2:hover .span {
  width: 0;
}
/* 播放图 */
.div3 {
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: -13px;
  right: 15px;
  line-height: 30px;
  opacity: 0;
}
.div3 i {
  color: gray;
  font-size: 20px;
}
.div4 {
  text-align: left;
  padding-left: 25px;
  width: 100%;
  margin-bottom: 40px;
  font-size: 15px;
}
.div4 .span2 {
  position: relative;
  right: 5px;
}
.div4 p {
  margin-top: 8px;
  font-size: 14px;
}
</style>
















