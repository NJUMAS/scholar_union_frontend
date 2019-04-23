<template>
  <div>
    <DropdownItem ><span class="title">当前积分：</span></DropdownItem>
    <DropdownItem ><span class="points">{{now}}</span></DropdownItem>
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
    line-height: 48px;
    font-size: 16px;
  }
  .words{
    line-height: 48px;
    font-size: 16px;
  }
  .points{
    line-height: 24px;
    color: darkorange;
  }
</style>
