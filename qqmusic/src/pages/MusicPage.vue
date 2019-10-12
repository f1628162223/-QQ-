


<!-- 音乐号页面  -->


<template>
  <div class="home">
    <div class="dg">
      <div class="dg1"></div>
      <div class="dg2"></div>
    </div>
    <!-- 一 -->
    <div class="header__intro">
      <img
        class="header__intro__title"
        src="//y.gtimg.cn/mediastyle/kol/img/index/logo.png?max_age=604800"
        alt="QQ音乐"
      />
      <img
        class="header__intro__type"
        src="//y.gtimg.cn/mediastyle/kol/img/index/hd_type.png?max_age=604800"
        alt="QQ音乐"
      />
      <p class="header">优质音乐内容创作平台</p>
      <a class="recruit" href="javascript:;">立即开通</a>
    </div>

    <!-- 二 -->
    <div class="mod_part" v-for="(data,indexs) in arrs" :key="indexs">
      <div class="mod_ornament">
        <img class="ornament__circle ani_pic" :src="data.img" alt="圆" />
      </div>
      <div class="mod_intro">
        <h2 class="intro__title ani_tit">{{ data.h2 }}</h2>
        <p class="intro__disc">{{ data.p }}</p>
        <ul class="mod_power">
          <li v-for="(item,index) in data.arr" :key="index" class="power__item">
            <i class="i" :style="{backgroundPosition:  item.img}"></i>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 三 -->

    <div class="mod_part part_star">
      <h2 class="part__title">他们已经来了</h2>
      <ul class="star_list">
        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
             
                <img
                  class="star_list__pic"
                  src="http://thirdqq.qlogo.cn/g?b=sdk&amp;k=9licFnPzSHSPQJIEaM9xKFw&amp;s=140&amp;t=1557388006&amp;max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img
                  class="star_list__honor"
                  src="https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/114038.png?max_age=2592000"
                />
         
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">黄子韬</h3>
              <div class="star_list__intro">歌手、演员黄子韬</div>
           
          </div>
        </li>

        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
             
                <img
                  class="star_list__pic"
                  src="http://imgcache.qq.com/music/photo_new/T001R300x300M000004TkOlj2Gd435.jpg?max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img
                  class="star_list__honor"
                  src="https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/1328755.png?max_age=2592000"
                />
             
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">愚青</h3>
              <div class="star_list__intro">腾讯音乐人</div>
          
          </div>
        </li>

        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
            
                <img
                  class="star_list__pic"
                  src="http://thirdqq.qlogo.cn/g?b=sdk&amp;k=jnMdibDoItqVW489cbRqwPw&amp;s=100&amp;t=585&amp;max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img class="star_list__honor" src="?max_age=2592000" />
            
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">AlanWalker</h3>
              <div class="star_list__intro"></div>
           
          </div>
        </li>

        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
             
                <img
                  class="star_list__pic"
                  src="http://y.gtimg.cn/music/common/upload/t_celebrity_certification/326340.jpg?max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img
                  class="star_list__honor"
                  src="https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/114038.png?max_age=2592000"
                />
              
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">The Chainsmokers</h3>
              <div class="star_list__intro">世界著名电子音乐组合</div>
          
          </div>
        </li>

        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
            
                <img
                  class="star_list__pic"
                  src="http://y.gtimg.cn/music/common/upload/t_celebrity_certification/319509.jpg?max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img
                  class="star_list__honor"
                  src="https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/114041.png?max_age=2592000"
                />
             
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">不齐舞团</h3>
              <div class="star_list__intro">舞蹈视频机构</div>
            
          </div>
        </li>

        <li class="star_list__item">
          <div class="star_list__inner">
            <div class="star_list__cover">
             
                <img
                  class="star_list__pic"
                  src="http://thirdqq.qlogo.cn/g?b=sdk&amp;k=UvibH305DqPtkREiapfCow9g&amp;s=140&amp;t=1556275817&amp;max_age=2592000"
                  onerror="javascript:this.src='//y.gtimg.cn/mediastyle/music_v12/img/default_singer.png?max_age=2592000';this.onerror=null;"
                />

                <img
                  class="star_list__honor"
                  src="https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/114041.png?max_age=2592000"
                />
            
            </div>
          </div>
          <div class="star_list__content">
           
              <h3 class="star_list__name">DC大叔</h3>
              <div class="star_list__intro">欧美资讯达人</div>
           
          </div>
        </li>




      </ul>
      <a class="header__btn_in js_recruit" href="javascript:;">立即开通</a>
    </div>

    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      arrs: [
        {
          img:
            "//y.gtimg.cn/mediastyle/kol/img/index/cont1.png?max_age=2592000",
          h2: "轻松玩转多种创作",
          p:
            "在音乐号，你有多种创作优质内容的玩法：发音乐动态、发表专栏文章、制作电台节目、发布直播、创建歌单、上传视频......",
          arr: [
            { name: "音乐人", img: "0px 0px" },
            { name: "直播电台", img: "-100px 0px" },
            { name: "主播电台", img: "-200px 0px" },
            { name: "视频动态", img: "-300px 0px" },
            { name: "歌单投稿", img: "-400px 0px " },
            { name: "发表文章", img: "0px -100px" }
          ]
        },
        {
          img:
            "//y.gtimg.cn/mediastyle/kol/img/index/cont2.png?max_age=2592000",
          h2: "专属认证、海量曝光",
          p:
            "QQ音乐官方认证，专属标志彰显你的专业。优质内容将依托QQ音乐的智能推荐分发到海量用户，为你的优质内容和海量用户建立连接。",
          arr: [
            { name: "主动推荐", img: "-100px -100px" },
            { name: "私信推广", img: "-200px -100px" },
            { name: "绿钻兑换", img: "-300px -100px" },
            { name: "专属认证", img: "-400px -100px" }
          ]
        },
        {
          img:
            "//y.gtimg.cn/mediastyle/kol/img/index/cont3.png?max_age=2592000",
          h2: "掌控作品全方位数据",
          p:
            "在音乐号，你可以全方位了解作品被用户的喜爱程度并了解你的粉丝，包括粉丝分布、评论量、阅读量等，让数据帮助你了解用户喜好，帮助你创作更多优质内容。",
          arr: [
            { name: "粉丝分布", img: "0px -200px" },
            { name: "评论量", img: "-100px -200px" },
            { name: "阅读量", img: "-200px -200px" }
          ]
        },
        {
          img:
            "//y.gtimg.cn/mediastyle/kol/img/index/cont4.png?max_age=2592000",
          h2: "多种变现模式",
          p:
            "打赏、分成等多种变现模式，让你的优质创作内容不仅拥有阅读/收听流量，更拥有现金流",
          arr: [
            { name: "打赏", img: "-300px -200px" },
            { name: "礼物", img: "-400px -200px" }
          ]
        }
      ]
    };
  },
  components: {
    BottomFooter //底部导航
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      var that = this;
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      var top = $(".mod_part")
        .eq(0)
        .offset().top;
      var obj = { opacity: 1, right: 0 };
      var obj2 = { opacity: 1, top: 216 };

      body.onscroll = function() {
        for (var i = 1; i < 5; i++) {
          if (html.scrollTop >= top * i - 400 * i) {
            $(".mod_ornament")
              .eq(i - 1)
              .animate(obj, 1500);
            $(".mod_intro")
              .eq(i - 1)
              .animate(obj2, 1500);
          }
        }

        // if (html.scrollTop >= top * 2 - 800) {
        //   $(".mod_ornament")
        //     .eq(1)
        //     .animate(obj, 1500);
        //   $(".mod_intro")
        //     .eq(1)
        //     .animate(obj2, 1500);
        //   console.log("222222222");
        // }
      };
    }
  }
};
</script>


