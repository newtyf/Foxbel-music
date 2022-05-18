<template>
  <div id="home">
    <div id="home_content">
      <Navbar />
      <div class="content">
        <SearchBar />
        <div class="main">
          <div class="banner-music">
            <div class="imagen">
              <img :src="cancionActual.image" alt="">
            </div>
            <div class="inform_music">
              <div class="singer">
                <div class="name">{{cancionActual.singer}}</div>
                <p>Lo mejor de {{cancionActual.singer}} <span class="seguidores">{{}} seguidores</span></p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatum obcaecati quidem inventore nesciunt assumenda sunt, commodi quaerat asperiores vero! Modi et cumque fuga cum sequi, magnam dolores soluta minus.
                </p>
              </div>
              <div class="options">
                <button class="reproducir btn btn-pink">
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
          <div class="resultados-content">
            <h2 class="resultados">RESULTADOS</h2>
            <div class="musicaCards">
            <CardMusic v-for="(item,index) in canciones" :key="index" :data="item"/>
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
  components: {
    Navbar,
    Reproductor,
    CardMusic,
    SearchBar
  },
  computed: {
    ...mapState(['canciones', 'cancionActual'])
  },
}
</script>