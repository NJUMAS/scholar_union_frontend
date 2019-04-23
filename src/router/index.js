import Router from 'vue-router'
import HomePage from "../components/HomePage";
import FirstPage from "../components/FirstPage";
import MyProjectList from "../components/Project/MyProjectList";
import MyPersonalPage from "../components/PersonalPage/MyPersonalPage";
import NewProject from "../components/Project/NewProject";
import Profile from "../components/PersonalPage/Profile";
import Points from "../components/PersonalPage/Points";
import Message from "../components/PersonalPage/Message";
import MemberRecommendation from "../components/Project/MemberRecommendation";

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
          path:'/recommendation',
          name:'MemberRecommendation',
          component: MemberRecommendation
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
              path: 'points',
              name: 'Points',
              component: Points
            },
            {
              path:'message',
              name:'Message',
              component:Message
            }
            ]
        },
      ]
    },
  ]
})
