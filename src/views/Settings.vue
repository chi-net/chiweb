<template>
  <div id="settings" class="scroll">
    <Card>
      <h1>设置</h1>
      <h2>调整Gallery&nbsp;<small>仅供调试!</small></h2>
      CurrentValue:<br>
      {{this.$store.state.currentGallery}}<br>
      Set:
      <select v-model="gallery.set">
        <option value="arknights">Arknights</option>
        <option value="genshin">Genshin Impact</option>
      </select><br>
      Type:
      <select v-model="gallery.type">
        <option value="sm">SM(手机端)</option>
        <option value="bg">BG(电脑端)</option>
      </select><br>
      No:
      <input v-model="gallery.no">
      <br>
      <button @click="updateGallery()">点我更改</button>
      <br>
      请到https://cdn.jsdelivr.net/gh/chihuo2104/chiweb@dev/public/gallerys/ 里面去浏览No!
      <br>
      <a href="#" @click="this.$router.push('/')">返回主页</a>
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
  },
  data () {
    return {
      gallery: {
        set: this.$store.state.currentGallery.set,
        type: this.$store.state.currentGallery.type,
        no: this.$store.state.currentGallery.no
      }
    }
  },
  methods: {
    updateGallery () {
      this.$store.commit('setGallery', this.gallery)
    }
  }
}
</script>
<style lang="less">
@import "../style/importme.less";
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
