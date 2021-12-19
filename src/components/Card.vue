<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
.card {
  border-radius: 5px;
  /* border: 3px solid #eee; */
  padding:10px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 1px 2px 3px;
  margin: 10px;
  /*你们最爱的毛玻璃来辣！ */
  backdrop-filter: blur(15px);
}
</style>