<style scoped>
.dg {
  width: 100vw;
  min-width: 1300px;
  position: absolute;
}
.dg1 {
  height: 400px;
  background: url("https://y.gtimg.cn/mediastyle/kol/img/index/bg1.jpg?max_age=2592000&v=4bc6c2c5dd827ae1cac98b12f28af967")
    center;
}
.dg2 {
  height: 517px;
  background: url("https://y.gtimg.cn/mediastyle/kol/img/index/bg2.jpg?max_age=2592000&v=88e7d9c4ee2222ff168a6fa4e587c2dc")
    center;
}

.header__intro {
  width: 1300px;
  height: 917px;
  position: relative;
  margin: 0 auto;
  border: 1px solid transparent;
  text-align: center;
  animation: name 2.5s linear;
}
.header__intro__title {
  width: 450px;
  display: block;
  margin: 0 auto;
  margin-top: 160px;
}
.header__intro__type {
  width: 450px;
  display: block;
  margin: 30px auto;
}
.header {
  font-size: 28px;
  letter-spacing: 3px;
  text-indent: 3px;
  color: #fff;
}
.recruit {
  display: block;
  width: 316px;
  height: 80px;
  text-align: center;
  color: #fff;
  background-color: #22d59c;
  font-size: 34px;
  line-height: 80px;
  margin: 40px auto;
  border-radius: 80px;
}

