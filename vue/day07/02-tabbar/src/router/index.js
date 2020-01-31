import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home'

  }
];

const router = new Router({
  routes,
  mode:'history'
});
export default router;
