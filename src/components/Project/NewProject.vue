<template>
  <Modal v-model="modal" @on-ok="" title="发布任务" okText="发布"  cancelText="取消" width="30%">
    <Form>
      <FormItem>项目名称：
        <Input v-model="projectInfo.name" placeholder="项目名称" style="width: 250px" />
      </FormItem>
    </Form>
    

    项目时间：
    项目介绍：
    项目领域及资源规划：


    领域：
    <Select style="width:250px">
      <OptionGroup v-for="fieldGroup in researchFields" :label="fieldGroup.fieldGroupName" :key="fieldGroup.fieldGroupId">
        <Option v-for="field in fieldGroup.subFields" :value="field.fieldName" :key="field.fieldId">{{ field.fieldName }}</Option>
      </OptionGroup>
    </Select>

    <!--项目时间-->
    <!--项目名称，项目介绍（一段话？），多组【领域，领域人数，领域总报酬】-->
  </Modal>
</template>

<script>
  export default {
    name: "NewProject",
    data(){
      return{
        modal: true,
        projectInfo: {
          name: '',
          startTime: '',
          endTime: '',
          description: '',
          fields: [
            {
              fieldId:'',
              num: '',
              payment:''
            }
          ]
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
    }
  };
</script>

<style scoped>

</style>
