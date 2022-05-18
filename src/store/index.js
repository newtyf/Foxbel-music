import { createStore } from 'vuex'

export default createStore({
  state: {
    mostrarNav: false,
    audio: new Audio(),
    canciones : [],
    cancionActual: {},
    isPlaying: false,
  },
  mutations: {
    cambiarMotrarNav(state) {
      state.mostrarNav = !state.mostrarNav;
    },
    llenarCanciones(state, value) {
      state.canciones = value
    },
    llenarCancionActual(state, value) {
      state.cancionActual = value
    },
    editAudioSrc(state, value) {
      state.audio.src = value
    },
    cambiarPlayed(state) {
      if (state.audio.paused) {
        state.isPlaying = false
      } else {
        state.isPlaying = true
      }
    },
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
