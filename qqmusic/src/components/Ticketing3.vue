


<!-- 票务头部搜索栏  -->


<template>
  <div class="Ticketing">
    <div class="div" :class="{dvi:ccc}">
      <div class="div2">
        <div class="shanghai" @click="bbb=!bbb ;  show2()">
          <span>{{msg}}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="box" :class=" {xox:bbb}">
          <div class="top">
            <p>
              <span class="span">当前城市</span>
              <span>{{ msg }}</span>
            </p>
            <p>
              <span class="span">热门城市</span>
              <span v-for="(data,ins) in arr" :key="ins" @click=" show(data);   bbb=!bbb">{{data}}</span>
            </p>
          </div>
          <div class="main">
            <p>按字母查找</p>
            <span v-for="(data , ins) in arr2" :key="ins" @click="show2(ins)">{{data}}</span>
          </div>
          <div class="ul">
            <div class="li" v-for="(item,index) in arr3" :key="index">
              <span>{{ item.name }}</span>
              <span
                class="span4"
                v-for="(data,ins) in item.msg"
                :key="ins"
                @click="show(data) ;bbb=!bbb"
              >{{data}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="input">
        <input type="text" placeholder="搜索票务" />
        <div class="but">
          <i class="el-icon-search"></i>
        </div>
      </div>

      <div class="flse">
        <span>我的订单</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>

    <div :class="{fixed:ccc}">
      <div class="bottom">
        <div v-for="(item,index) in arr4" :key="index" @click="shows(index)">
          <i :class="item.class"></i>
          <span>{{item.name}}</span>
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
      msg: "全国",
      arr: ["全国", "北京", "上海", "广州", "深圳", "成都", "武汉"],
      arr2: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "Q",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      arr3: [
        {
          name: "A",
          msg: ["澳门"]
        },
        {
          name: "B",
          msg: ["北京", "保定", "包头", "白山", "蚌埠", "滨州", "宝鸡"]
        },
        {
          name: "C",
          msg: ["沧州", "长治", "长春", "常州", "长沙", "郴州", "重庆", "成都"]
        },
        {
          name: "D",
          msg: ["大同", "大连", "东莞", "大理"]
        },
        {
          name: "E",
          msg: ["鄂尔多斯"]
        },
        {
          name: "F",
          msg: ["抚顺", "福州", "佛山"]
        },
        {
          name: "G",
          msg: ["赣州", "广州", "桂林", "贵港", "贵阳", "固原"]
        },
        {
          name: "H",
          msg: [
            "衡水",
            "邯郸",
            "呼和浩特",
            "哈尔滨",
            "杭州",
            "湖州",
            "合肥",
            "黄山",
            "黄冈",
            "衡阳",
            "惠州",
            "河源",
            "海口"
          ]
        },
        {
          name: "J",
          msg: [
            "晋中",
            "吉林",
            "佳木斯",
            "嘉兴",
            "金华",
            "吉安",
            "济南",
            "济宁",
            "江门",
            "嘉峪关"
          ]
        },
        {
          name: "K",
          msg: ["昆明"]
        },
        {
          name: "L",
          msg: [
            "廊坊",
            "临汾",
            "辽源",
            "临沂",
            "聊城",
            "洛阳",
            "柳州",
            "丽江",
            "拉萨",
            "兰州"
          ]
        },
        {
          name: "M",
          msg: ["马鞍山", "绵阳"]
        },
        {
          name: "N",
          msg: ["南京", "南通", "宁波", "南昌", "南宁", "南充"]
        },
        {
          name: "Q",
          msg: ["全国", "秦皇岛", "泉州", "青岛"]
        },
        {
          name: "S",
          msg: [
            "石家庄",
            "沈阳",
            "上海",
            "宿迁",
            "苏州",
            "绍兴",
            "深圳",
            "三亚"
          ]
        },
        {
          name: "T",
          msg: ["天津", "唐山", "太原", "铁岭", "泰州", "台州", "泰安"]
        },
        {
          name: "W",
          msg: ["无锡", "温州", "芜湖", "威海", "潍坊", "武汉", "乌鲁木齐"]
        },
        {
          name: "X",
          msg: [
            "忻州",
            "徐州",
            "厦门",
            "新乡",
            "孝感",
            "西双版纳",
            "西安",
            "咸阳",
            "西宁",
            "香港"
          ]
        },
        {
          name: "Y",
          msg: ["扬州", "盐城", "烟台", "宜昌", "玉溪", "延安", "银川"]
        },
        {
          name: "Z",
          msg: [
            "舟山",
            "淄博",
            "郑州",
            "株洲",
            "张家界",
            "肇庆",
            "珠海",
            "张掖",
            "中卫"
          ]
        }
      ],
      arr4: [
        { name: "全部", class: "el-icon-menu" },
        { name: "演唱会", class: "" },
        { name: "LiveHouse", class: "" },
        { name: "音乐会", class: "" },
        { name: "舞蹈芭蕾", class: "" },
        { name: "话剧歌剧", class: "" },
        { name: "其他演出", class: "el-icon-more" }
      ],
      bbb: false,
      arrs: [],
      ccc: false
    };
  },
  props: ["aaa"],
  methods: {
    show(val) {
      this.msg = val;
    },
    show2(ins) {
      $(".Ticketing .ul").scrollTop(this.arrs[ins]);
      setTimeout(this.show3, 500);
    },
    show3() {
      var top = $(".Ticketing .ul").offset().top;
      for (var i = 0; i < $(".Ticketing .ul .li").length; i++) {
        this.arrs.push(
          $(".Ticketing .ul .li")
            .eq(i)
            .offset().top - top
        );
      }
    },
    show4() {
      var tath = this;
      var top = $(".bottom").offset().top;
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      body.onscroll = function() {
        if (top < html.scrollTop) {
          tath.ccc = true;
        } else {
          tath.ccc = false;
        }
      };
    },
    shows(val) {
      $(".bottom > div")
        .eq(val)
        .addClass("luse")
        .siblings()
        .removeClass("luse");

        this.$emit('chuanzhi',val)


    }
  },
  mounted() {
    this.show4();
    this.shows(0)
  }
};
</script>

