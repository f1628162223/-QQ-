


<!-- VIP页面  -->


<template>
  <div class="vip" ref="aaa">
    <div class="li">
      <i class="i"></i>
      <p class="p"></p>
      <p class="btn">立即开通</p>
      <div class="bottom">
        <div class="div" v-for="(k,i) in arr" :key="i" :style="{backgroundPosition:k.aa}"></div>
        <i>
          <img src="https://y.gtimg.cn/mediastyle/music_svip/img/arrow_down.png" alt />
        </i>
      </div>
    </div>
    <div class="ul">
      <div class="lis" v-for="(data,index) in arrs" :key="index">
        <div class="img" :style="{backgroundImage:`url(${data.aaa})` }"></div>
        <div class="div2">
          <h2 :style="{ backgroundPosition:data.h2 }"></h2>
          <p :style="{ backgroundPosition:data.p2 }"></p>
          <div v-for="(item,ins) in data.arr" :key="ins">
            <span :style="{ backgroundPosition:item.posi }"></span>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "../components/BottomFooter"; //底部导航
import $ from "jquery";
export default {
  data() {
    return {
      arr: [
        { aa: "-500px  -100px" },
        { aa: "-800px 0" },
        { aa: " -500px -200px" }
      ],
      arrs: [
        {
          aaa:
            "https://y.gtimg.cn/mediastyle/music_svip/img/gallery/feature_thumb_1.jpg?max_age=2592000&v=3c3189a98cf989430acc19aca893c961",
          h2: "0 -310px",
          p2: "0 0 ",
          arr: [
            {
              name: "高品质音乐下载",
              posi: "-408px -496px"
            },
            {
              name: "无损音乐下载",
              posi: "0 -598px"
            },
            {
              name: "付费音乐下载",
              posi: "-102px -598px"
            }
          ]
        },
        {
          aaa:
            "https://y.gtimg.cn/mediastyle/music_svip/img/gallery/feature_thumb_2.jpg?max_age=2592000&v=0ddce5e49e4544b2019934e43138b5f6",
          h2: "0 -372px",
          p2: "0 -62px ",
          arr: [
            {
              name: "个性主题",
              posi: "-204px -598px"
            },
            {
              name: "歌词海报字体",
              posi: "-306px -598px"
            },
            {
              name: "个性弹幕气泡",
              posi: "0 -496px"
            },
            {
              name: "QQ音乐首唱会",
              posi: "-102px -496px"
            }
          ]
        },
        {
          aaa:
            "https://y.gtimg.cn/mediastyle/music_svip/img/gallery/feature_thumb_3.jpg?max_age=2592000&v=092ab7556d638ae3222f871711a26f9f",
          h2: "0 -434px",
          p2: "0 -124px ",
          arr: [
            {
              name: "闪电尊贵图标",
              posi: "-408px -598px"
            },
            {
              name: "付费音乐专属图标",
              posi: "-306px -496px"
            },
            {
              name: "成长加速",
              posi: "-204px -496px"
            }
          ]
        },
        {
          aaa:
            "https://y.gtimg.cn/mediastyle/music_svip/img/gallery/feature_thumb_4.jpg?max_age=2592000&v=1ffbdd62e1cdbdfb9343e86345fb1444",
          h2: "0 -248px",
          p2: "0 -186px ",
          arr: [
            {
              name: "QQ空间背景音乐",
              posi: "-510px -496px"
            },
            {
              name: "个性音乐",
              posi: "-612px -496px"
            }
          ]
        }
      ],
      num: []
    };
  },
  components: {
    BottomFooter //底部导航
  },
  mounted() {
    var top = this.$refs.aaa.offsetTop;
    var html = document.querySelector("html");
    html.scrollTop = top;
    this.show();
  },
  methods: {
    show() {
      var top = this.$refs.aaa.offsetTop;
      var that = this;
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      this.num.push(top);
      for (var i = 0; i < $(".vip .ul .lis").length; i++) {
        that.num.push(
          $(".vip .ul .lis").eq(i).offset().top
        );
      }

      body.onscroll = function() {
        for (var i = that.num.length - 1; i >= 0; i--) {
          if (html.scrollTop >= that.num[i]) {
            // return console.log(i);
          }
        }
      };
    },


    top(val) {
      $("html")
        .stop(true, true)
        .animate({ scrollTop: this.num[val] }, 800);
      // console.log(val);
    }
  }
};
</script>


