import Router from 'vue-router'
import HomePage from "../components/HomePage";
import HelloWorld from "../components/HelloWorld";
import FirstPage from "../components/FirstPage";
import MyProjectList from "../components/Project/MyProjectList";
import MyPersonalPage from "../components/PersonalPage/MyPersonalPage";
import MyStatistics from "../components/Statistics/MyStatistics";
import NewProject from "../components/Project/NewProject";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect: '/first',
      children:[
        {
          path: 'first',
          name: 'FirstPage',
          component: FirstPage,
          children: [
            {
              path:'publicProject',
              name:'NewProject',
              component:NewProject,
            }
          ]
        },
        {
          path:'myProjectList',
          name:'MyProjectList',
          component:MyProjectList
        },
        {
          path:'myPersonalPage',
          name:'MyPersonalPage',
          component:MyPersonalPage
        },
        {
          path:'myStatistics',
          name:'MyStatistics',
          component:MyStatistics
        }
      ]
    },
    // {
    //   path: '/d',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
