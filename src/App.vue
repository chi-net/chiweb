<template>
  <div id="app">
    <Gallery></Gallery>
    <div class="container">
      <Toolbar></Toolbar>
      <IndexCard></IndexCard>
      <Friendlink></Friendlink>
    </div>
    <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
      Powered by <a href="//im.chihuo2104.dev" target="_blank">chihuo2104</a> &amp; <a href="//raycoder.me" target="blank">Ray</a>. All rights reserved &copy;2018-{{new Date().getFullYear()}}.
      <br>
      <a href="//github.com/chihuo2104/chiweb/" target="_blank">Chiweb</a> Application Version:V3.0(Moe)[Preview Edition].Packaged Date:2021-10-17.
      <br>
      Engined by <a href="//cn.vuejs.org" target="blank">Vue</a>&amp;<a href="//nodejs.org" target="blank">Node.js</a>&amp;<a href="//webpack.js.org" target="blank">Webpack</a>&amp;<a target="_blank" href="//jenkins.io">Jenkins</a>.<a href="//icp.gov.moe/?keyword=20212104" target="_blank">萌ICP备20212104号</a>
      <br>本站已经在互联网的角落苟且偷生了<!--{{aliveshow}}--><span id="checkday">0</span>天<span id="checkhour">0</span>小时<span id="checkmin">0</span>分钟<span id="checksec">0</span>秒<br>
      版权声明：部分背景图片版权由<a href="//hypergryph.com" target="_blank">上海市鹰角网络科技有限公司</a>和<a href="//www.mihoyo.com" target="_blank">上海市米哈游影铁科技有限公司</a>所有
    </div>
  </div>
</template>
<script>
import IndexCard from './components/IndexCard.vue'
import Toolbar from './components/Toolbar.vue'
import Friendlink from './components/Friendlink.vue'
import Gallery from './components/Gallery.vue'
export default {
  name: 'App',
  components: {
    Toolbar, IndexCard, Friendlink, Gallery
  },
  data () {
    return {
      alive: {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0
      }
    }
  },
  mounted () {
    this.timer = setInterval(function () {
      this.alive = { day: 1, hour: 2, min: 3, sec: 4 }
    }, 1000)
  },
  computed: {
    aliveshow: {
      get () {
        return this.alive.day + '日' + this.alive.hour + '时' + this.alive.min + '分' + this.alive.sec + '秒'
      }
    }
  }
}
</script>

<style>
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
  /* background-color: #fff !important; */
  /* background-image:none !important;/*Gallery写完之后是很有用哒~ */
}
#app {
  font-family: "Noto Serif SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgba(255,255,255,0);
  transition:all 2s ease-in-out;
  z-index:9999;
}

.container {
  text-align: center;
  display: grid;
  grid-auto-rows: max-content;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(255,255,255,0);
}

@media screen and (min-width: 768px) {/*大屏适配 */
  html {
    overflow-y:hidden !important;
    /*过渡期使用 */
    background-image:url("./assets/gallerys/arknights/bg-1.jpg");
  }
  #app {
    margin: 0 0 0;
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
  h1{
    font-size:1.5em;
  }
  h2{
    font-size:1.3em;
  }
  div,Card,#copyright{
    font-size:1.2em;
  }
}

@media screen and (max-width: 768px) {/*小屏适配* */
  html{
    /*过渡期使用 */
    background-image:url("./assets/gallerys/arknights/sm-1.png");
  }
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
