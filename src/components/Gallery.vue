<template>
  <div id="gallery">
    <img id="gallery-img" :src="imgpath" :title="imgdesc">
    <!-- <img id="sm" src="../assets/gallerys/arknights/sm-1.png"> -->
  </div>
</template>
<script>
export default {
  data () {
  },
  computed: {
    imgpath () {
      return '/gallerys/' + this.$store.state.currentGallery.set + '/' + this.$store.state.currentGallery.type + '-' + this.$store.state.currentGallery.no
    },
    imgdesc () {
      return this.set + '/' + this.no
    }
  }
}
</script>
<style lang="less" scoped>
#gallery-img{
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  bottom: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
}
</style>
