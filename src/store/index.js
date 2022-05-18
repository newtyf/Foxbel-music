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
    editAudioCurrentTime(state, value) {
      state.audio.currentTime = value
    }
  },
  actions: {
    // async loginInDezzer() {
    //   await fetch('https://connect.deezer.com/oauth/auth.php?app_id=542542&redirect_uri=https://newtmusic.netlify.app/&perms=basic_access,email', {method: 'POST'})
    //     .then((res) => {res.json(true)})
    //     .then((data) => {console.log(data);})
    // },
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
