<template>
    <div id="musicCard">
      <div class="options">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="image" @click="playCardMusic">
        <img :src="data.artwork['150x150']" alt="">
        <!-- <div class="play_image">
          <img src="@/assets/imgs/Reproductor/play-solid.svg" alt="">
        </div> -->
      </div>
      <div class="titulo">
        <p class="titulo_cancion"><b>{{cortarTexto(data.title, 20)}}</b></p>
        <p class="titulo_artista">{{data.user.name}}</p>
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
      this.$store.dispatch('getRecentMusic', this.data)
      this.$store.commit('llenarCancionActual', this.data)
      if (this.data.preview !== undefined) {
        this.$store.commit('editAudioSrc', this.data.preview)
      } else {
        this.$store.commit('editAudioSrc', `https://blockdaemon-audius-discovery-06.bdnodes.net/v1/tracks/${this.data.id}/stream?app_name=NEWTAPP`)
      }
      this.audio.play()
      this.$store.commit('cambiarPlayed')
    },
    cortarTexto(value,numero){
      if(value.length > numero) {
          value = value.substr(0,numero)+"...";
      }
      return value
    },
  }

}
</script>
