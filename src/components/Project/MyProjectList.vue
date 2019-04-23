<template>
  <div class="base">
    <Row>
      <Col span="24">
      <Tabs class="myTab" type="card" style="margin: 20px;">
        <Tab-pane label="未处理">
          <div style="background-color: white;">
            <Row>
              <i-col v-for="project in projectList" span="12">

                <Card style="height: 220px; margin: 8%">
                  <Row>
                    <i-col span="8">
                      <img src="/static/images/FirstPage/firstPage.jpeg" style="width: 80%">
                    </i-col>
                    <i-col span="16">
                      <p class="projectTitle">{{project.name}}</p>
                      <p class="projectInfo">时间：{{project.startTime}}——{{project.endTime}}</p>
                      <p class="projectInfo">发起人：{{project.owner}}</p>
                      <p class="projectInfo">负责领域：{{project.fields}}</p>
                      <p class="projectInfo">积分报酬：<span class="paymentInfo">{{project.payment}}</span></p>
                      <p class="projectInfo">项目人数：{{project.numbers}}</p>
                      <p style="float: right" class="projectInfo">72:00:00后自动拒绝</p>
                      <br>
                      <p style="float: right">
                        <i-button type="warning">加入小组</i-button>
                        <i-button>拒绝</i-button>
                      </p>
                    </i-col>
                  </Row>
                </Card>

              </i-col>
            </Row>
          </div>
        </Tab-pane>
        <Tab-pane label="进行中">
          <div style="background-color: white;">
            <Row>
              <i-col v-for="project in projectList" span="12">

                <Card style="height: 220px; margin: 8%">
                  <Row>
                    <i-col span="8">
                      <img src="/static/images/FirstPage/firstPage.jpeg" style="width: 80%">
                    </i-col>
                    <i-col span="16">
                      <p class="projectTitle">{{project.name}}</p>
                      <p class="projectInfo">时间：{{project.startTime}}——{{project.endTime}}</p>
                      <p class="projectInfo">发起人：{{project.owner}}</p>
                      <p class="projectInfo">负责领域：{{project.fields}}</p>
                      <p class="projectInfo">积分报酬：<span class="paymentInfo">{{project.payment}}</span></p>
                      <p class="projectInfo">项目人数：{{project.numbers}}</p>
                      <Progress :percent="25"></Progress>
                      <i-button style="float: right">退出项目</i-button>
                    </i-col>
                  </Row>
                </Card>

              </i-col>
            </Row>
          </div>
        </Tab-pane>
        <Tab-pane disabled label="已结项" />
        <Tab-pane label="已拒绝">
          <div style="background-color: white;">
            <Row>
              <i-col v-for="project in projectList" span="12">

                <Card style="height: 200px; margin: 8%">
                  <Row>
                    <i-col span="8">
                      <img src="/static/images/FirstPage/firstPage.jpeg" style="width: 80%">
                    </i-col>
                    <i-col span="16">
                      <p class="projectTitle">{{project.name}}</p>
                      <p class="projectInfo">时间：{{project.startTime}}——{{project.endTime}}</p>
                      <p class="projectInfo">发起人：{{project.owner}}</p>
                      <p class="projectInfo">负责领域：{{project.fields}}</p>
                      <p class="projectInfo">积分报酬：<span class="paymentInfo">{{project.payment}}</span></p>
                      <p class="projectInfo">项目人数：{{project.numbers}}</p>
                      <i-button style="float: right">删除</i-button>
                    </i-col>
                  </Row>
                </Card>

              </i-col>
            </Row>
          </div>
        </Tab-pane>
        <Tab-pane disabled label="我创建的项目" />
      </Tabs>
      </Col>
    </Row>
  </div>
</template>

<script>
  import ICol from "../../../node_modules/iview/src/components/grid/col.vue";

  export default {
    components: {ICol},
    name: "ProjectList",
    data(){
      return {
        projectList: [
          {
            id: 1,
            name:'星系研究',
            startTime:'2019-05-01',
            endTime:'2019-06-30',
            owner:'侯韵晗',
            fields: '星系的形成',
            payment: 800,
            numbers: 12
          },
          {
            id: 2,
            name:'星系研究',
            startTime:'2019-05-01',
            endTime:'2019-06-30',
            owner:'侯韵晗',
            fields: '星系的形成',
            payment: 800,
            numbers: 12
          },
          {
            id: 3,
            name:'星系研究',
            startTime:'2019-05-01',
            endTime:'2019-06-30',
            owner:'侯韵晗',
            fields: '星系的形成',
            payment: 800,
            numbers: 12
          },
          {
            id: 4,
            name:'星系研究',
            startTime:'2019-05-01',
            endTime:'2019-06-30',
            owner:'侯韵晗',
            fields: '星系的形成',
            payment: 800,
            numbers: 12
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .myTab>>>.ivu-tabs-bar {
    margin-bottom: 0px;
  }

  .base{
    background-color: #474C5F;
  }

  .projectTitle {
    color: black;
    font-size: 120%;
    font-weight: bold;
  }

  .projectInfo {
    color: #474C5F;
    font-size: 100%;
  }

  .paymentInfo {
    color: darkorange;
    font-size: 100%;
  }

</style>
