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
@basicfont: 18px;
// @smbk-img: 'url("./assets/gallerys/arknights/sm-1.jpg")';
// @bgbk-img: 'url("./assets/gallerys/arknights/bg-1.jpg")';
// vars end
// a
a, a:visited, a:active {
  text-decoration: none;
  color: #00a;
}
a {
  transition: color 0.8s ease-in-out !important;
  transition: font-size 0.8s ease-in-out !important;
}
a:hover{
  text-decoration: underline !important;
  color:#0af !important;
  font-size: @basicfont * 1.3;
}
// a attr end.
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgba(255,255,255,0);
  z-index:9999;
}
html{
  width:100%;
  height:100%;
}
// container all thing.
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(255,255,255,0);
}
.flex-grow{
  &-1 {
    flex-grow: 1;
  }
  &-2 {
    flex-grow: 2;
  }
}
// @media
@media screen and (min-width: 768px) {
  // desktop
  html {
    overflow-y:hidden !important;
    // passing
    // background-image: @bgbk-img;
  }
  #app {
    margin: 0 0 0;
  }
  .container{
    justify-content: center;
  }
  .allwidth{
    height: 100%;
  }
  .scroll{
    overflow-y: scroll;
  }
}

@media screen and (max-width: 768px) {
  // mobile
  .container{
    flex-direction: column;
  }
}
// all things in static font size.
h1{
  font-size: @basicfont * 1.8;
}
h2{
  font-size: @basicfont * 1.5;
}
div,Card,#copyright{
  font-size: @basicfont;
}
/*
  Copied from
  https://github.com/zdhxiong/mdui/blob/1fb7d4e013e5f690d10166e30035c418a26ee243/src/styles/mixin/helper.less
*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;
  // 桌面端
  @media (min-width: 768px) {
    width: 8px;
    height: 8px;
  }
}
</style>
