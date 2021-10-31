<template>
  <div id="toolbar">
    <Card>
      <img src="../assets/icon.jpg" id="chiimg">
      <h2>{{$t('title')}}</h2>
    </Card>
    <Card>
      <div class="btn-group">
        <a @click="poster('previous')">&lt;{{$t('previous')}}</a>|
        <a @click="poster('change')">{{$t('backgroundimage')}}</a>|
        <a @click="poster('next')">{{$t('next')}}&gt;</a>
      </div>
    </Card>
    <Card>
      <a @click="changeCH()" id="showcopyright">{{$t('showcpr')}}</a>
    </Card>
    <Card id="translations">
      <div id="translations-img"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg></div>
      <div id="zh" @click="locate('cn')">简体中文</div>
      <div id="en" @click="locate('en')">English</div>
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
    }
  }
}
</script>
<style scoped>
#toolbar{
  overflow-y: scroll !important;
}
.btn-group {
  /* display: flex;
  justify-content: center; */
  display:block;
}
.btn-group a {
  text-align:center;
  width:33%;
}
#chiimg {
  border-radius: 256px;
  width: 40%;
}
#translations{
  display:block;
  cursor:pointer;
}
#translations-img svg{
  height: 32px;
}
</style>
