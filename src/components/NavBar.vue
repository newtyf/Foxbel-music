<template>
  <nav id="navBar">
    <div id="nav" :class="{'selected' : mostrarNav}">
    <div class="logo" @click="$emit('mostrarHome')">
      <img src="@/assets/foxbel-music.png" alt="" >
    </div>
    <nav class="navegacion">
      <div class="libreria">
        <h2>Mi libreria</h2>
        <ul>
          <li @click="$emit('mostrarRecientes')"><span></span> Recientes</li>
          <li><span></span> Artistas</li>
          <li><span></span> Album</li>
          <li><span></span> Canciones</li>
          <li><span></span> Estaciones</li>
        </ul>
      </div>
      <div class="playlist">
        <h2>Playlist</h2>
        <ul>
          <li><span></span> Metal</li>
          <li><span></span> Para bailar</li>
          <li><span></span> Rock 90s</li>
          <li><span></span> Baladas</li>
        </ul>
      </div>
    </nav>
    </div>
    <div class="fondoNav" :class="{'mostrar' : mostrarNav}" @click="mostrarNavegacion">
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['mostrarNav'])
  },
  methods: {
    ...mapActions(['mostrarNavegacion'])
  }
}
</script>