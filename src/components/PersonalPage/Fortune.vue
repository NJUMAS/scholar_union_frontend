<template>
  <div>
    <CellGroup>
      <Cell class="mycell"title="当前持有：" extra="10000" />
      <Divider />
      <Cell class="mycell"title="历史持有：" />
    </CellGroup>
  </div>
</template>

<script>
  export default {
    name: "Fortune",
  }
</script>

<style scoped>
  .mycell{
    height: 40px;
    width: 230px;
    color: black;
    font-size: xx-large;
    margin-left: 30px;
    font-weight: bolder;
  }
</style>
