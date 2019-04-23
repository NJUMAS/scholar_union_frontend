<template>
<div>
  <DropdownMenu >
    <DropdownItem ><span class="words">ID:{{id}}</span></DropdownItem>
    <DropdownItem><span class="words">姓名:{{username}}</span></DropdownItem>
    <DropdownItem ><span class="words">年龄:{{age}}</span></DropdownItem>
    <DropdownItem><span class="words">机构:{{institution}}</span></DropdownItem>
    <DropdownItem><span class="words">职称:{{professionaltitle}}</span></DropdownItem>
    <DropdownItem><span class="words">期望报酬（分/天）:{{expectation}}</span></DropdownItem>
  </DropdownMenu>
    <Collapse simple>
      <Panel name="1">
        <span class="words">研究领域:</span>
        <DropdownItem slot="content"  v-for="n in field_of_research">{{n}}</DropdownItem>
      </Panel>
      <Panel name="2">
        <span class="words">兴趣领域:</span>
        <DropdownItem slot="content"  v-for="n in field_of_interest">{{n}}</DropdownItem>
      </Panel>
    </Collapse>
  <DropdownItem class="w"><span class="words">上传论文:</span></DropdownItem>
      <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">上传文件</Button>
      </Upload>
  <br>
  <Button  class="button"shape="circle" icon="ios-create" size="large" type="primary">Edit</Button>
  </div>
</template>

<script>
    export default {
      name: "Profile",
      data() {
        return {
          id: "123456",
          username: "user",
          age: "20",
          institution: "xxxx",
          professionaltitle: "professor",
          expectation: "2000",
          field_of_research: ["a", "b", "c", "d"],
          field_of_interest:["1","2","3","4"]
        }
      },
    }
</script>

<style scoped>
.button{
  float: right;
}
  .w{
    height: 30px;
  }
  .words{
    font-size: 120%;
  }
</style>
