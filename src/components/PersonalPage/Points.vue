<template>
  <div>
    <DropdownItem ><span class="title">当前积分：</span></DropdownItem>
    <DropdownItem ><span class="words">{{now}}</span></DropdownItem>
  </div>
</template>

<script>
  export default {
    name: "Points",
    data(){
      return{
        now:10000
      }
    }
  }
</script>

<style scoped>
  .title{
    font-weight: bolder;
    font-size: 120%;
  }
  .words{
  }
</style>
