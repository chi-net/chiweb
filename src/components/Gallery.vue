<template>
  <div id="gallery">
    <img id="bg" :src="imgpath">
    <!-- <img id="sm" src="../assets/gallerys/arknights/sm-1.png"> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      set: 'arknights',
      type: 'bg',
      no: '3.jpg'
    }
  },
  computed: {
    imgpath () {
      return '../assets/gallerys' + this.set + '/' + this.type + '-' + this.no
    }
  }
}
</script>
<style lang="less" scoped>
#bg,#sm{
  padding:0px;
  margin: 0px;
  width:100%;
  height:100%;
  z-index:-1;
}
#gallery{
  z-index:-1;
  width:100%;
  height:100%;
  padding:0px;
  margin:0px;
}
@media screen and (min-width:768px){
  #sm{
    display:none;
  }
  #bg{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
}
@media screen and (max-width:768px){
  #bg{
    display:none;
  }
}
</style>
