<template>
  <div id="search">
    <button class="buttonMenu" :class="{'check': mostrarNav}" @click="mostrarNavegacion">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <div class="search-input">
      <div class="input">
        <input type="text" placeholder="Buscar..."  v-model="textSearch" @keyup="searchMusic">
        <img src="@/assets/imgs/SearchBar/lupa.png" alt="Search">
      </div>
    </div>
    <div class="user">
      <div class="user-picture">
        <img src="@/assets/giphy.gif" alt="">
      </div>
      <div class="user-name">
        Axel Munoz
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  data() {
    return {
      textSearch: ''
    }
  },
  computed: {
    ...mapState(['mostrarNav'])
  },
  methods: {
    ...mapActions(['mostrarNavegacion', 'searchSpotifyMusic']),
    searchMusic(event) {
      if(event.keyCode == 13) {
        this.searchSpotifyMusic(this.textSearch);
        this.$emit('mostrarBusqueda')
      }
    }
  }
}
</script>

<style>

</style>