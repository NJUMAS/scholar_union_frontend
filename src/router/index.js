import Router from 'vue-router'
import HomePage from "../components/HomePage";
import HelloWorld from "../components/HelloWorld";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/d',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
