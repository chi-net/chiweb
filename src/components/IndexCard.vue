<template>
  <div id="app"  class="allwidth">
    <Card class="scroll">
      <h1>{{$t('personalweb')}}</h1>
      <div v-if="checkdate(10,24)">Happy 1024 Coding!🎉</div>
      <div v-if="checkdate(10,31)">Happy Halloween!🎃🎉</div>
      <div v-if="checkdate(12,25)">Merry Christmas!🎅🎉</div>
      <div v-if="checkdate(10,14)">建站{{(new Date().getFullYear()) - 2018}}周年啦！</div>
      <h2>{{$t('tips')}}</h2>
      <div>
        {{$t('developing1')}}
        <a href="//history.chihuo2104.dev/newer-log.html" target="_blank">history.chihuo2104.dev/newer-log.html</a>
        {{$t('developing2')}}
        <a href="//blog.chihuo2104.dev" target="_blank">blog</a>
        {{$t('developing3')}}
      </div>
      <div>{{$t('zwf')}}<br><br><br><br><br></div>
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
