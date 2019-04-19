# scholar_union_frontend

> 智能学术联盟前端——Vue框架  iview组件库

​	

## **请按照以下方法执行来build项目！**

```bash
在项目文件夹中执行   (npm/cnpm)

npm install
npm install iview--save 
npm install iview-loader --save-dev
npm install axios (报安装ajv错误时，使用npm i ajv 单独安装）
npm install qs.js --save　　//这一步可以先忽略，它的作用是能把json格式的直接转成data所需的格式
```



## Vue项目的具体配置

已配好，此处仅供参考。

``` bash
#####Vue#####
# 1.install dependencies
npm install

# 2.serve with hot reload at localhost:8080
npm run dev

#####iview组件库安装#####
1.在项目中引入iview
npm install iview--save 

2.然后在main.js 中添加如下配置：
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);

3.因为iView 的所有组件文案默认使用的是中文，通过设置可以使用其它语言。
import locale from 'iview/dist/locale/en-US';

4.
统一 iView 标签书写规范，所有标签都可以使用首字母大写的形式，包括 Vue 限制的两个标签 Switch 和 Circle。
Loader：
npm install iview-loader --save-dev

#####axios安装#####
npm install vue-axios --save (报安装ajv错误时，使用npm i ajv 单独安装）
npm install qs.js --save　　//这一步可以先忽略，它的作用是能把json格式的直接转成data所需的格式

import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

或者在Vue中直接加入：
new Vue({
  el: '#app',
  router,
  axios,
  qs,
  components: { App },
  template: '<App/>'
})

#项目build
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 提交注意事项

一定不要提交node_modules文件夹！（git默认是不提交的）