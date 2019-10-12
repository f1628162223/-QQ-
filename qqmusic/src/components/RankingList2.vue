


<!-- 导航排行榜页面  -->


<template>
  <div class="ranking">
    <div class="box">


      <div class="left">
        <div class="div" v-for=" (item , index)  in arrs ">
          <div class="name">{{item.name}}</div>
          <div class="div2 m2" @click="show2(index , ins ,data)" v-for=" (data,ins) in item.arr " >{{data}}</div>
        </div>
      </div>


      <div class="right">
        <div class="div3">
          <span class="span">流行指数榜</span>
          <span>2019-09-26</span>
          <span @click="clas=!clas" >榜单规则</span>
          <div class="guize"  :class="{guize1:clas}"> 
              <h4>  榜单规则  </h4>
              <p> 追踪全球音乐流行趋势，乐坛最热门歌曲，网络蹿红歌曲根据地。展示QQ音乐用户的关注热度，体现歌曲飙升程度的潮流音乐排行榜。 </p>
              <p> 更新时间：每天更新 </p>
              <p> 歌曲数量：100首 </p>
              <p> 统计算法：QQ音乐库内全部歌曲，根据综合数据7天前的涨幅进行排序，取前100名 </p>
              <p> 综合数据：登录用户在QQ音乐播放/分享/下载数据  </p>
          </div>
        </div>
        <div class="div5" v-for=" key in ar " @click="isOK=!isOK">
          <div class="div4"  :style="{backgroundPosition:`${-key.a*20}px  ${-key.b*20}px`}"></div>
          {{key.name}}

        </div>
          <div class="div5ps" :class="{div5psq:isOK}"> 
          
               <i class="el-icon-circle-close"  @click="isOK=!isOK"></i>
              
               <p> QQ音乐提醒您 </p>
                <i class="el-icon-warning"></i>
               <div class="div5psp">
                  <p> 需要在QQ音乐客户端操作!使用QQ音乐客户端获得高品质完整体验。 </p>
                   <span> 若您未安装QQ音乐客户端请先安装。 </span>      
               </div>
               <div class="ioi"> 打开客户端 </div>
               <div class="ioi"> 下载客户端 </div>
            
             
           </div>
        <div v-for="(key,ins) in data" v-if="ins==ak">
          <div class="div7">
            <span>歌曲</span>
            <span>歌手</span>
            <span>时长</span>
          </div>
          <div class="div6" v-for="(k,i) in key">
            <span>{{i+1}}</span>
            <img :src="k.pic" alt />
            <!-- <img src="../assets/1567138072572.jpg" alt /> -->
            <span class="span2">
              {{ k.name }}
              <div class="div8" @mouseover="shos(1,ins,i)"  @mouseleave="shos(0,ins,i)"  v-for="(a,ins) in ar2" :style="{backgroundPosition:` 2px  ${-a.b*36}px`}"  ></div>
            </span>
            <span class="span3">{{ k.artist }}</span>
            <span class="span4">{{ k.songTimeMinutes }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      isOK:false,
      clas:false,
      ak: 0,
      data: [],
      arrs: [
        {
          name: "巅峰榜",
          arr: ["流行指数榜", "热歌榜", "新歌榜", "飙升榜", "MV榜"]
        },
        {
          name: "地区榜",
          arr: [
            "内地榜",
            "香港地区榜",
            "台湾地区榜",
            "欧美榜",
            "韩国榜",
            "日本榜"
          ]
        },
        {
          name: "特色榜",
          arr: [
            "抖音排行榜",
            "网络歌曲榜",
            "电音榜",
            "ACG新歌榜",
            "国风榜",
            "综艺新歌榜",
            "影视金曲榜",
            "腾讯音乐人原创榜",
            "K歌金曲榜",
            "说唱榜"
          ]
        },
        {
          name: "全球榜",
          arr: [
            "美国公告牌榜",
            "美国Tunes榜",
            "韩国Mnet榜",
            "英国UK榜",
            "日本公信榜",
            "JOOX本地热播榜",
            "香港商台榜",
            "台湾KKBOX榜",
            "YouTube音乐排行榜"
          ]
        }
      ],
      ar: [
        { a: 4, b: 11, name: "播放全部" },
        { a: 1, b: 0, name: "添加到" },
        { a: 2, b: 11, name: "下载" },
        { a: 6, b: 0, name: "批量操作" },
        { a: 7, b: 6, name: "评论(645)" }
      ],
      ar2: [
        { a: 0, b: 0, name: "播放全部" },
        { a: 0, b: 2, name: "添加到" },
        { a: 0, b: 7, name: "下载" },
        { a: 0, b: 1, name: "分享" }
      ]
    };
  },
  props: ["aaa"],
  mounted() {
    setTimeout(this.show, 1000);
    this.show2(0, 0);
    this.shos(0);
  },

  methods: {
    show() {
      var tath = this;
      var arr = [];
      tath.aaa.map((item, index) => {
        arr.push(item);
        if ((index + 1) % 20 == 0 || index == tath.aaa.length - 1) {
          tath.data.push(arr);
          arr = [];
        }
      });
    },
    show2(index, ins, val) {
      var obj = $(".div")
        .eq(index)
        .find($(".div2"));
      $(obj[ins])
        .addClass("m1")
        .removeClass("m2")
        .siblings()
        .removeClass("m1")
        .addClass("m2");
      $(".div")
        .eq(index)
        .siblings()
        .children()
        .removeClass("m1")
        .addClass("m2");
        

      $("html").scrollTop(0);
      $(".span").html(val);

      this.ak = ins + index;
    },
    shos(val, index, i) {
      var obj = $(".div6")
        .eq(i)
        .find($(".div8"));

      $(obj[index]).css({
        backgroundPositionX: -val * 36 + 2
      });
    }
  }
};
</script>


