import { createStore } from 'vuex'

export default createStore({
  state: {
    mostrarNav: false,
  },
  mutations: {
    cambiarMotrarNav(state) {
      state.mostrarNav = !state.mostrarNav;
    }
  },
  actions: {
    mostrarNavegacion({commit}) {
      commit('cambiarMotrarNav')
    }
  },
  modules: {
  }
})
