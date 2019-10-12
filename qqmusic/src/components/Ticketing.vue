




 <!-- 票务 -->

<template>
  <div class="Ticketing">
    <div class="box" v-for="(item,index) in aaa" :key="index">
      <div>
        <h2>{{item.name}}</h2>
        <div class="aaa">
          <img :src="item.img" alt />
          <div class="div">
            <span class="span">{{item.msg}}</span>
            ￥{{item.num}}
            <span class="span2">起</span>
            <span class="span1">
              <img src="../assets/钻石会员.png" alt /> 立减
            </span>
          </div>
        </div>
        <div class="bbb">
          <div class="div1" v-for="(data,ins) in item.data" :key="ins">
            <div class="img">
              <img :src="data.img" alt />
            </div>
            <p>{{data.msg}}</p>
            <div class="div2">
              ￥{{data.num}}
              <span class="span3">起</span>
              <span class="span4">
                <img src="../assets/钻石会员.png" alt /> 立减
              </span>
            </div>
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
      arrs: []
    };
  },
  props: ["aaa"],
  mounted() {},

  methods: {}
};
</script>


<style  scoped>
.box {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-bottom: 80px;
}
.box > div {
  width: 1250px;
  margin: 0 auto;
  /* border: 1px solid red; */
  padding-top: 40px;
  overflow: hidden;
}
h2 {
  text-align: center;
  font-weight: 100;
  font-size: 33px;
  letter-spacing: 10px;
  margin-bottom: 25px;
}
.aaa {
  width: 320px;
  height: 400px;
  float: left;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.aaa:hover img {
  transition: 0.8s;
  transform: scale(1.1);
}
.aaa .div {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 20px;
  padding-left: 10px;
}
.div .span {
  display: inline-block;
  margin-bottom: 10px;
}
.div .span1 {
  padding: 3px 6px;
  font-size: 14px;
  background-color: rgb(49, 195, 124);
  color: white;
  border-radius: 5px;
}
.div .span1 img {
  vertical-align: bottom;
  width: 18px;
}
.div .span2 {
  font-size: 17px;
  margin: 0px 5px;
}
.bbb {
  width: 900px;
  height: 400px;
  float: right;
}
.bbb .div1 {
  display: inline-block;
  padding-right: 50px;
  width: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
}
.div1 .img {
  width: 150px;
  height: 185px;
  overflow: hidden;
  float: left;
  margin-right: 20px;
}
.div1 .img img {
  width: 100%;
  height: 100%;
}
.div1 .img:hover img {
  cursor: pointer;
  transition: 0.8s;
  transform: scale(1.1);
}
.div1 p {
  line-height: 25px;
}
.div1 .div2 {
  position: absolute;
  bottom: 10px;
  left: 165px;
  font-size: 22px;
  color: rgb(49, 195, 124);
}
.div2 .span3 {
  font-size: 17px;
}
.div2 .span4 {
  padding: 3px 6px;
  font-size: 14px;
  background-color: rgb(49, 195, 124);
  color: white;
  cursor: pointer;
}
.div2 .span4 img {
  vertical-align: -5px;

  width: 18px;
}
</style>














