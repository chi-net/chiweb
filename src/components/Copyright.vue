<template>
  <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
    Powered by <a href="//im.chihuo2104.dev" target="_blank">chihuo2104</a> &amp; <a href="//raycoder.me" target="blank">Ray</a>. All rights reserved &copy;2018-{{new Date().getFullYear()}}.
    <br>
    <a href="//github.com/chihuo2104/chiweb/" target="_blank">Chiweb</a> Application Version:V3.0(Moe)[Preview Edition].Packaged Date:2021-10-24.
    <br>
    Engined by <a href="//cn.vuejs.org" target="blank">Vue</a>&amp;<a href="//nodejs.org" target="blank">Node.js</a>&amp;<a href="//webpack.js.org" target="blank">Webpack</a>&amp;<a target="_blank" href="//jenkins.io">Jenkins</a>.<a href="//icp.gov.moe/?keyword=20212104" target="_blank">萌ICP备20212104号</a>
    <br>本站已经在互联网的角落苟且偷生了{{aliveshow}}<!--<span id="checkday">0</span>天<span id="checkhour">0</span>小时<span id="checkmin">0</span>分钟<span id="checksec">0</span>秒--><br>
    版权声明：部分背景图片版权由<a href="//hypergryph.com" target="_blank">上海市鹰角网络科技有限公司</a>和<a href="//www.mihoyo.com" target="_blank">上海市米哈游影铁科技有限公司</a>所有
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
</style>
