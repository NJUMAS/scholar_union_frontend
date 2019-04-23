<template>
  <Modal v-model="modal" @on-ok="publicProject" title="发布任务" okText="发布"  cancelText="取消" width="30%" id="modal">
    <Form ref="projectInfo" v-model="projectInfo" >
      <FormItem prop="name">项目名称：
        <Input v-model="projectInfo.name" placeholder="项目名称" style="width: 250px" />
      </FormItem>
      <FormItem prop="startTime">预期时间：
        <DatePicker v-model="projectInfo.startTime" type="date" format="yyyy-MM-dd" placeholder="请选择时间" style="width: 150px"></DatePicker>
        —
        <DatePicker v-model="projectInfo.endTime" type="date" format="yyyy-MM-dd" placeholder="请选择时间" style="width: 150px"></DatePicker>
      </FormItem>
      <FormItem prop="description">项目介绍：
        <Input v-model="projectInfo.description"  type="textarea" :rows="2"  />
      </FormItem>
      <FormItem prop="fields">项目领域及资源规划：
        <ul>
          <li v-if="field.fieldName!==''" v-for="field in projectInfo.fields" :key="field.fieldId" style="margin-left: 20px">
            领域:{{field.fieldId}} {{field.fieldName}},  人数:{{field.num}},  预计提供报酬:{{field.payment}}
          </li>
        </ul>
        <Button type="primary" size="small" ghost @click="toAddField()">添加领域</Button>
      </FormItem>
    </Form>

    <Modal v-model="fieldModal" width="20%" @on-ok="addField">
      <br/><br/>
      领域：
      <Select style="width:150px" v-model="field.fieldName">
        <OptionGroup v-for="fieldGroup in researchFields" :label="fieldGroup.fieldGroupName" :key="fieldGroup.fieldGroupId">
          <Option v-for="(field) in fieldGroup.subFields" :value="field.fieldId+' '+field.fieldName" :key="field.fieldId"> {{field.fieldName }}</Option>
        </OptionGroup>
      </Select>
      <br/><br/>
      人数：
      <InputNumber :min="1"  v-model="field.num"></InputNumber>
      <br/><br/>
      预计提供报酬：
      <InputNumber :min="1"  v-model="field.payment"></InputNumber>
    </Modal>

  </Modal>
</template>

<script>
  export default {
    name: "NewProject",
    data(){
      return{
        modal: true,
        fieldModal:false,

        field:{
          fieldId:'',
          fieldName:'',
          num: '',
          payment:''
        },

        projectInfo: {
          name: '',
          startTime: '',
          endTime: '',
          description: '',
          fields: []
        },

        researchFields:[
          {
            fieldGroupId:'1',
            fieldGroupName: '宇宙学',
            subFields:[
              {
                fieldId: '1-1',
                fieldName:'宇宙学模型和参数'
              },
              {
                fieldId: '1-2',
                fieldName:'早期宇宙'
              },
              {
                fieldId: '1-3',
                fieldName:'宇宙结构形成演化'
              },
              {
                fieldId: '1-4',
                fieldName:'宇宙暗物质'
              },
              {
                fieldId: '1-5',
                fieldName:'宇宙暗能量'
              }
            ]
          },
          {
            fieldGroupId:'2',
            fieldGroupName: '星系和类星体',
            subFields:[
              {
                fieldId: '2-1',
                fieldName:'银河系'
              },
              {
                fieldId: '2-2',
                fieldName:'星系的形成演化'
              },
              {
                fieldId: '2-3',
                fieldName:'星系相互作用和合并'
              }
            ]
          },
          {
            fieldGroupId:'3',
            fieldGroupName: '恒星与星际物质',
            subFields:[
              {
                fieldId: '3-1',
                fieldName:'变星和双星多星'
              },
              {
                fieldId: '3-2',
                fieldName:'恒星结构和演化'
              },
              {
                fieldId: '3-3',
                fieldName:'太阳系外行星'
              },
              {
                fieldId: '3-4',
                fieldName:'恒星结构和早期演化'
              },
              {
                fieldId: '3-5',
                fieldName:'晚期演化'
              }
            ]
          },
          {
            fieldGroupId:'4',
            fieldGroupName: '太阳与太阳系',
            subFields:[
              {
                fieldId: '4-1',
                fieldName:'太阳磁场'
              },
              {
                fieldId: '4-2',
                fieldName:'太阳日冕'
              },
              {
                fieldId: '4-3',
                fieldName:'太阳黑子'
              },
              {
                fieldId: '4-4',
                fieldName:'太阳起源'
              }
            ]
          },
          {
            fieldGroupId:'5',
            fieldGroupName: '天体力学和人造卫星动力学',
            subFields:[
              {
                fieldId: '5-1',
                fieldName:'天体力学和人造卫星动力学'
              }
            ]
          }
        ]
      }
    },
    methods:{

      toAddField(){
        this.fieldModal = true;
        document.frames('modal').location.reload();
      },

      addField(){

        this.projectInfo.fields.push(
          {
            fieldId:this.field.fieldName.split(' ')[0],
            fieldName:this.field.fieldName.split(' ')[1],
            num: this.field.num,
            payment:this.field.payment
        });
        this.field.fieldId = '';
        this.field.fieldName = '';
        this.field.num = '';
        this.field.payment = '';
      },
      publicProject(){ //项目发布
        alert("项目发布" + "\n" +
          this.projectInfo.name + "\n" +
          this.projectInfo.startTime + "\n" +
          this.projectInfo.endTime + "\n" +
          this.projectInfo.description + "\n" +
          "几个领域："+this.projectInfo.fields.length
        );
        this.$router.push("/recommendation");
      }
    }
  };
</script>

<style scoped>

</style>
