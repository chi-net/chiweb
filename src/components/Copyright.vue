<template>
  <div id="copyright" :class="{'hidden':this.$store.state.isCopyrightHidden}">
    Powered by <a href="//im.chihuo2104.dev" target="_blank">chihuo2104</a> &amp; <a href="//raycoder.me" target="blank">Ray</a>. All rights reserved &copy;2018-{{new Date().getFullYear()}}.
    <br>
    <a href="//github.com/chihuo2104/chiweb/" target="_blank">Chiweb</a> Application Version:V3.0(Moe)[Preview Edition].Packaged Date:2021-10-30.
    <br>
    Engined by <a href="//cn.vuejs.org" target="blank">Vue</a>&amp;<a href="//nodejs.org" target="blank">Node.js</a>&amp;<a href="//webpack.js.org" target="blank">Webpack</a>&amp;<a target="_blank" href="//jenkins.io">Jenkins</a>.<a href="//icp.gov.moe/?keyword=20212104" target="_blank">{{$t('moenum')}}</a>
    <br>{{$t('showalive')}}{{aliveshow}}<!--<span id="checkday">0</span>天<span id="checkhour">0</span>小时<span id="checkmin">0</span>分钟<span id="checksec">0</span>秒--><br>
    {{$t('statement1')}}<a href="//hypergryph.com" target="_blank">{{$t('hy')}}</a>和<a href="//www.mihoyo.com" target="_blank">{{$t('mhy')}}</a>{{$t('statement2')}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      alive: {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0
      },
      starttime: 1632110400
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.alive = {
        day: parseInt(parseInt(Math.round(new Date() / 1000) - this.starttime) / (60 * 60 * 24)),
        hour: parseInt((parseInt(Math.round(new Date() / 1000) - this.starttime) % (60 * 60 * 24) / (60 * 60))),
        min: parseInt(((parseInt(Math.round(new Date() / 1000) - this.starttime) % (60 * 60 * 24) % (60 * 60)) / 60)),
        sec: parseInt(((parseInt(Math.round(new Date() / 1000) - this.starttime) % (60 * 60 * 24) % (60 * 60)) % 60))
      }
    }, 1000)
  },
  destoryed () {
    clearInterval(this.timer)
  },
  computed: {
    aliveshow: {
      get () {
        return this.$t('times', { day: this.alive.day, hour: this.alive.hour, min: this.alive.min, sec: this.alive.sec })
      }
    }
  }
}
</script>
<style scoped>
</style>
