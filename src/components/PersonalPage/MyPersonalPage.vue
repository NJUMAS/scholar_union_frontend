<template>
  <Row :gutter="20" style="margin-top: 10px;">
    <i-col :lg="4" style="margin-bottom: 20px;">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Card class="card" shadow>
          <img  src="/static/images/MyPersonalPage/boy.png" >
          <br>
          <p >User</p>
        </Card>
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <MenuItem name="profile">个人信息</MenuItem>
          <MenuItem name="points">积分</MenuItem>
          <MenuItem name="message">消息</MenuItem>
        </Menu>
      </Sider>
    </i-col>
    <i-col :lg="20" style="margin-bottom: 20px;">
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
          value1:"2222",
          value2:"",
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

</style>