<style  scoped>
.ranking {
  padding-top: 40px;
  padding-bottom: 20px;
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  min-width: 1300px;
}
.box {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.left {
  float: left;
  width: 180px;
  border: 1px solid rgb(218, 214, 214);
}

.left .div {
  margin-bottom: 20px;
  font-size: 15px;
}
.left .div div {
  padding-left: 20px;
  height: 40px;
  /* border: 1px solid red; */
  line-height: 40px;
}
.left .div .div2 {
  cursor: pointer;
}
.left .div .m2:hover {
  color: #31c27c;
}
.m1 {
  background-color: #31c27c;
  color: white;
}
.left .div .name {
  padding-top: 10px;
  height: 60px;
  font-size: 20px;
  border-bottom: 1px solid rgb(212, 209, 209);
}
.left .div .name:hover {
  color: black;
}

.right {
  /* border: 1px solid red; */
  float: right;
  width: 1000px;
  padding-top: 11px;
}
.right .div3 {
  position: relative;
}
.right .div3 span:nth-child(1) {
  font-size: 25px;
}
.right .div3 span:nth-child(2) {
  margin: 0 10px;
  font-size: 13px;
}
.right .div3 span:nth-child(3) {
  font-size: 14px;
  cursor: pointer;
}
.right .div3 span:nth-child(3):hover {
  color: #31c27c;
}

.div4 {
  width: 20px;
  height: 20px;
  background: url("../assets/icon_sprite.png") no-repeat;
  background-size: 1000% 1700%;
  display: inline-block;
  position: relative;
  top: 6px;
}
.div5 {
  font-size: 15px;
  width: 130px;
  padding-left: 20px;
  height: 35px;
  border: 1px solid rgb(209, 200, 200);
  display: inline-block;
  /* text-align: center; */
  margin-right: 20px;
  margin-top: 20px;
  line-height: 30px;
  cursor: pointer;
  position: relative;
}
.right .div5:nth-child(2) {
  background-color: #31c27c;
  color: white;
  border: none;
}
.right .div5:nth-child(2):hover {
  background-color: rgb(44, 175, 111);
}
.right .div5:nth-child(3):hover,
.right .div5:nth-child(4):hover,
.right .div5:nth-child(5):hover,
.right .div5:nth-child(6):hover {
  background-color: #f0f0f0;
}
.div7 {
  /* border: 1px solid red; */
  line-height: 60px;
  height: 60px;
  font-size: 15px;
  color: gray;
}
.div7 span:nth-child(1) {
  margin-left: 180px;
}
.div7 span:nth-child(2) {
  margin-left: 478px;
}
.div7 span:nth-child(3) {
  margin-left: 200px;
}

.div6 {
  height: 80px;
  padding-left: 50px;
  color: rgb(97, 86, 86);
  overflow: hidden;
  line-height: 80px;
  font-size: 13px;
}
.div6:nth-of-type(2n) {
  background-color: rgb(250, 250, 250);
}

.div6:nth-of-type(2) span:nth-child(1) {
  color: red;
}
.div6:nth-of-type(3) span:nth-child(1) {
  color: red;
}
.div6:nth-of-type(4) span:nth-child(1) {
  color: red;
}
.div6 span:nth-child(1) {
  font-size: 26px;
  float: left;
  width: 100px;
}
.div6 img {
  width: 70px;
  height: 70px;
  float: left;
  position: relative;
  top: 3px;
  margin-right: 20px;
}

.div6 .span2 {
  display: inline-block;
  width: 415px;
  color: black;
  margin-right: 30px;
}
.div6 .span2:hover,
.div6 .span3:hover {
  color: #31c27c;
  cursor: pointer;
}
.div6 .span3 {
  display: inline-block;
  width: 230px;
  color: black;
}
.span2 .div8 {
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  float: right;
  margin-top: 20px;
  margin-left: 10px;
  background: url("../assets/icon_list_menu.png") no-repeat;
  background-size: 500% 800%;
  display: none;
}
.div6:hover .div8 {
  display: block;
}

.guize{
  width: 580px;
  height: 250px;
  background-color: white;
  font-size: 14px;
  position: absolute;
  display: none;
  z-index: 2;
  box-shadow: 1px 1px 5px rgb(82, 79, 79);
  padding: 15px;
}
.guize1{
  display: block;
}
.guize h4{
  font-size: 22px;
  font-weight: 100;
  margin-top: 6px;
}
.guize p:nth-child(2){
  margin-bottom: 40px;
  margin-top: 22px;
}
.div5ps{
  width: 452px;
  height: 287px;
  position: absolute;
  top: calc(100% - 50% - 143px );
  left: calc(100% - 50% - 226px  );
  background-color: white;
  box-shadow: 1px 1px 15px rgb(155, 152, 152);
  z-index: 9;
  padding: 15px;
  display: none;
}
.div5psq{
  display: block;
}
.div5ps .el-icon-circle-close{
  font-size: 26px;
  float: right;
  color: gray;
  cursor: pointer;
}
.div5ps .el-icon-circle-close:hover{
  color: #31c27c;
}
.div5ps >p{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid rgb(216, 211, 211);
  font-size: 17px;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.div5ps .el-icon-warning{
  font-size: 60px;
  vertical-align: top;
  color: #F99B33;
  margin: 0 25px;
}
.div5ps .div5psp{
    padding-top: 10px;
    display: inline-block;
    width: 300px;
    font-size: 14px;
}
.div5ps .div5psp p{
  margin-bottom: 15px;
}
.div5ps .div5psp span{
  color: gray;

}
.div5ps .ioi{
  padding: 6px 18px ;
  border: 1px solid rgb(194, 191, 191);
  display: inline-block;
  float: right;
  margin-top: 80px;
  margin-left: 15px;
  cursor: pointer;
  font-size: 15px;
}
.div5ps .ioi:nth-of-type(2){
  border:1px solid #31C27C;
  background-color: #31C27C;
  color: white;
}
.div5ps .ioi:nth-of-type(2):hover{
    background-color: rgb(32, 218, 128);
}
.div5ps .ioi:nth-of-type(3):hover{
  background-color: #F0F0F0;
}
</style>















