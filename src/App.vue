<template>
  <div id="app">
    <div class="mdui-dialog" id="tips">
      <div class="mdui-dialog-title">提示</div>
      <div class="mdui-dialog-content">本站目前还正在开发中，为您展示的是正在开发的版本，本站暂定版本号：Moe Edition。（版本更新记录详见
      <a href="//history.moekonnyaku.com/newer-log.html" target="_blank">history.moekonnyaku.com/newer-log.html</a>）建议您去我的
      <a href="//blog.chihuo2104.dev" target="_blank">blog</a>逛一下~</div>
    </div>
    <card>
      <img src="./assets/icon.jpg" id="chiimg">
      <h2>chihuo2104の小站</h2>
      <tool-card>
      <button class="mdui-btn-block blc3">&lt;上一张</button>
      <button class="mdui-btn-block blc3">背景图片</button>
      <button class="mdui-btn-block blc3">下一张&gt;</button>
      </tool-card>
      <div id="show">
      <button class="mdui-btn-block" onclick='changeCopyright()'>显示版权页</button>
      </div>
    </card>
        <card>
      <h1>个人网站</h1>
      <h2>占位符啦啦啦啦啦<br><br><br><br><br></h2>
    </card>
        <card>
      <h1>友情链接</h1>
      <h2>占位符啦啦啦啦啦<br><br><br><br><br></h2>
    </card>
    <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
      Powered by chihuo2104.All rights reserved &copy;2018-{{new Date().getFullYear()}}
    </div>
  </div>
</template>
<script>
import card from './components/Card.vue';
import tool_card from './components/ToolCard.vue';
export default {
  name: 'App',
  components: {
    card,
    "tool-card":tool_card,
  },
}
</script>

<style>
.blc3{
  width:33%;
  float:left;
}
#app {
  font-family: "Noto Serif SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0 auto 0;
}
.hidden{
  bottom:-20px !important;
}
#chiimg{
  border-radius:256px;
  width:40%;
  height:40%;
}
html{
  background-image: url("//cdn.akdoctor.club/79315b2c-8056-4ae8-8b3c-d72c14938064.jpg");
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow-x:hidden;
  overflow-y:hidden;
}
#copyright{
  position:absolute;
  width:100%;
  bottom:0px;
  background-color:rgba(255,255,255,0.7);
  text-align:center;
  transition:all .3s ease-in-out;
}
#show{
    border-top:1px solid #000000;
    padding-top:3px;
    padding-bottom:3px;
    display:block;
}
</style>
