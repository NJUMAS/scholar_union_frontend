<template>
  <div>
    <RadioGroup v-model="field" type="button" class="radioGroup">
      <Radio v-for="(item,index) in fieldList" :key="index" :label=item></Radio>
    </RadioGroup>

    <Card style="float: right;height: 500px;width: 220px;margin: 20px 70px auto auto;">
      <Tag v-for="(item,index) in chosenMemberList" :key="index" closable  @on-close="">
        {{item}}
      </Tag>
      <Button style="position: absolute;bottom: 0;right: 0;width: 32%" type="warning">建组</Button>
    </Card>

    <div>
      <div style="margin-left: 100px" v-for="(item,index) in recommendation" :key="index" v-if="item.fieldName===field">
        <Row>
          <Col span="6" v-for="(member,memberIndex) in item.members" :key="memberIndex">
            <Card class="memberCard">
              <img style="float: left" width="30%" src="/static/images/MyPersonalPage/boy.png">
              <p class="memberInfo">姓名：{{member}}</p>
              <p class="memberInfo">权威值：</p>
              <p class="memberInfo">兴趣度：</p>
              <p class="memberInfo">报酬：
                <InputNumber size="small" style="width: 40%"></InputNumber>
              </p>
              <Button @click="choseMember()" type="info" style="margin-left: 75%;margin-bottom: -8%">加入候选</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
      name: "MemberRecommendation",
      data(){
        return{
          field: '',
          fieldList: [],
          chosenMemberList: [123,123123,123],
          recommendation:[
            {
              fieldId:'1',
              fieldName:'11',
              members:["ddq1","dd1"] //成员信息
            },
            {
              fieldId:'2',
              fieldName:'22',
              members:["dd2"] //成员信息
            },
            {
              fieldId:'3',
              fieldName:'33',
              members:["dd3","dd3","dd3"] //成员信息
            }
          ]
        }
      },
      methods:{
        getFieldList(){
          this.fieldList = [];
          let rec = this.recommendation;
          for(let i=0;i<rec.length;i++){
            let field = rec[i].fieldName;
            this.fieldList.push(field);
          }
          this.field = this.fieldList[0];
        },
        choseMember() {

        },
        deleteMember(){

        }
      },
      mounted() {
        this.getFieldList();
      }
    }
</script>

<style scoped>

  .radioGroup{
    margin: 20px auto 20px 110px;
  }
  .memberCard{
    /*width: 18%;*/
    margin: 10px 20px 10px 10px;
    float: left;
  }
  .memberInfo {
    font-size: 60%;

  }


</style>
