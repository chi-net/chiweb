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
export default {
}
</script>
<style scoped>

</style>
