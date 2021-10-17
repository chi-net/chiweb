<template>
  <div id="gallery">
    <!-- <img id="bg" src="../assets/gallerys/arknights/bg-1.jpg">
    <img id="sm" src="../assets/gallerys/arknights/sm-1.png"> -->
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
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
}
@media screen and (max-width:768px){
  #bg{
    display:none;
  }
}
</style>
