<template>
  <div>
    <!--标题头-->
    <img src="/static/images/icon.png" height="60px" class="headImg">
    <Menu mode="horizontal" active-name="1" class="menu" @on-select="select">
      <Button type="success" id="login">登录</Button>
      <Divider type="vertical" style="float:right;top: 20px;height: 20px;"/>
      <MenuItem name="4" style="float: right">
        <Icon type="ios-construct" />
        数据统计
      </MenuItem>
      <MenuItem name="3" style="float: right">
        <Icon type="ios-construct" />
        个人主页
      </MenuItem>
      <MenuItem name="2" style="float: right">
        <Icon type="ios-people" />
        项目列表
      </MenuItem>
      <MenuItem name="1" style="float: right">
        <Icon type="ios-paper" />
        首页
      </MenuItem>
    </Menu>

    <FirstPage></FirstPage>

    <Footer class="layout-footer-center">2018-2019 &copy; Astronomical collaboration alliance</Footer>
  </div>
</template>

<script>
    import FirstPage from "./FirstPage";

    export default {
      name: "HomePage",
      components: {FirstPage},
      data() {
        return {
          activeNum: 1
        }
      },
      methods:{
        menuList(){  // 这个方法里定义好，高亮和路由

        },
        select(name){
          alert(name+"r");
          this.$router.push("/d");
        },
        aa(){
          alert(111);
        }
      },
      mounted(){  // 组件初始化后执行
        // this.menuList()
      }
    };
</script>


<style scoped>

  .headImg {
    position: relative;
    margin: 15px 100px 0;
    z-index: 999;
  }

  .menu {
    position: relative;
    margin-top: -30px;
    margin-bottom: 2px;
  }

  #login{
    position: relative;
    bottom: -13px;
    float: right;
    margin-right: 20px;
    margin-left: 20px;
  }

  .layout-footer-center{
    text-align: center;
  }

</style>
