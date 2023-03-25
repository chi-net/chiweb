<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps({
  title: String,
  // content: String,
  img: String
})
const showImg = ref(false)
// console.log(props.img)
// console.log(props.img === undefined)
if (props.img !== '' && props.img !== undefined) {
  showImg.value = true
} else {
  showImg.value = false
}
</script>
<template>
  <div class="card">
    <img :src="props.img" alt="" v-if="showImg"/>
    <div><!-- Title & Content -->
      <h1>{{ props.title }}</h1>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// $font: 23px;
.card {
  $base: 18px;
  font-family: "PingFang SC", "MiSans", "OPPO Sans", "HarmonyOS Sans SC", "Noto Sans SC", "微软雅黑", "宋体", sans-serif;
  // Apple > Mi > OPPO > HUAWEI > Google > m$
  // width: 256px;
  // height: 512px;
  width: 100%;
  border-radius: 4px;
  border: solid 1px #ddd;
  // box-shadow: 0px 4px 5px rgba(0,0,0,0.1) 0px -3px 4px rgba(0,0,0,0.1);
  box-shadow: 0 2px 3px rgba(0,0,0,.1),0 -1px 1px rgba(0,0,0,.1);
  transition: box-shadow ease-out 0.1s;
  &:hover {
    box-shadow: 0 4px 3px rgba(0,0,0,.1),0 -4px 3px rgba(0,0,0,.1);
  }
  // margin: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  overflow-y: auto;
  div {
    padding-top: 4px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 8px;
    h1 {
      font-size: $base * 1.5;
    }
    div {
      padding: 0;
      font-size: $base;
      img {
        max-width: 95%;
      }
    }
  }
  img {
    width: 100%;
    // max-height: 20%;
    overflow-y: hidden;
  }
}
</style>