<template>
  <div>
    <Menu mode="horizontal" :theme="light" active-name="1">
      <MenuItem name="1" style="float: right">
        <Icon type="ios-paper" />
        内容管理
      </MenuItem>
      <MenuItem name="2" style="float: right">
        <Icon type="ios-people" />
        用户管理
      </MenuItem>
      <MenuItem name="4" style="float: right">
        <Icon type="ios-construct" />
        综合设置
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>

</style>
