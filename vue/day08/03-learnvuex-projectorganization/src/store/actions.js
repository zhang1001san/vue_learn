export default {
  /**
   * 修改info.可异步
   * @param context 上下文.可理解为store
   */
  actionUpdateInfo(context){
    // 异步修改
    setTimeout(()=>{
      // 类似 this.$store.commit('decrement');
      context.commit('updateInfo');
    },1000)
  },
  /**
   * 带参数异步
   * @param context
   * @param payload
   */
  actionUpdateInfoParam(context,payload){
    console.log(payload);
    // setTimeout(()=>{
    //   context.commit('updateInfo');
    //   // 执行回调函数
    //   payload.success();
    // },1000)

    // 用promise回调
    return  new Promise((resolve, reject) => {
      setTimeout(()=>{
        context.commit('updateInfo');

        // 1.成功回调
        resolve('更新成功');
      },1000)
    });
  }
}
