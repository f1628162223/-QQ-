


<!-- 电台  -->


<template>
  <div class="Slideshow">


    <!-- <div class="div3">
            <i class="el-icon-caret-right"></i>
    </div>-->

    <div class="box">
      <div class="L22">
        <p v-for="(item,index) in aaa"  @click="show(index)">{{ item.name }} <span> </span> </p>
      </div>
      <div class="R11" v-for="(item,index) in aaa">
          <p> {{ item.name }} </p>
          <div class="div" v-for="(key,ins) in item.arr">
             <div class="img">
               <div class="div3">
                   <i class="el-icon-caret-right"></i>
               </div>
               <img :src="key.ur" alt="">
             </div>
            <p> {{ key.name }} </p>
            <span> 播放量 :  {{   key.quantity }}万 </span>
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
      bbb: 0,
      classify: ["内地", "港台", "欧美", "韩国", "日本", "其他"]
    };
  },
  props: ["aaa"],
  mounted() {
     setTimeout(this.show, 500);
  },

  methods: {
      show(val){
         var arr = []
         var body = document.querySelector('body')
         var html = document.querySelector('html')

        for(var i=0;i<$('.R11').length;i++){
            arr.push( $('.R11').eq(i).offset().top - 100)
        }

         $('html').scrollTop(arr[val])

      

        body.onscroll = function(){
            var top =  html.scrollTop
            if(top<8700 && top > 100 ){
           $('.L22').css({
                top:top -100
            })
            }


        for(var i =arr.length-1 ;i>=0 ;i-- ){
            if(top  >= arr[i] ){
   
                    $('.L22 p').eq(i).addClass('p').siblings().removeClass('p')
                break
            }
        }



        
        }


      }

  }
};
</script>


<style scoped>
.Slideshow {
  background: url("../assets/bg_detail.jpg") 50% 0 repeat-x;
  padding-top: 40px;
  overflow: hidden;
  min-width: 1300px;
}

.box {
  width: 1300px;
  margin: 0 auto;
  /* border: 1px solid red; */
  overflow: hidden;
  padding: 10px;
  position: relative;
}
.box .L22 {
  /* border: 1px solid black; */

  width: 100px;
  height: 600px;
  position: absolute;
  top: 10px;
  left: 35px;
}
.box .L22 p {
  text-align: center;
  margin-bottom: 30px;
  padding: 5px 0;
  /* border-bottom: 1px solid #31c27c; */
  cursor: pointer;
  position: relative;
}
.box .L22 p:hover {
  color: #31c27c;
}
.box .L22 .p{
     color: #31c27c;
}
.box .L22 p span{
  width: 22px;
  height: 2px;
  background-color: rgb(226, 222, 222);
  display: inline-block;
  position: absolute;
  left: -10px;
  top: 15px;
}
.box .L22 .p span{
  background-color: #31c27c;
}

.box .R11 {
  /* border: 1px solid black; */
  width: 1000px;
  float: right;
  padding: 5px;
  margin-bottom: 25px;

}

.R11 .div {
    display: inline-block;
    width: 25%;
    /* border: 1px solid red; */
    margin-bottom: 30px;
    font-size: 14px;
}
.R11 .div p{
  margin-top: 8px;
}
.R11 .div span{
    color: gray;
       font-size: 13px;
} 
.R11 > p {
 
  color: gray;
  margin-bottom: 20px ;
  border-bottom: 1px solid rgb(228, 224, 224);
  padding-bottom: 15px
}

.R11  .div .img{
  
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.div .img img{
  width: 100%;
  height: 100%;
   

}

 .div .img:hover .div3{
   opacity: 1;
   transition: .5s;
   z-index: 2;
   transform: scale(1.5)
 }
 .div .img:hover img{
   opacity: 0.9;
      transition: .5s;
   transform: scale(1.2)
 }


/* 播放图 */
.div3 {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  line-height: 30px;
  opacity: 0;
  position: absolute;
  left: calc(100% - 56%);
  top: calc(100% - 65%);
  text-align: center;
}
.div3 i {
  color: gray;
  font-size: 20px;
}
</style>
