<style   scoped>
.Ticketing {
  width: 1300px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.div div {
  position: relative;
  display: inline-block;
}
.div .flse {
  float: right;
  cursor: pointer;
}
.div .flse:hover {
  color: #31c27c;
}
.div .flse i {
  font-size: 18px;
  margin-left: 15px;
}
.div .div2 {
  line-height: 50px;
}
.div .shanghai {
  text-align: center;
  width: 146px;
  height: 50px;
  border: 1px solid rgb(207, 201, 201);

  cursor: pointer;
  margin-right: 20px;
  color: gray;
}
.div .shanghai:hover {
  color: #31c27c;
}
.div .div2 span {
  margin-right: 6px;
}
.input {
  width: 489px;
  height: 50px;
  border: 1px solid rgb(207, 201, 201);
  line-height: 50px;
}
.input input {
  border: none;
  padding-left: 20px;
  font-size: 18px;
  width: 80%;
}
.input .but {
  width: 48px;
  height: 48px;
  background-color: #31c27c;
  text-align: center;
  line-height: 48px;
  color: white;
  float: right;
  font-size: 20px;
  cursor: pointer;
}

.div .box {
  color: black;
  position: absolute;
  width: 490px;
  height: 410px;
  background-color: white;
  top: 60px;
  left: -3px;
  z-index: 9;
  box-shadow: 1px 1px 5px black;
  padding: 20px;
  font-size: 15px;
  cursor: initial;
  display: none;
}
.xox {
  display: block !important;
}
.box .top {
  width: 100%;
  border-bottom: 1px solid rgb(214, 204, 204);
  text-align: left;
}
.span {
  color: gray;
  margin-right: 20px;
  cursor: initial;
}
.top p span:hover {
  color: #31c27c;
  cursor: pointer;
}
.box .main {
  line-height: 35px;
  width: 100%;
  word-break: break-all;
  margin-bottom: 10px;
}
.box .main span {
  font-size: 14px;
  padding: 2px 5px;
  background-color: rgb(226, 223, 223);
  color: rgb(68, 56, 56);
  cursor: pointer;
  margin-right: 14px;
}
.box .main span:hover {
  color: #31c27c;
}
.box .main .span3 {
  background-color: #31c27c;
  color: white;
}
.ul {
  overflow-y: scroll;
  height: 160px;
}
.li {
  display: block !important;
  /* border: 1px solid red; */
  line-height: initial;
  margin-bottom: 8px;
}
.span4:hover {
  cursor: pointer;
  color: #31c27c;
}

.bottom {
  margin-top: 20px;
  width: 1300px;
  margin: 20px auto;
}
.bottom div {
  display: inline-block;
  width: 14.28%;
  height: 90px;
  text-align: center;
  font-size: 18px;
  line-height: 90px;
  color: rgb(49, 46, 46);
  cursor: pointer;
}
.bottom div:hover {
  color: #31c27c;
}
.luse {
  color: #31c27c !important;
}
.bottom i {
  font-size: 22px;
}
.fixed {
  width: 100vw;
  min-width: 1300px;
  position: fixed;
  top: -20px;
  left: 0px;
  background-color: white;
  z-index: 10;
}
.dvi {
  margin-bottom: 125px;
}
</style>














