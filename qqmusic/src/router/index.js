import Vue from 'vue'
import Router from 'vue-router'

// 导入页面
import HomePage from "../pages/HomePage"         //首页
import ClientPage from "../pages/ClientPage"     //客户端
import MinePage from "../pages/MinePage"         //我的音乐
import MusicPage from "../pages/MusicPage"       //音乐号
import VipPage from "../pages/VipPage"           //VIP

// 二级页面
import SingerPage from "../pages/SingerPage"                 //歌手
import PlatePage from "../pages/PlatePage"                   //新碟
import RankingPage from "../pages/RankingPage"               //排行榜
import BroadcastingPage from "../pages/BroadcastingPage"     //电台
import MvPage from "../pages/MvPage"                         //MV
import FigurePage from "../pages/FigurePage"                 //数字专辑
import ticketingPage from "../pages/ticketingPage"           //票务
import ClassifyPage from "../pages/ClassifyPage"             //分类歌单

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/client', component: ClientPage },      //客户端
    { path: '/mine', component: MinePage },         //我的音乐
    { path: '/music', component: MusicPage },      //音乐号
    { path: '/vip', component: VipPage },         //VIP

    // 二级页面

    { path: '/Singer', component: SingerPage },              // 歌手                                                                      
    { path: '/Plate', component: PlatePage },                // 新碟                                              
    { path: '/Ranking', component: RankingPage },            // 排行榜                                                  
    { path: '/Broadcasting', component: BroadcastingPage },  // 电台                                                           
    { path: '/Mv', component: MvPage },                      // Mv                                         
    { path: '/Figure', component: FigurePage },              // 数字专辑                                                 
    { path: '/ticketing', component: ticketingPage },        // 票务                                                       
    { path: '/Classify', component: ClassifyPage },          // 分类歌单                                                   






  ]
})
