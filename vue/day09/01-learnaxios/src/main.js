import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 1.axios基础的使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
// axios.get('http://123.207.32.32:8000/home/data?type=sell&page=1').then(res=>{
//   console.log(res);
// });
//
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   // 专门针对get请求的参数拼接
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// });

// axios.post();
// axios.put()

// 2.发送并发请求
// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata',
//     method:'get'
//   }),
//   axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//       type:'sell',
//       page:1
//     }
//   })
// ]).then(res=>{
//   console.log(res);
// });

// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata',
//     method:'get'
//   }),
//   axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//       type:'sell',
//       page:1
//     }
//   })
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }));

// 3.axiox的全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000';
// axios.defaults.timeout=5000;
// axios.all([
//   axios({
//     url:'/home/multidata',
//     method:'get'
//   }),
//   axios({
//     url:'/home/data',
//     params:{
//       type:'sell',
//       page:1
//     }
//   })
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }));

// 4.创建对应的axios实例
// const axiosInstance = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// });
// axiosInstance({
//   url:'/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// });
//
// axiosInstance({
//   url:'/home/data',
//   params:{
//     tpye:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// });

// 5.引入自定义的网络请求方法
import {request} from "./network/request";

// 5.1
// request({
//   url:'/home/multidata',
//   method:'get'
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })

// 5.2
// request({
//   baseConfig:{
//     url:'/home/multidata',
//     method:'get'
//   },
//   success:function (res) {
//     console.log(res);
//   },
//   failure:function (err) {
//     console.log(err);
//   }
// })

// 5.3
request({
  url:'/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