@keyframes name {
  0% {
    opacity: 0;
  }
  30% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.ornament__circle {
  width: 500px;
}

.mod_part {
  height: 715px;
  width: 1300px;
  position: relative;
  margin: 0 auto;
  color: rgba(26, 26, 26, 1);
  margin-bottom: 100px;

  /* border: 1px solid black; */
}

.mod_ornament {
  /* border: 1px solid red; */
  position: relative;
  right: 150px;
  opacity: 0;
}
.mod_intro {
  opacity: 0;
  /* border: 1px solid black; */
  right: 0px;
  top: 316px;
  width: 610px;
  position: absolute;
}
.intro__title {
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 400;
}
.intro__disc {
  margin-bottom: 40px;
  font-size: 18px;
}
.mod_power {
  overflow: hidden;
}
.power__item {
  float: left;
  width: 16.5%;
  height: 140px;
  text-align: center;
}
.i {
  background: url("https://y.gtimg.cn/mediastyle/kol/img/index/sprite_index_icon.png?max_age=2592000&v=1d098abf4f2d10d7bf65b6cca00a2825")
    no-repeat;
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.mod_part:nth-of-type(5) img {
  position: relative;
  top: 200px;
}

.part_star {
  padding-bottom: 95px;
  overflow: hidden;
  height:860px ;
}
.part__title {
  margin: 68px 0 60px;
  text-align: center;
  font-size: 52px;
  font-weight: 400;
}

.part__title::after,
.part__title::before {
  position: relative;
  top: -1px;
  content: "";
  height: 3px;
  display: inline-block;
  width: 66px;
  margin: 0 53px;
  background-color: #000;
  overflow: hidden;
  vertical-align: middle;
}

.star_list {
  margin: 0 -40px 50px;
  overflow: hidden;
}
.star_list__item {
  float: left;
  width: 50%;
  margin: 0 0 80px;
  list-style: none;
  color: black;
  position: relative;
  left: 150px;;
}
.star_list__cover {
  position: relative;
  float: left;
  margin-right: 30px;
  width: 152px;
  height: 152px;
  border-radius: 999px;
}

.star_list__pic {
  display: block;
  width: 100%;
  border-radius: 999px;
}

.star_list__honor {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
}
.star_list__pic img {
  border: 0 none;
  -ms-interpolation-mode: bicubic;
  image-rendering: optimizeQuality;
}

.star_list__content {
  height: 152px;
  display: table-cell;
  vertical-align: middle;
}

.star_list__name {
  font-size: 32px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.star_list__intro {
  margin-top: 2px;
  font-size: 18px;
  max-height: 108px;
  overflow: hidden;
}
a{
  color: #000;
}
</style>
















