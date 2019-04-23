<template>
<div>
  <DropdownMenu >
    <DropdownItem class="w"><span class="words">ID:{{id}}</span></DropdownItem>
    <DropdownItem><span class="words">姓名:{{username}}</span></DropdownItem>
    <DropdownItem ><span class="words">年龄:{{age}}</span></DropdownItem>
    <DropdownItem><span class="words">机构:{{institution}}</span></DropdownItem>
    <DropdownItem><span class="words">职称:{{professionaltitle}}</span></DropdownItem>
    <DropdownItem><span class="words">期望报酬（分/天）:<span class="points">{{expectation}}</span></span></DropdownItem>
  </DropdownMenu>
    <Collapse simple>
      <Panel name="1" hide-arrow>
        <span class="words">研究领域:</span>
        <DropdownItem slot="content"  v-for="n in field_of_research"><span class="details">{{n}}</span></DropdownItem>
      </Panel>
      <Panel name="2" hide-arrow>
        <span class="words">兴趣领域:</span>
        <DropdownItem slot="content"  v-for="n in field_of_interest"><span class="details">{{n}}</span></DropdownItem>
      </Panel>
    </Collapse>
  <DropdownItem class="w"><span class="words">上传论文:</span></DropdownItem>
  <br>
      <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">上传文件</Button>
      </Upload>
  <br>
  <br>
  <Button  class="button"shape="circle" icon="ios-create" size="large" type="primary">编辑</Button>
  </div>
</template>

<script>
    export default {
      name: "Profile",
      data() {
        return {
          id: "00001",
          username: "侯韵晗",
          age: "25",
          institution: "南京大学",
          professionaltitle: "教授",
          expectation: "2000",
          field_of_research: [
            '早期宇宙',
            '宇宙结构形成演化',
            '宇宙暗物质',
            '宇宙暗能量'
          ],
          field_of_interest:[
            '星系的形成演化',
            '星系相互作用和合并',
            '变星和双星多星',
            '恒星结构和演化'
          ]
        }
      },
    }
</script>

<style scoped>
.button{
  float: right;
  margin-right: 12.5%;
}
  .w{
    height: 48px;
  }
  .words{
    line-height: 48px;
    font-size: 16px;
  }
  .points{
    color: darkorange;
  }
  .details{
    color: #9ea7b4;
    font-size: 12px;
  }
</style>
