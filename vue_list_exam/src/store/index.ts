import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex'
import module from './modules/userList'

Vue.use(Vuex);

export interface RootState {
  data: string
}

const store: StoreOptions<RootState> = {
  state: {
    data: 'root',
  },
  modules: {
    module
  },
  mutations: {
    setData(state, data:string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({commit}, data:string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state) => state.data,
  },
}

export default new Vuex.Store(store);
