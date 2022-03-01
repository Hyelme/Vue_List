import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/userList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userList
  }
})
