<template>
  <div class="base">
    <!--首页图-->
    <img src="/static/images/FirstPage/firstPage.jpeg" width="100%" height="500px">
    <router-view></router-view>
    <!--选项卡片-->
    <div style="width: 100%;height:150px;background-color: white">

      <router-link to="/first/publicProject">
        <Card class="optionCard" :bordered="false">
          <img src="/static/images/FirstPage/planet.png">
          <div>
            <p class="optionTitle">发布项目</p>
            <p class="optionTranslation">publish project</p>
            <p class="optionNote">为您的项目匹配最合适的成员</p>
          </div>
        </Card>
      </router-link>

      <Card class="optionCard" :bordered="false">
          <img src="/static/images/FirstPage/telescope.png">
          <div>
            <p class="optionTitle">寻找项目</p>
            <p class="optionTranslation">find project</p>
            <p class="optionNote">海量项目信息</p>
          </div>
      </Card>
      <Card class="optionCard" :bordered="false">
        <img src="/static/images/FirstPage/satellite-station.png">
        <div>
          <p class="optionTitle">交流论坛</p>
          <p class="optionTranslation">forum</p>
          <p class="optionNote">分享您的新思路</p>
        </div>
      </Card>
    </div>
    <!--公告新闻-->
    <Row>
      <Col span="10">
        <Card style="height:300px;margin: 10px auto 10px 10px">
          <!--公告卡片标题-->
          <div slot="title">
            <p> <Icon type="ios-cloud-outline" />&nbsp&nbsp公告</p>
            <b style="font-size: 70%;color: darkorange;font-weight: initial;margin-left: 28px">Announcement</b>
          </div>
          <!--公告卡片内容-->
          <ul style="margin-left: 20px">
            <li v-for="item in announcementList" :key="announcementList.id">
              <span>
                    {{ item.content }}
              </span>
            </li>
          </ul>
        </Card>
      </Col>
      <Col span="14">
        <Card style="height:300px;margin: 10px 10px 10px 10px">
          <!--新闻卡片标题-->
          <div slot="title">
            <p> <Icon type="ios-globe-outline" />&nbsp&nbsp热门新闻</p>
            <b style="font-size: 70%;color: darkblue;font-weight: initial;margin-left: 28px">News</b>
          </div>
          <!--新闻卡片内容-->
          <ul  style="margin-left: 20px">
            <li v-for="item in newsList" :key="newsList.id">
              <span>
                    {{ item.content }}
              </span>
            </li>
          </ul>
        </Card>
      </Col>
    </Row>

  </div>
</template>

<script>
    export default {
      name: "FirstPage",
      data(){
        return {
          announcementList: [
            {
              id:1,
              content: "主页终于做好了！！"
            },
            {
              id:2,
              content: "主页终于做好了！！"
            }],
          newsList: []
        }
      }
    }
</script>

<style scoped>
  .base{
    background-color: #474C5F;
  }

  /*选项卡片style*/
  .optionCard {
    width: 20%;
    top: 20px;
    float: left;
    margin-left:10%;
  }
  .optionCard img{
    margin-left: 20px;
  }
  .optionCard div{
    position: absolute;left: 120px;top: 20px;
  }
  .optionTitle {
    color: black;
    font-size: 110%;
    font-weight: bold;
  }
  .optionTranslation{
    font-size: 70%;
    color: darkgray;
  }
  .optionNote {
    color: black;
    font-size: 70%;
  }
</style>
