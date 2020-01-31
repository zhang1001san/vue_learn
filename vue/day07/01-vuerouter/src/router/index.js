import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

Vue.use(Router)

// 懒加载
const Home=()=>import('../components/Home');
const HomeNews=()=>import('../components/HomeNews');
const HomeMessage=()=>import('../components/HomeMessage');

const About=()=>import('../components/About');
const User=()=>import('../components/User');

const Profile=()=>import('../components/Profile');

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
    meta:{
      titile:'首页'
    },
    children:[
      // {
      //   path:'/',
      //   // 默认值
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component:About,
    meta:{
      titile:'关于'
    },
    beforeEnter:(to,from,next)=>{
      console.log('beforeEnter');
      next();
    }
  },
  {
    path: '/user/:user_id',
    component:User,
    meta:{
      titile:'用户'
    }

  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      titile:'profile'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

// 前置守卫guard
// 修改标题
router.beforeEach(function (to, from, next) {
  // 从from跳转到to
  // document.title=to.meta.titile;
  // console.log(to);
  // 适配嵌套路由
  document.title=to.matched[0].meta.titile;
  // console.log('前置守卫guard');
  // 跳转到下一个路由
  next();
});

// 后置钩子(hook)
router.afterEach(((to, from) => {
  // console.log('后置钩子(hook)');
}));

// 3.将router对象传入到Vue实例
export default router;
