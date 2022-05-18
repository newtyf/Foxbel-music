import { createStore } from 'vuex'

export default createStore({
  state: {
    mostrarNav: false,
    canciones : []
  },
  mutations: {
    cambiarMotrarNav(state) {
      state.mostrarNav = !state.mostrarNav;
    },
    llenarCanciones(state, value) {
      state.canciones = value
    }
  },
  actions: {
    mostrarNavegacion({commit}) {
      commit('cambiarMotrarNav')
    },
    GetCanciones({commit}) {
      const data = require('../../public/canciones')
      commit('llenarCanciones', data.canciones)
    }
  },
  modules: {
  }
})
