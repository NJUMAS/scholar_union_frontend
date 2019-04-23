<template>
  <Row :gutter="20" >

    <i-col :span="4" >
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">

        <Card class="card" shadow dis-hover style="border-radius: 0">
          <img  src="/static/images/MyPersonalPage/boy.png" >
          <br>
          <p >{{username}}</p>
        </Card>

        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect" style="border-radius: 0">
          <MenuItem name="profile" style="line-height: 78px"><Icon type="ios-person" ></Icon> 个人信息</MenuItem>
          <MenuItem name="points"><Icon type="ios-egg" style="line-height: 78px"></Icon> 积分</MenuItem>
          <MenuItem name="message"><Icon type="ios-chatboxes" style="line-height: 78px"></Icon> 消息</MenuItem>
        </Menu>
      </Sider>
    </i-col>

    <i-col :span="20" style="margin-bottom: 20px;">
      <Header :style="{background: '#fff'}">
        <h2>{{activeTitle}}</h2>
      </Header>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </i-col>
  </Row>
</template>

<script>
    export default {
        name: "MyPersonalPage",
      data () {
        return {
          username:'侯韵晗',
          bar: {
            'profile': '个人信息',
            'points':'积分',
            'message':'消息'
          }
        };
      },
      methods: {
        onSelect (name) {
          this.activeTitle = this.bar[name];
          this.$router.push(`/myPersonalPage/${name}`);
        }
      }
    }
</script>

<style scoped>
  .card img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 76px;
  }
  .card p{
    font-size: 110%;
    font-weight: bold;
    text-align: center;
  }
  .base{
    background-color: #474C5F;
  }
</style>
