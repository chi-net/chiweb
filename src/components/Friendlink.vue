<template>
  <div id="app"  class="allwidth">
    <Card class="scroll">
      <h1>友情链接</h1>
      <div v-for="i in links" :key="i.name">
        <a :href="i.site" target="blank" :key="i.site">{{i.name}}</a><br>
      </div>
      <h2>已加入萌备，备案号：萌ICP备-20212104号</h2>
      <h2>占位符啦啦啦啦啦</h2>
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
        if (this.$store.development) { console.log(response.data) }
        this.info = response.data
        if (this.$store.development) { console.log(response.info) }
      })
      .then(() => {
        if (this.$store.development) { console.log(this.info) }
        this.info.forEach(element => {
          if (this.$store.development) { console.log(this.links) }
          if (this.$store.development) { console.log(element) }
          axios
            .get('https://cdn.jsdelivr.net/gh/chihuo2104/friends/friends/' + element)
            .then(response => (this.links.push(response.data)))
          if (this.$store.development) { console.log(this.links) }
        })
      })
      .then(() => {
        if (this.$store.development) { console.log(this.links) }
      })
  },
  data () {
    return {
      info: new Array([]),
      links: new Array([]),
      index: 1
    }
  }
}
</script>
<style>
</style>
