import { createStore } from 'vuex'

export default createStore({
  state: {
    mostrarNav: false,
    audio: new Audio(),
    canciones : [],
    cancionActual: {},
    recientes: [],
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
    llenarCancionesRecientes(state, value) {
      state.recientes.push(value)
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
    async searchSpotifyMusic({commit},value) {
      commit('llenarCanciones', '')
      // const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`;

      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      //     'X-RapidAPI-Key': 'dce4d2011emshd9ed122ccbbc424p1e47d8jsn24ce0fe1bb29'
      //   }
      // };

      // await fetch(url, options)
      //   .then(res => res.json())
      //   .then(json => commit('llenarCanciones', json.data))
      //   .catch(err => console.error('error:' + err));
      const headers = {
        'Accept':'application/json'
      };
      
      fetch(`https://blockdaemon-audius-discovery-06.bdnodes.net/v1/tracks/search?query=${value}&app_name=NEWTAPP`,
      {
        method: 'GET',
      
        headers: headers
      })
      .then(function(res) {
          return res.json();
      }).then(function(body) {
        commit('llenarCanciones', body.data);
      });
    },
    mostrarNavegacion({commit}) {
      commit('cambiarMotrarNav')
    },
    GetCanciones({commit}) {
      const data = require('../../public/canciones')
      commit('llenarCanciones', data.canciones)
    },
    getRecentMusic({commit}, value) {
      commit('llenarCancionesRecientes', value)
    }
  },
  modules: {
  }
})
