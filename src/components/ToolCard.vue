<template>
<div id="toolcard-app">
<slot></slot>
</div>
</template>
<script>
export default{
    data(){

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