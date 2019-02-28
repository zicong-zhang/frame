import {
  CHANGE_ROUTER_TRANSITION
} from "@vuex/mutation-types";

const rootModule = {
  namespaced: true,
  state: {
    name: 'root',
    routeTransitionName: '', // '' | 'route-in' | 'route-out'
  },
  getters: {
    name: state => {
      console.log('state', state)
      
      return state.routeTransitionName;
    }
  },
  mutations: {
    [CHANGE_ROUTER_TRANSITION](state, name = '') {
      state.routeTransitionName = name;
    }
  },
  actions: {

  }
}

export default rootModule;
