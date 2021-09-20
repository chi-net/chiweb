<template>
<div id="card-app">
<slot></slot>
</div>
</template>
<script>
export default{
}
</script>

<style scoped>
@media screen and (min-width:768px){
    #card-app{
        width:30%;
        margin:16px;
    }
    
}
@media screen and (max-width:768px){
    #card-app{
        width:100%;
        margin-bottom:8px;
    }
    
}
#card-app{
    border-radius:5px;
    border:3px solid #eee;
    background-color:rgba(255,255,255,0.7);
    box-shadow:1px 2px 3px;
    float:left;
}
</style>