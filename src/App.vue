<template>
  <div id="app">
    <div class="container">
      <Card>
        <img src="./assets/icon.jpg" id="chiimg">
        <h2>chihuo2104の小站</h2>
        <ToolCard>
          <div class="btn-group">
            <button class="mdui-btn-block">&lt;上一张</button>
            <button class="mdui-btn-block">背景图片</button>
            <button class="mdui-btn-block">下一张&gt;</button>
          </div>
        </ToolCard>
        <div id="show">
          <button class="mdui-btn-block" onclick='changeCopyright()'>显示版权页</button>
        </div>
      </Card>
      <Card>
        <h1>个人网站</h1>
        <h1>提示！</h1>
        <h1>本站目前还正在开发中，为您展示的是正在开发的版本，本站暂定版本号：Moe Edition。（版本更新记录详见
          <a href="//history.moekonnyaku.com/newer-log.html" target="_blank">history.moekonnyaku.com/newer-log.html</a>）建议您去我的
          <a href="//blog.chihuo2104.dev" target="_blank">blog</a>逛一下~</h1>
        <h2>占位符啦啦啦啦啦<br><br><br><br><br></h2>
      </Card>
      <Card>
        <h1>友情链接</h1>
        <h2>占位符啦啦啦啦啦<br><br><br><br><br></h2>
      </Card>
    </div>
    <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
      Powered by chihuo2104 &amp; Ray. All rights reserved &copy;2018-{{new Date().getFullYear()}}.
      <br>
      Chiweb Application Version:V3.0(Moe)[Preview Edition].Packaged Date:2021-09-20.
      <br>
      Engined by <a href="//cn.vuejs.org" target="blank">Vue</a>&amp;<a href="//nodejs.org" target="blank">Node.js</a>&amp;<a href="//webpack.js.org" target="blank">Webpack</a>.
      本站已经在互联网的角落苟且偷生了<span id="checkday">0</span>天<span id="checkhour">0</span>小时<span id="checkmin">0</span>分钟<span id="checksec">0</span>秒
    </div>
  </div>
</template>
<script>
import Card from './components/Card.vue'
import ToolCard from './components/ToolCard.vue'
export default {
  name: 'App',
  components: {
    Card,
    ToolCard
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.btn-group {
  display: flex;
  justify-content: center;
}

#app {
  font-family: "Noto Serif SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
  grid-auto-rows: max-content;
  justify-content: center;
  min-height: 100vh;
}

.hidden {
  visibility: hidden;
}

#chiimg {
  border-radius: 256px;
  width: 40%;
}

@media screen and (min-width: 768px) {
  html {
    background-image: url("//cdn.akdoctor.club/79315b2c-8056-4ae8-8b3c-d72c14938064.jpg");
  }

  #app {
    margin: 0 auto 0;
  }
}

@media screen and (max-width: 768px) {
  html {
    background-image: url("https://akdc-1301312850.cos.ap-nanjing.myqcloud.com/P7ZBA%7B%5DHNF)6)ZAXE85%5DV%248.png");
  }

  #app {
    margin-top: 48px;
    display: block;
  }
}

html {
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow-x: hidden;
  word-wrap: break-word;
  word-break: normal;
}

#copyright {
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 10px;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
}

#show {
  border-top: 1px solid #000;
  padding-top: 3px;
  padding-bottom: 3px;
  display: block;
}
</style>
