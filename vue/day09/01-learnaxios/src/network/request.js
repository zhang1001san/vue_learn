import axios from "axios";

// 1.创建实例
const axiosInstance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
});

/**
 * 封装网络请求
 * @param config 配置
 * @param success 成功的回调函数
 * @param failure 失败的回调函数
 */
// 1.
// export function request(config,success,failure) {
//   axiosInstance(config).then(res=>{
//     success(res);
//   }).catch(err=>{
//     failure(err);
//   });
// }

// 2.
// export function request(config) {
//   axiosInstance(config.baseConfig).then(res=>{
//     config.success(res);
//   }).catch(err=>{
//     config.failure(err);
//   });
// }

// 3.
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     axiosInstance(config).then(res=>{
//       resolve(res);
//     }).catch(err=>{
//       reject(err);
//     });
//   })
// }

// 4.
export function request(config) {
  // 2.axios拦截器
  // 2.1请求拦截的作用
  axiosInstance.interceptors.request.use(config => {
    console.log('axiosInstance.interceptors.request.onFulfilled');
    console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标.在response关闭这个请求图片-->转圈圈的图标
    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息

    return config;
  }, err => {
    console.log('axiosInstance.interceptors.request.onRejected');
    console.log(err);
  });

  // 2.2 响应拦截
  axiosInstance.interceptors.response.use(response=>{
    console.log('axiosInstance.interceptors.response.onFulfilled');
    console.log(response);
    // return response;
    return response.data;
  },err=>{
    console.log('axiosInstance.interceptors.response.onRejected');
    console.log(err);
  });

  // 3.发送真正的网络拦截
  return axiosInstance(config);
}
