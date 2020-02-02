export default {
  state: {
    person: {
      name: '哈哈',
      age: 18
    }
  },
  mutations: {
    updateName(state, payload) {
      state.person.name = payload.name;
    }
  },
  actions: {
    actionUpdateName(context, payload) {
      console.log(context);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateName', payload);
          resolve('模块A的回调');
        }, 1000)
      });
    }
  },
  getters: {
    doubleAge(state) {
      return state.person.age * 2;
    },
    fourAge(state, getters) {
      return getters.doubleAge * 2;
    },
    /**
     * 获取根的state
     * @param state
     * @param getters
     * @param rootState
     * @returns {*}
     */
    infoMessage(state, getters, rootState) {
      return rootState.info;
    }
  }
}


