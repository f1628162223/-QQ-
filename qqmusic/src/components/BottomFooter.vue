


<!-- 底部页脚  -->


<template>
  <div class="footer">
    <!-- 1 -->
    <div class="div div1">
      <p>下载QQ音乐客户端</p>
      <ul>
        <li v-for=" time in arr3 ">
          <i :class="time.i"></i>
          <span> {{time.span}} </span>
        </li>
      </ul>
      <p>开放平台</p>
      <span>腾讯音乐人</span>
      <span>音乐号认证</span>
    </div>
    <!-- 2 -->
    <div class="div div1">
      <p>特色产品</p>
      <ul>
        <li>
          <i class="fa fa-share-alt"></i>
          <span>分享</span>
        </li>

        <li>
          <i class="fa fa-qq"></i>
          <span>QQ</span>
        </li>

        <li>
          <i class="fa fa-twitter"></i>
          <span>小鸟</span>
        </li>
      </ul>
      <p>TME集团官网</p>
      <span>腾讯音乐</span>
    </div>
    <!-- 3 -->
    <div class="div div2">
      <p>合作链接</p>
      <ul>
        <li v-for="key in arr">
          <span>{{key}}</span>
        </li>
      </ul>
    </div>

    <!-- 底部小字 -->
    <div class="div3">
      <div>
        <span v-for="key in arr2">{{key}}</span>
      </div>

      <p>
        Copyright © 1998 - 2019 Tencent.
        <span>All Rights Reserved.</span>
      </p>

      <p>
        腾讯公司
        <span>版权所有</span>
        <span>腾讯网络文化经营许可证</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "当贝市场",
        "智能电视网",
        "企鹅FM",
        "腾讯云",
        "腾讯微云",
        "QQ浏览器",
        "电脑管家",
        "腾讯社交广告",
        "最新版QQ",
        "手机QQ空间",
        "腾讯视频",
        "CJ ENM"
      ],
      arr2: [
        "关于腾讯",
        "About Tencent",
        "服务条款",
        "用户服务协议",
        "隐私政策",
        "权利声明",
        "广告服务",
        "腾讯招聘",
        "客服中心",
        "网站导航"
      ],
      arr3: [
        { i: "fa fa-windows", span: "PC版" },
        { i: "fa fa-android", span: "Android版" },
        { i: "fa fa-apple", span: "iPhone版" },
        { i: "fa fa-chrome", span: "Browser版" }
      ]
    };
  }
};
</script>


<style scoped>
.footer {
  width: 100vw;
  height: 590px;
  background-color: #333333;
  position: absolute;
  left: 0px;
  color: #999999;
  font-size: 15px;
  margin-top: 50px;
  min-width: 1300px;
}
.footer i {
  font-size: 40px;
  color: #7f7f7f;
}
.div {
  vertical-align: top;
  display: inline-block;
  width: 33%;
  height: 80%;
  padding-left: 80px;
}
.div p {
  margin: 60px 0;
}
.div1 {
  white-space: nowrap;
}
.div1 ul {
  position: relative;
  left: -20px;
}
.div1 li {
  /* border: 1px solid red; */
  display: inline-block;
  text-align: center;
  width: 80px;
  cursor: pointer;

}
.div1 li:hover i{
  color: rgb(49, 195, 124);
}
.div1 li:hover{
  color:rgb(49, 195, 124);
}
.div li i {
  display: block;
}

.div > span {
  margin-right: 30px;
}
span:hover {
  color: rgb(49, 195, 124);
  cursor: pointer;
}

.div2 {
  padding-left: 0px;
}
.div2 li {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 15px;
  width: 100px;
}
.div3 {
  /* border: 1px solid red; */
  text-align: center;
  font-size: 12px;
}
.div3 div span {
  border-right: 1px solid gray;
  margin-right: 5px;
  padding-right: 5px;
}

.div3 p:nth-of-type(1) {
  margin: 10px 0;
}
</style>
















