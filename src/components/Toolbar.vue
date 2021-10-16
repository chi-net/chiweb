<template>
  <div id="app">
    <Card>
      <img src="../assets/icon.jpg" id="chiimg">
      <h2>chihuo2104の小站</h2>
    </Card>
    <Card>
      <div class="btn-group">
        <a href="javascript:previousPoster()">&lt;上一张</a>|
        <a href="javascript:backgroundPosterChoose()">背景图片</a>|
        <a href="javascript:nextPoster()">下一张&gt;</a>
      </div>
    </Card>
    <Card>
      <a href='javascript:changeCopyright()' id="showcopyright">显示版权页</a>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'Toolbar',
  compoents: {
    Card
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
