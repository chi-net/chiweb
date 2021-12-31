<template>
  <div id="toolbar">
    <Card>
      <img src="../assets/icon.jpg" id="chiimg">
      <h2>{{$t('title')}}</h2>
    </Card>
    <Card>
      <div id="gallerys-control">
        <div><a @click="poster('previous')">&lt;{{$t('previous')}}</a></div>
        <div><a @click="poster('change')">{{$t('backgroundimage')}}</a></div>
        <div><a @click="poster('next')">{{$t('next')}}&gt;</a></div>
      </div>
    </Card>
    <Card id="group2">
      <a @click="changeCH()" id="showcopyright">{{$t('showcpr')}}</a>
      <a @click="this.$router.push('/settings')">{{$t('settings')}}</a>
    </Card>
    <Card id="translations">
      <span id="translations-img"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg></span>
      <a id="zh" @click="locate('cn')" :class="{ chose: (this.$i18n.locale == 'cn')?true:false }">简体中文</a>&nbsp;
      <a id="en" @click="locate('en')" :class="{ chose: (this.$i18n.locale == 'en')?true:false }">English</a>
    </Card>
    <Card id="fonts">
      <span id="fonts-img">字/A</span>
      <a id="notosans" @click="font('Noto Sans SC')" :class="{ chose: (this.$store.state.font == 'Noto Sans SC')?true:false }">Noto Sans</a>
      <a id="notoserif" @click="font('Noto Serif SC')" :class="{ chose: (this.$store.state.font == 'Noto Serif SC')?true:false }">Noto Serif</a>
    </Card>
  </div>
</template>
<script>
/* eslint-disable */
/* What a s**t for you! */
import Card from './Card.vue'
export default {
  name: 'Toolbar',
  compoents: {
    Card
  },
  methods: {
    changeCH () {
      this.$store.commit('changeCH')
      console.log('What>>')
    },
    locate (lang) {
      this.$i18n.locale = lang
      console.log(this.$i18n.locale)
    },
    poster (action) {
      switch (action) {
        case 'previous' :
          // do something qwq
          console.log('action.previous')
          // change the background gallery to previous page.
          break
        case 'next' :
          // do something qwq
          console.log('action.next')
          // change the background gallery to next page normally in 2s
          break
        case 'change' :
          // do something qwq
          console.log('action.change')
          // change the background photo gallery.
          break
        default :
      // nothing in this space!
      }
      alert('开发中qwq......')
    },
    font (font) {
      this.$store.commit('setFont', font)
    }
  }
}
</script>
<style lang="less" scoped>
// vars
@onethird: 33%;// 1/3
@import "../style/fucntions.less";
@import "../style/setting_vars.less";
// vars end
.aroundflex {
  display: flex;
  justify-content: space-around;
}
.betweenflex {
  display: flex;
  justify-content: space-between;
}
// flex end
#toolbar{
  overflow-y: auto !important;
}
#showcopyright {
  padding-top: 3px;
  padding-bottom: 3px;
  display: block;
  text-decoration: none !important;
  .pointer-cursor();
}
#gallery-control {
  .betweenflex();
  .pointer-cursor();
}
#group2 {
  .aroundflex();
  .pointer-cursor();
}
#chiimg {
  border-radius: 256px;
  width: 40%;
}
.chose{
  color: red !important;
}
#translations {
  .aroundflex();
  a {
    .pointer-cursor();
  }
  svg {
    height: @basicfont * 1.5;
  }
}
#fonts {
  .aroundflex();
  a {
    .pointer-cursor();
  }
}
</style>
