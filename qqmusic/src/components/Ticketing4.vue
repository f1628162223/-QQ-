




 <!-- 票务内容(分类) -->

<template>
  <div class="Ticketing">
    <div v-for="(item,index) in aaa" :key="index" v-if="index==bbb-1" class="div">
      <div>
        <img :src="item.img" alt />
        <p>{{ item.msg }}</p>
        <p>
          <i></i> 7LIVEHOUSE染现场
        </p>
        <p>
          <i></i> 2019.10.11
        </p>
        <p>
          ￥{{ item.num }}
          <span class="span">起</span>

          <span class="span1">
            <img src="../assets/钻石会员.png" alt /> 立减
          </span>
        </p>
        <p>立即购买</p>
      </div>
      <div v-for=" (data,ins) in item.data " :key="ins">
        <!-- 图片 -->
        <img :src="data.img" alt />
        <!-- 标题 -->
        <p>{{ data.msg }}</p>
        <p>
          <i></i> 7LIVEHOUSE染现场
        </p>
        <p>
          <i></i> 2019.10.11
        </p>
        <!-- 价钱 -->
        <p>
          ￥{{ item.num }}
          <span class="span">起</span>

          <span class="span1">
            <img src="../assets/钻石会员.png" alt /> 立减
          </span>
        </p>
        <p>立即购买</p>
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
  props: ["aaa", "bbb"],
  mounted() {},

  methods: {}
};
</script>


<style  scoped>
.Ticketing {
  width: 1300px;
  margin: 0 auto;
}

.div div {
  overflow: hidden;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(187, 182, 182);
  position: relative;
}
.div div:last-child {
  border: none;
}

.div div > img {
  float: left;
  width: 240px;
  height: 300px;
  /* border: 1px solid red; */
  margin-right: 30px;
}
.div div p:nth-of-type(1) {
  font-size: 21px;
  letter-spacing: 3px;
  margin-bottom: 35px;
}

.div div p:nth-of-type(2) {
  margin-bottom: 5px;
}

.div div p:nth-of-type(4) {
  color: #31c27c;
  position: absolute;
  bottom: 25px;
  left: 270px;
  font-size: 19px;
}
.div div p:nth-of-type(5) {
  background-color: #31c27c;
  color: white;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  font-size: 25px;
  padding: 10px 30px;
}
.span {
  font-size: 14px;
  margin-right: 10px;
}
.span1 {
  padding: 3px 6px;
  font-size: 14px;
  background-color: rgb(49, 195, 124);
  color: white;
  cursor: pointer;
}
.span1 img {
  vertical-align: bottom;
  width: 18px;
}
</style>













