









<!-- 头部导航  -->


<template>
  <div class="topNav">
    <!-- 图片 -->
    <div class="img">
      <a href>
        <img src="../assets/QQ音乐.png" alt />
      </a>
    </div>

    <!-- 导航跳转 -->
    <ul class="ul">
      <li class="a">
        <a href="#/" @click="show(0)">音乐馆</a>
      </li>
      <li>
        <a href="#/client" @click="show(1)">我的音乐</a>
      </li>
      <li>
        <a href="#/mine" @click="show(2)">客户端</a>
      </li>
      <li>
        <a href="#/music" @click="show(3)">音乐号</a>
      </li>
      <li>
        <a href="#/vip" @click="show(4)">VIP</a>
      </li>
    </ul>

    <!-- 搜索框 -->
    <div class="input">
      <el-dropdown trigger="click">
        <input type="text" class="el-dropdown-link" placeholder="搜索音乐、MV、歌单、用户" />
        <el-dropdown-menu class="uls">
          <li>
            <span>1</span> 该死的温柔
            <span>40.6万</span>
          </li>
          <li>
            <span>2</span> 不能说的密码
            <span>34.2万</span>
          </li>
          <li>
            <span>3</span> 盗将行
            <span>33.9万</span>
          </li>
          <li>
            <span>4</span> 林俊杰
            <span>23.6万</span>
          </li>
          <li>
            <span>5</span> 学到老爱到老
            <span>21.6万</span>
          </li>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="fa fa-search"></i>
    </div>

    <!-- 登录 -->
    <div class="div1">
      <span>登录</span>
      <span>开通绿钻豪华版</span>
      <span>开通付费包</span>
    </div>

    <!-- 导航2 -->
    <div v-if="num" class="div2">
      <ul>
        <li @click="show2(0)">
          <a href="#/">首页</a>
        </li>
        <li @click="show2(1)">
          <a href="#/Singer">歌手</a>
        </li>
        <li @click="show2(2)">
          <a href="#/Plate">新碟</a>
        </li>
        <li @click="show2(3)">
          <a href="#/Ranking">排行榜</a>
        </li>
        <li @click="show2(4)">
          <a href="#/Classify">分类歌单</a>
        </li>
        <li @click="show2(5)">
          <a href="#/Broadcasting">电台</a>
        </li>
        <li @click="show2(6)">
          <a href="#/Mv">MV</a>
        </li>
        <li @click="show2(7)">
          <a href="#/Figure">数字专辑</a>
        </li>
        <li @click="show2(8)">
          <a href="#/ticketing">票务</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from "../router/bus"; //传值vue实例
import $ from "jquery";
export default {
  data() {
    return {
      num: true,
      obj: 100,
      bus: ""
    };
  },
  methods: {
    show(val) {
      $("li")
        .eq(val)
        .addClass("a")
        .siblings()
        .removeClass("a");
      if (val == 0) {
        this.num = true;
      } else {
        this.num = false;
      }
    },
    show2(val) {
      $(".div2 li")
        .eq(val)
        .addClass("li")
        .siblings()
        .removeClass("li");
    }
  },
  mounted() {
    this.show2(0)
    var tath = this;
    bus.$on("chuan", function(val) {
      tath.show2(val);
    });
  }
};
</script>


<style scoped>
.topNav {
  width: 1300px;
  margin: 0 auto;

  padding-left: 30px;
  padding-bottom: 20px;
}

.img {
  display: inline-block;
  position: relative;
  top: -25px;
  margin-right: 30px;
}
.ul {
  display: inline-block;
  overflow: hidden;
  height: 100%;
}
.ul li {
  float: left;
  height: 100%;
  line-height: 100px;
}
.ul li a {
  display: inline-block;
  color: black;
  height: 100%;
  font-size: 21px;

  padding: 0 10px;
}
.ul .a a {
  color: white;
  background: #31c27c;
}
.input {
  display: inline-block;
  position: relative;
  top: -35px;
  margin-right: 20px;
  margin-left: 80px;
}
.input input {
  padding: 10px;
  font-size: 15px;
  width: 230px;
}
.input i {
  cursor: pointer;
  position: absolute;
  right: 7px;
  top: 12px;
  font-size: 17px;
  color: rgb(180, 173, 173);
}
.input i:hover {
  color: rgb(35, 180, 114);
}
.div1 {
  display: inline-block;
  position: relative;
  top: -30px;
}
.div1 span {
  padding: 7px;
  margin: 5px;
}
.div1 span:nth-child(1):hover {
  color: rgb(35, 180, 114);
  cursor: pointer;
}
.div1 span:nth-child(2) {
  background-color: #31c27c;
  color: white;
  cursor: pointer;
}
.div1 span:nth-child(2):hover {
  background-color: rgb(24, 214, 122);
}
.div1 span:nth-child(3) {
  border: 1px solid rgb(204, 197, 197);
  cursor: pointer;
}
.div1 span:nth-child(3):hover {
  background-color: #f0f0f0;
}
.uls {
  width: 230px;
  top: 64px !important;
  box-shadow: none;
  font-size: 15px;
}
.uls li {
  padding: 10px;
}
.uls li:hover {
  background-color: #31c27c;
  cursor: pointer;
  color: white;
}
.uls li:hover span {
  color: white;
}
.uls span:nth-child(1) {
  color: rgb(209, 65, 65);
  margin-right: 5px;
}
.uls span:nth-child(2) {
  float: right;
  color: gray;
}
.div2 {
  border-top: 2px solid #f0f0f0;
  padding-top: 10px;
}
.div2 ul {
  padding-left: 240px;
}
.div2 ul li {
  display: inline-block;
  margin-right: 40px;
}
.div2 ul li a {
  color: black;
}
.div2 ul li a:hover {
  color: #31c27c;
}
.div2 ul .li a {
  color: #31c27c;
}
</style>
























