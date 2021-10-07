<template>
  <div id="app">
    <div class="container">
      <div class="toolbar">
        <Card>
          <img src="./assets/icon.jpg" id="chiimg">
          <h2>chihuo2104の小站</h2>
        </Card>
        <Card>
          <div class="btn-group">
            <a href="javascript:previousPoster()">&lt;上一张</a>|
            <a href="javascript:backgroundPosterChoose()">背景图片</a>|
            <a href="javascript:nextPoster()">下一张&gt;</a>
          </div>
        </Card>
        <Card>
          <a href='javascript:changeCopyright()' id="showcopyright">显示版权页</a>
        </Card>
      </div>
      <div id="personal"  class="allwidth">
        <Card class="scroll">
          <h1>个人网站</h1>
          <h2>提示！</h2>
          <div>本站目前还正在开发中，为您展示的是正在开发的版本，本站暂定版本号：Moe Edition。（版本更新记录详见
            <a href="//history.moekonnyaku.com/newer-log.html" target="_blank">history.moekonnyaku.com/newer-log.html</a>）建议您去我的
            <a href="//blog.chihuo2104.dev" target="_blank">blog</a>逛一下~</div>
          <div>占位符啦啦啦啦啦<br><br><br><br><br></div>
          <!-- <br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br><br><br><br><br> -->
        </Card>
      </div>
      <div id="friends"  class="allwidth">
        <Card class="scroll">
          <h1>友情链接</h1>
          <h2>已加入萌备，备案号：萌ICP备-20212104号</h2>
          <h2>占位符啦啦啦啦啦</h2>
        </Card>
      </div>
    </div>
    <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
      Powered by <a href="//im.chihuo2104.dev" target="_blank">chihuo2104</a> &amp; <a href="//raycoder.me" target="blank">Ray</a>. All rights reserved &copy;2018-{{new Date().getFullYear()}}.
      <br>
      <a href="//github.com/chihuo2104/chiweb/" target="_blank">Chiweb</a> Application Version:V3.0(Moe)[Preview Edition].Packaged Date:2021-10-06.
      <br>
      Engined by <a href="//cn.vuejs.org" target="blank">Vue</a>&amp;<a href="//nodejs.org" target="blank">Node.js</a>&amp;<a href="//webpack.js.org" target="blank">Webpack</a>&amp;<a target="_blank" href="//jenkins.io">Jenkins</a>.<a href="//icp.gov.moe/?keyword=20212104" target="_blank">萌ICP备20212104号</a>
      <br>本站已经在互联网的角落苟且偷生了<span id="checkday">0</span>天<span id="checkhour">0</span>小时<span id="checkmin">0</span>分钟<span id="checksec">0</span>秒。<br>
      版权声明：部分背景图片版权由<a href="//hypergryph.com" target="_blank">上海市鹰角网络科技有限公司</a>和<a href="//www.mihoyo.com" target="_blank">上海市米哈游影铁科技有限公司</a>所有
    </div>
  </div>
</template>
<script>
import Card from './components/Card.vue'
export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
h1{
  font-size:1.5em;
}
h2{
  font-size:1.3em;
}
div,Card,#copyright{
  font-size:1.2em;
}
* {
  box-sizing: border-box;
}
a,a:visited,a:active{
  text-decoration: none !important;
  color:#00a !important;
}
a:hover{
  text-decoration: underline !important;
  color:#0af !important;
}
a{
  transition: color 0.8s ease-in-out !important;
}
html{
  width:100%;
  height:100%;
}
.btn-group {
  /* display: flex;
  justify-content: center; */
  display:block;
}
.btn-group a{
  text-align:center;
  width:33%;
}
#app {
  font-family: "Noto Serif SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgba(255,255,255,0);
  transition:all 2s ease-in-out;
}

.container {
  text-align: center;
  display: grid;
  grid-auto-rows: max-content;
  justify-content: center;
  background-color: rgba(255,255,255,0);
}

#chiimg {
  border-radius: 256px;
  width: 40%;
}
@media screen and (min-width: 768px) {
  html {
    overflow-y:hidden;
  }
  #app {
    margin: 0 auto 0;
  }
  .container{
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
  }
  #copyright{
    position: absolute;
    z-index:9999999;
  }
  .hidden{
    bottom:calc(3px - 25%) !important;
  }
  .allwidth{
    height:100%;
  }
  .scroll{
    overflow-y:scroll;
  }
}

@media screen and (max-width: 768px) {
  #app {
    margin-top: 48px;
    display: block;
  }
  .container{
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));;
    grid-template-rows: auto;
  }
  #copyright{
    position:relative;
  }
  .hidden {
    display:none;
  }
}

#copyright {
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(15px);
  text-align: center;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  bottom: 0;
  left:0;
  right:0;
  transition:all 2s ease-in-out;
}

#showcopyright {
  padding-top: 3px;
  padding-bottom: 3px;
  display: block;
  text-decoration: none !important;
  cursor:pointer;
}
</style>
