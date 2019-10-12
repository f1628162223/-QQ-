







 <!--       数字专辑     -->

<template>
  <div class="FigureSpecial2">
    <!-- {{ aaa[0].name }} -->

    <div class="boss" v-for="(item,index) in aaa">
      <p>{{ item.name }}</p>

      <div class="box" v-for="(data , ins ) in item.data">
        <div class="img">
          <img :src="data.img" alt />
        </div>

        <p class="p1">{{ data.msg }}</p>
        <span>{{ data.name }}</span>
        <p class="p2"> ￥{{ data.num }}</p>
        <p class="p3"> 立即购买 </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  props: ["aaa"],
  mounted() {},

  methods: {}
};
</script>


<style  scoped>
.FigureSpecial2 {
  width: 1600px;
  padding-top: 70px;
  margin: 0px auto;
  overflow: visible;
  /* padding: 0px 100px; */
}

.boss {
  margin-bottom: 50px;
  width: 1300px;
  margin: 0 auto;
  
}
.boss > p{
  font-size: 26px;
  margin-bottom: 25px;
}
.boss .box {
  display: inline-block;
  width: 18%;
  margin-right: 25px;
  font-size: 15px;
}
.box .img {
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 14px;
}
.box .img img {
  width: 100%;
  height: 100%;
}
.box .p1{
  margin-bottom: 4px;
}
.box span,.p2{
  color: gray;
  margin-bottom: 4px;
}
.box .p3{
  float: right;
  padding: 3px 13px ;
  border: 1px solid rgb(189, 183, 183);
  font-size: 14px;
  position: relative;
  bottom: 20px;
  right: 5px;
}
.box .p3:hover{
  background-color: #F0F0F0;
  cursor: pointer;

}
.box .img:hover img{
  transition: .5s;
  transform: scale(1.1);
  cursor: pointer;
}
</style>














