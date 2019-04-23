import Router from 'vue-router'
import HomePage from "../components/HomePage";
import FirstPage from "../components/FirstPage";
import MyProjectList from "../components/Project/MyProjectList";
import MyPersonalPage from "../components/PersonalPage/MyPersonalPage";
import MyStatistics from "../components/Statistics/MyStatistics";
import NewProject from "../components/Project/NewProject";
import Profile from "../components/PersonalPage/Profile";
import Fortune from "../components/PersonalPage/Fortune";
import Message from "../components/PersonalPage/Message";

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
          component:MyPersonalPage,
          children: [
            {
              path: 'profile',
              name: 'Profile',
              component: Profile
            },
            {
              path: 'fortune',
              name: 'Fortune',
              component: Fortune
            },
            {
              path:'message',
              name:'Message',
              component:Message
            }
            ]
        },
        {
          path:'myStatistics',
          name:'MyStatistics',
          component:MyStatistics
        }
      ]
    },
  ]
})
