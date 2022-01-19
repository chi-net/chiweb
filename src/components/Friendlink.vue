<template>
  <div id="friendlink">
    <Card class="scroll">
      <h1>{{$t('friendlink')}}</h1>
      <div v-for="i in links" :key="i.name">
        <a :href="i.site" target="_blank" :key="i.site" :title="i.describe">{{i.name}}</a><br>
      </div>
      <p>{{$t('moeicp')}}</p>
      <p>{{$t('zwf')}}</p>
    </Card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    axios
      .get('https://cdn.jsdelivr.net/gh/chihuo2104/friends/friends/index.json')
      .then(response => {
        // console.log(response)
        this.info = response.data
      })
      .then(() => {
        this.info.forEach(element => {
          axios
            .get('https://cdn.jsdelivr.net/gh/chihuo2104/friends/friends/' + element)
            .then(response => (this.links.push(response.data)))
        })
      })
  },
  data () {
    return {
      info: [],
      links: [],
      index: 1
    }
  }
}
</script>
<style>
</style>