<style scoped>
.li {
  min-width: 1920px;
  height: 944px;
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/img/gallery/banner_thumb_1.jpg?max_age=2592000&v=3c0ee8f26ec6c50fa6600215e2a869c3");
  border: 1px solid transparent;
  position: relative;
}

.i {
  width: 500px;
  height: 100px;
  display: block;
  margin: 0 auto;
  margin-top: 430px;
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/img/sprite_index_banner.png?max_age=2592000&v=fe3dbc38c60108b9421d75ae45c107e6");
  background-repeat: no-repeat;
  animation: name 2s linear;
  /* border: 1px solid red; */
}

.p {
  width: 500px;
  height: 33px;
  margin: 30px auto;
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/img/sprite_index_banner.png?max_age=2592000&v=fe3dbc38c60108b9421d75ae45c107e6");
  background-repeat: no-repeat;
  /* border: 1px solid red; */
  background-position: 0 -300px;
  animation: name2 2s linear;
}

.btn {
  display: block;
  width: 320px;
  height: 64px;
  line-height: 64px;
  font-size: 34px;
  text-align: center;
  margin: 0 auto;
  border-radius: 99px;
  background-color: #31c27c;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  animation: name3 2.2s linear;
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 164px;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 180px;
}
.bottom .div:hover {
  cursor: pointer;
  transition: 0.5s;
  opacity: 1;
}
.bottom .div {
  float: left;
  margin-right: 50px;
  width: 300px;
  height: 100px;
  margin-top: 15px;
  opacity: 0.4;
  /* border: 1px solid red; */
  display: block;
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/img/sprite_index_banner.png?max_age=2592000&v=fe3dbc38c60108b9421d75ae45c107e6");
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
}
@keyframes name {
  0% {
    opacity: 0;
    transform: translate(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes name2 {
  0% {
    opacity: 0;
    transform: translate(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes name3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes name4 {
  0% {
    transform: translateY(-0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(-0);
  }
}
.bottom i {
  position: absolute;
  left: 50%;
  bottom: 15px;
  z-index: 20;
  display: block;
  width: 30px;
  height: 16px;
  opacity: 0.7;
  animation: name4 1.5s infinite linear;
}

.lis {
  min-width: 1920px;
  height: 944px;
}
.img {
  height: 584px;
  position: relative;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center center;
}

.div2 {
  position: relative;
  padding-top: 40px;
  height: 360px;
  z-index: 20;
  text-align: center;
  /* border: 1px solid red; */
}
.div2 h2 {
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/sprite/feature.png?max_age=2592000&v=a354e71c389d0a188273b73bec9899a5");
  margin: 0 auto 25px;
  width: 460px;
  height: 60px;
}
.div2 > p {
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/sprite/feature.png?max_age=2592000&v=a354e71c389d0a188273b73bec9899a5");
  margin: 0 auto 0;
  width: 740px;
  height: 60px;
}
.div2 > div {
  display: inline-block;
  margin: 0 50px;
}
.div2 div span {
  background-image: url("//y.gtimg.cn/mediastyle/music_svip/sprite/feature.png?max_age=2592000&v=a354e71c389d0a188273b73bec9899a5");
  display: inline-block;
  width: 100px;
  height: 100px;
}
.div2 div p {
  text-align: center;
  font-size: 14px;
  color: #707070;
}
</style>
















