<template>
    <div id="musicCard">
      <div class="options">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="image" @click="playCardMusic">
        <img :src="data.image" alt="">
        <div class="play_image">
          <img src="@/assets/imgs/Reproductor/play-solid.svg" alt="">
        </div>
      </div>
      <div class="titulo">
        <p class="titulo_cancion"><b>{{data.song}}</b></p>
        <p class="titulo_artista">{{data.singer}}</p>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    data: Object
  },
  computed: {
    ...mapState(['audio'])
  },
  methods: {
    playCardMusic() {
      this.$store.commit('llenarCancionActual', this.data)
      this.$store.commit('editAudioSrc', this.data.src)
      this.audio.play()
      this.$store.commit('cambiarPlayed')
    }
  }

}
</script>
