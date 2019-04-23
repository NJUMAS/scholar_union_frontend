<template>
  <Card class="optionCard" :bordered="false">
    <Button  class="button"shape="circle" icon="ios-create"></Button>
    <CellGroup>
      <Cell title="Userame:" extra="User" />
      <Cell title="Phone:" extra="188****9372" />
      <Cell title="Password:" extra="*******" />
      <Cell title="Age:" extra="details" />
      <Cell title="Location:" extra="China/Nanjing" />
      <Cell title="Field:" extra="Cosmology" />
      <Cell title="Company:" extra=".." />
      <Cell title="Educational Experience:" extra="......." />
      <Cell title="Professional Experience:" extra="......." />
      <Cell title="Website:" extra="https://github.com/balahbalah" />
    </CellGroup>
  </Card>
<!--  <Form :model="naire" :label-width="80">-->
<!--    <Form-item label="问卷名">-->
<!--      <Input v-model="title"-->
<!--             ref="title"-->
<!--             placeholder="问卷名">-->
<!--      </Input>-->
<!--    </Form-item>-->
<!--    <Form-item label="问卷介绍">-->
<!--      <Input v-model="textarea"-->
<!--             @on-change="updateIntro"-->
<!--             type="textarea"-->
<!--             :autosize="{minRows:8 ,maxRows: 10}"-->
<!--             placeholder="请输入问卷介绍...">-->
<!--      </Input>-->
<!--    </Form-item>-->
<!--  </Form>-->
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
.button{
  float: right;
}
</style>
