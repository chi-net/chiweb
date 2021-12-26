<template>
  <div id="settings" class="scroll">
    <Card>
      <h1>设置</h1>
      <br><br>
      <hr>
      Powered by chihuo2104. All rights reserved &copy;2018-{{ new Date().getFullYear() }}
    </Card>
  </div>
  <Gallery></Gallery>
</template>
<script>
import Gallery from '@/components/Gallery.vue'
export default {
  components: {
    Gallery
  }
}
</script>
<style lang="less">
// Synced from Index.vue
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
// a attr end
html{
  width:100%;
  height:100%;
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
#settings {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: fixed;
}
</style>
