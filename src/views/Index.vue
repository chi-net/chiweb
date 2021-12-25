<template>
  <div id="app" :style={fontFamily:ff}>
    <div class="container">
      <Toolbar></Toolbar>
      <IndexCard></IndexCard>
      <Friendlink></Friendlink>
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
  display: grid;
  grid-auto-rows: max-content;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(255,255,255,0);
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
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
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
  // html{
    // background-image: @smbk-img;
  // }
  .container{
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));;
    grid-template-rows: auto;
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
</style>
