<template>
  <div>
    <!--标题头-->
    <!--@on-select="select"-->
    <Menu mode="horizontal" active-name="1" class="menu">
      <img src="/static/images/icon.png" height="60px" class="headImg">
      <Button v-if="loginNum===0" type="success" class="login" @click="toLogin">登录</Button>
      <Button v-if="loginNum===1" type="error" class="login"  @click="">注销</Button>
      <Divider type="vertical" style="float:right;top: 20px;height: 20px;"/>

      <router-link to="/myPersonalPage">
        <MenuItem name="3" style="float: right">
            <Icon type="ios-contact" ></Icon>
            个人主页
        </MenuItem>
      </router-link>


      <router-link to="/myProjectList">
        <MenuItem name="2" style="float: right">
          <Icon type="ios-people" />
          项目列表
        </MenuItem>
      </router-link>

      <router-link to="/first">
        <MenuItem name="1" style="float: right">
          <Icon type="ios-paper" />
          首页
        </MenuItem>
      </router-link>
    </Menu>
    <router-view></router-view>
    <Footer class="layout-footer-center">2018-2019 &copy; Astronomical collaboration alliance</Footer>
    <BackTop></BackTop>

    <!--登录Modal-->
    <Modal v-model="loginModal" @on-ok="login('formInline')" title="登录" okText="登录"  cancelText="取消" width="30%">
      <Form ref="formInline" v-model="formInline" :rules="ruleInline" id="loginForm" inline style="text-align: center" >
        <FormItem prop="phoneNum">
          <b>手机：</b>
          <Input type="text" prefix="ios-contact" placeholder="请输入手机号码" style="width: 250px"
                 v-model="formInline.phoneNum"/>
        </FormItem>
        <br><br>
        <FormItem prop="password">
          <b>密码：</b>
          <Input type="password" prefix="ios-lock" placeholder="请输入密码" style="width: 250px"
                 v-model="formInline.password"/>
        </FormItem>
        <p>
          <a @click="toSignUp">还没有账号？点击注册</a>
        </p>
      </Form>
    </Modal>

    <!--注册Modal-->
    <Modal v-model="signUpModal"  @on-ok="signUp('registerInline')" title="注册" okText="注册"  cancelText="取消" width="30%">
      <Form ref="registerInline" v-model="registerInline" :rules="ruleInline" inline >
        <FormItem prop="phoneNum">
          <b>手机：</b>
          <Input type="text" prefix="ios-contact" placeholder="请输入手机号码" style="width: 250px"
                 v-model="registerInline.phoneNum"/>
        </FormItem>
        <br><br>
        <FormItem prop="password">
          <b>密码：</b>
          <Input type="password" prefix="ios-lock" placeholder="请输入密码" style="width: 250px"
                 v-model="registerInline.password"/>
        </FormItem>
        <br><br>
        <FormItem prop="repeatedPassword">
          <b>再次输入密码：</b>
          <Input type="password" prefix="ios-lock" placeholder="请再次输入密码" style="width: 250px"
                 v-model="registerInline.repeatedPassword"/>
        </FormItem>
        <p v-if="!checkRepeat()" style="color:red;">{{registerInline.errorText}}</p>
      </Form>
    </Modal>

  </div>
</template>

<script>
    import FirstPage from "./FirstPage";

    export default {
      name: "HomePage",
      components: {FirstPage},
      data() {
        return {
          loginNum:0,
          loginModal:false,
          signUpModal:false,
          formInline:{
            phoneNum: '',
            password: ''
          },
          registerInline:{
            phoneNum: '',
            password:'',
            repeatedPassword:'',
            errorText:"两次密码输入不相同"
          },
          ruleInline: {
            phoneNum: [
              {required: true, message: '请填写手机号码', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请填写密码', trigger: 'blur'},
              {
                type: 'string',
                min: 6,
                message: '密码长度不可小于6个字符',
                trigger: 'blur'
              }
            ],
            repeatedPassword:[
              {required: true, message: '请再次填写密码', trigger: 'blur'},
              {
                type: 'string',
                min: 6,
                message: '密码长度不可小于6个字符',
                trigger: 'blur'
              }
            ]
          }
        }
      },
      methods:{
        toLogin(){
          this.loginModal=true;
        },
        toSignUp(){
          this.loginModal = false;
          this.signUpModal = true;
        },
        checkRepeat() {
          // <!-- 对比两次输入的密码 -->
          let pwd1 = this.registerInline.password;
          let pwd2 = this.registerInline.repeatedPassword;
          return pwd1 === pwd2;
        },
        login(name){
          this.$refs[name].validate((valid) => {
            alert("登录了！");
            this.loginNum = 1;
          });
        },
        signUp(name){
          this.$refs[name].validate((valid) => {
            alert("注册了！");
            this.loginModal = true;
          });
        }
      },
      mounted(){  // 组件初始化后执行
      }
    };
</script>


<style scoped>

  .headImg {
    float: left;
    margin-left: 100px;
    z-index: 999;
  }

  .menu {
    /*position: relative;*/
    /*margin-top: -30px;*/
    /*margin-bottom: 2px;*/
    height: 62px;
  }


  .login{
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
