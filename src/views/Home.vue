<template>
  <div id="home">
    <div id="home_content">
      <Navbar @mostrarRecientes="mostrarRecientes = 1"  @mostrarHome="mostrarRecientes = 0"/>
      <div class="content">
        <SearchBar @mostrarBusqueda="mostrarRecientes = 0"/>
        <div class="main">
          <div class="banner-music">
            <div class="imagen">
              <img :src="cancionActual.artwork['150x150']" alt="" v-if="cancionActual.artwork['480x480'] == undefined">
              <img :src="cancionActual.artwork['480x480']" alt="" v-else>
            </div>
            <div class="inform_music">
              <div class="singer">
                <div class="name">{{cancionActual.user.name}}</div>
                <p>Lo mejor de {{cancionActual.user.name}} <span class="seguidores">{{}} seguidores</span></p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatum obcaecati quidem inventore nesciunt assumenda sunt, commodi quaerat asperiores vero! Modi et cumque fuga cum sequi, magnam dolores soluta minus.
                </p>
              </div>
              <div class="options">
                <button class="reproducir btn btn-pink" @click="reproducir">
                  Reproducir
                </button>
                <button class="seguir btn btn-trans">
                  Seguir
                </button>
                <div class="options-dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="resultados-content" v-if="mostrarRecientes == 0">
            <h2 class="resultados">RESULTADOS</h2>
            <div class="musicaCards" v-if="canciones.length !== 0">
            <CardMusic v-for="(item,index) in canciones" :key="index" :data="item"/>
            </div>
            <div class="musicaCards" v-else>
              <p>cargando...</p>
            </div>
          </div>
          <div class="resultados-content" v-else>
            <h2 class="resultados">RECIENTES</h2>
            <div class="musicaCards" v-if="recientes.length !== 0">
            <CardMusic v-for="(item,index) in recientes" :key="index" :data="item"/>
            </div>
            <div class="musicaCards" v-else>
              <p>No hay canciones recientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Reproductor />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/NavBar.vue'
import Reproductor from '@/components/Reproductor.vue'
import CardMusic from '@/components/cardMusic.vue'
import SearchBar from '@/components/SearchBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      mostrarRecientes: 0
    }
  },
  components: {
    Navbar,
    Reproductor,
    CardMusic,
    SearchBar,
  },
  computed: {
    ...mapState(['canciones', 'cancionActual', 'audio', 'recientes'])
  },
  methods: {
    reproducir() {
      this.$store.commit('llenarCancionActual', this.cancionActual)
      this.$store.commit('editAudioSrc', this.cancionActual.preview)
      this.audio.play()
      this.$store.commit('cambiarPlayed')
    }
  },
  created() {
    this.$store.dispatch('GetCanciones')
    this.$store.commit('llenarCancionActual', this.canciones[0])
  }
}
</script>