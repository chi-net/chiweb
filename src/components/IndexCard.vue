<template>
  <div id="app"  class="allwidth">
    <Card class="scroll">
      <h1>{{$t('personalweb')}}</h1>
      <div v-if="checkdate(10,24)">Happy 1024 Coding!🎉</div>
      <div v-if="checkdate(10,31)">Happy Halloween!🎃🎉</div>
      <div v-if="checkdate(12,25)">Merry Christmas!🎅🎉</div>
      <div v-if="checkdate(10,14)">建站{{(new Date().getFullYear()) - 2018}}周年啦！</div>
      <p v-for="i in list" :key="i.title">
        <a :key="i.site" :href="i.site" target="_blank" :title="i.desc">{{i.title}}</a>
      </p>
      <h3>{{$t('tips')}}</h3>
      <p>
        {{$t('developing1')}}
        <a href="//history.moekonnyaku.com/newer-log.html" target="_blank">history.moekonnyaku.com/newer-log.html</a>
        {{$t('developing2')}}
        <a href="//blog.chihuo2104.dev" target="_blank">blog</a>
        {{$t('developing3')}}
      </p>
      <p>{{$t('zwf')}}<br><br><br><br><br></p>
      <!-- <br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br><br><br><br><br> -->
    </Card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    checkdate (month, day) {
      return ((new Date().getMonth() + 1) === month) && ((new Date().getDate()) === day)
    }
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios
      .get('https://amilence.apps.chicdn.cn/api/v1/outer/chiweb/sites')
      .then((res) => {
        this.list = res.data
      })
  }
}
</script>
<style>
</style>
