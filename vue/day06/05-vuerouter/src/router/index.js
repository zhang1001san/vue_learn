// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from "../components/Home";
import About from "../components/About";
// 1，通过vue.use(插件)， 安装插件
Vue.use(VueRouter);

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
];

// 2.创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass:'active'
});

// 3.将router对象传入到Vue实例
export default router;
