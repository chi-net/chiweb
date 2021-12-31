<template>
  <div id="app" :style={fontFamily:ff}>
    <div class="container">
      <div><Toolbar class="flex-grow-1"></Toolbar></div>
      <div><IndexCard class="flex-grow-2"></IndexCard></div>
      <div><Friendlink class="flex-grow-2"></Friendlink></div>
    </div>
    <Gallery></Gallery>
    <Copyright></Copyright>
  </div>
</template>
<script>
import IndexCard from '@/components/IndexCard.vue'
import Toolbar from '@/components/Toolbar.vue'
import Friendlink from '@/components/Friendlink.vue'
import Gallery from '@/components/Gallery.vue'
import Copyright from '@/components/Copyright.vue'
export default {
  name: 'App',
  components: {
    Toolbar, IndexCard, Friendlink, Gallery, Copyright
  },
  computed: {
    ff () {
      return this.$store.state.font
    }
  }
}
document.title = 'chihuo2104の小站'
</script>

<style lang="less">
// vars
@import "../style/importme.less";
// @smbk-img: 'url("./assets/gallerys/arknights/sm-1.jpg")';
// @bgbk-img: 'url("./assets/gallerys/arknights/bg-1.jpg")';
// vars end
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgba(255,255,255,0);
}
html{
  width:100%;
  height:100%;
}
// container all thing.
.container {
  text-align: center;
  display: flex;
  z-index: 9999;
  background-color: rgba(255,255,255,0);
  @media screen and (max-width: @sm) {
    // Mobile version for resp.
    flex-direction: column;
  }
  @media screen and (min-width: @sm) {
    align-items: stretch;
  }
}
</style>
