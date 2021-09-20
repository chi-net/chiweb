<template>
<div id="card-app">
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
#card-app{
    border-radius:5px;
    border:3px solid #eee;
    background-color:rgba(255,255,255,0.7);
    width:30%;
    margin:16px;
    box-shadow:1px 2px 3px;
    float:left;
}
</style>