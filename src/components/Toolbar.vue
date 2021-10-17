<template>
  <div id="app">
    <Card>
      <img src="../assets/icon.jpg" id="chiimg">
      <h2>chihuo2104の小站</h2>
    </Card>
    <Card>
      <div class="btn-group">
        <a @click="poster('previous')">&lt;上一张</a>|
        <a @click="poster('change')">背景图片</a>|
        <a @click="poster('next')">下一张&gt;</a>
      </div>
    </Card>
    <Card>
      <a @click="changeCH()" id="showcopyright">显示版权页</a>
    </Card>
  </div>
</template>
<script>
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
</style>
