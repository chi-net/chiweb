<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  border: 3px solid #eee;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 1px 2px 3px;
  margin: 10px;
}
</style>
