<template>
  <div id="app"  class="allwidth">
    <Card class="scroll">
      <h1>个人网站</h1>
      <div v-if="checkdate(10,24)">Happy 1024 Coding!🎉</div>
      <div v-if="checkdate(11,1)">Happy Halloween!🎃🎉</div>
      <div v-if="checkdate(12,25)">Merry Christmas!🎅🎉</div>
      <div v-if="checkdate(10,14)">建站{{(new Date().getFullYear()) - 2018}}周年啦！</div>
      <h2>提示！</h2>
      <div>本站目前还正在开发中，为您展示的是正在开发的版本，本站暂定版本号：Moe Edition。（版本更新记录详见
        <a href="//history.moekonnyaku.com/newer-log.html" target="_blank">history.moekonnyaku.com/newer-log.html</a>）建议您去我的
        <a href="//blog.chihuo2104.dev" target="_blank">blog</a>逛一下~
      </div>
      <div>占位符啦啦啦啦啦<br><br><br><br><br></div>
      <!-- <br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br><br><br><br><br> -->
    </Card>
  </div>
</template>
<script>
export default {
  methods: {
    checkdate (month, day) {
      return ((new Date().getMonth() + 1) === month) && ((new Date().getDate()) === day)
    }
  }
}
</script>
<style>
</style>
