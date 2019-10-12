


<!-- 歌手信息分类  -->


<template>
  <div class="singer">
 
    <div class="box">
      <div v-for="(k,i) in arrs" class="div">
        <span @click="show(i)" class="span p spanx">{{k.name}}</span>
        <span @click="show( i, ins)" class="p" v-for="(key,ins) in k.arr">{{key}}</span>
      </div>

      <div class="div2">
        <div class="div3" v-for=" (item,index) in aaa " v-if="index<10">
          <!-- <img src="../assets/2461721588.jpg" alt /> -->
          <img :src="item.pic" alt />
          <p>{{item.name}}</p>

          
        </div>
      </div>

      <div class="div4">
        <span v-for=" (item,index) in aaa " v-if="index<75">{{item.name}}</span>
      </div>

      <div class="div5">
        <span @click="Li(i)" v-for="i in 5">{{i}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      arrs: [
        {
          name: "热门",
          arr: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "#"
          ]
        },
        {
          name: "全部",
          arr: ["内地", "港台", "欧美", "日本", "韩国", "其他"]
        },
        {
          name: "全部",
          arr: ["男", "女", "组合"]
        },
        {
          name: "全部",
          arr: [
            "流行",
            "嘻哈",
            "摇滚",
            "电子",
            "民谣",
            "R&B",
            "民谣",
            "轻音乐",
            "爵士",
            "古典",
            "乡村",
            "蓝调"
          ]
        }
      ]
    };
  },
  props: ["aaa"],
  mounted() {
      this.Li(1)
  },
  methods: {
    show(i, ins) {
      var obj = $(".div")
        .eq(i)
        .find($("span"));

      $(obj[0])
        .addClass("spanx ")
        .removeClass("p")
        .siblings()
        .removeClass("spanx ")
        .addClass("p");
      $(obj[ins + 1])
        .addClass("spanx ")
        .removeClass("p")
        .siblings()
        .removeClass("spanx ")
        .addClass("p");
    },
    Li(val){
        $('.div5 span').eq(val-1).addClass("v5").siblings().removeClass('v5')
    }
  }
};
</script>


<style  scoped>
.singer {
  /* border: 1px solid red; */
  min-width: 1300px;
}
.singer > img {
  width: 100%;
}
.box {
  /* border: 1px solid black; */
  width: 1100px;
  margin: 0 auto;
  margin-top: 60px;
}
.box > div {
  margin-bottom: 20px;
}
.box > div span {
  /* border: 1px solid black; */
  padding: 2px 4px;
  cursor: pointer;
  margin-right: 5px;
}
.box > div .span {
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

.div2 {
  /* border: 1px solid red; */
  margin-top: 50px;
}
.div3 {
  /* border: 1px solid black; */
  display: inline-block;
  width: 18%;
  height: 240px;
  margin: 0 10px;
  margin-bottom: 30px;
  text-align: center;
  padding-top: 20px;
}
.div3 img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;
}

.div4 span {
  display: inline-block;
  width: 19.5%;
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;
}
.div4 span:hover {
  color: #31c27c;
}

.div5 {
  text-align: center;
  margin-top: 50px;
}
.div5 span {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 40px;


}
.div5 span.v5{
  color: white;
  background-color: #31c27c;
}
</style>














