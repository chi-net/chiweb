<template>
<div id="toolcard-app">
<slot :showcp="showCopyright"></slot>
</div>
</template>
<script>
export default{
    methods:{
    showCopyright:function(){
      this.$store.changeCH();
    }
  }
}
</script>

<style scoped>
#toolcard-app{
    border-top:1px solid #000000;
    padding-top:3px;
    padding-bottom:3px;
    display:block;
}
</style>