<template>
  <div id="reproductor">
    <ProgressBar @darPlay="play" />
    <div class="cancion">
      <img :src="cancionActual.image" alt="image of the singer">
      <div class="cancion_titulo">
        <p class="song">{{cancionActual.song}}</p>
        <p class="singer">{{cancionActual.singer}} - {{cancionActual.album}}</p>
      </div>
    </div>
    <div class="controls">
      <div class="previous efecto" @click="prev">
        <img src="../assets/imgs/Reproductor/backward-step-solid.svg" alt="">
      </div>
      <div class="pause efecto" v-show="isPlaying" @click="pause">
        <img src="../assets/imgs/Reproductor/pause-solid.svg" alt="">
      </div>
      <div class="play efecto" v-show="!isPlaying" @click="play">
        <img src="../assets/imgs/Reproductor/play-solid.svg" alt="">
      </div>
      <div class="next efecto" @click="next">
        <img src="../assets/imgs/Reproductor/forward-step-solid.svg" alt="">
      </div>
    </div>
    <div class="audio">
      <!-- <input id="file" type="file" @change="create_playlist" name="" multiple> -->
      <input v-model="volumen" type="range" min="0" max="100" id="myNumber">
      <div class="boton_efecto"></div>
      <img v-show="volumen >= 50 && mute == false" @click="mutear" src="@/assets/imgs/Reproductor/volume-high-solid.svg" alt="">
      <img v-show="volumen < 50 && volumen != 0 && mute == false" @click="mutear" src="@/assets/imgs/Reproductor/volume-low-solid.svg" alt="">
      <img v-show="volumen == 0 && mute == false" @click="mutear" src="@/assets/imgs/Reproductor/volume-off-solid.svg" alt="">
      <img v-show="mute == true" @click="mutear" src="@/assets/imgs/Reproductor/volume-xmark-solid.svg" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  data() {
    return {
      index: 1,
      volumen: 0,
      mute: false,
      musicDuration: 0,
    }
  },
  components: {
    ProgressBar
  },
  computed: {
    ...mapState(['canciones', 'cancionActual', 'audio', 'isPlaying'])
  },
  methods: {
    mutear() {
      this.mute = !this.mute

      const imagen = document.getElementsByClassName('boton_efecto')[0]
      imagen.classList.add('efecto')
      imagen.addEventListener("animationend", ()=> {
        imagen.classList.remove('efecto')
      }, false);

      this.audio.muted = this.mute

    },
    play(song) {
      if (typeof song !== "undefined" && typeof song.src !== "undefined") {
        this.$store.commit('llenarCancionActual', song)

        this.$store.commit('editAudioSrc', this.cancionActual.src)
      }
      this.audio.play()
      this.$store.commit('cambiarPlayed')
    },
    pause() {
      this.audio.pause()
      this.$store.commit('cambiarPlayed')
    },
    prev() {
      this.index --
      if (this.index < 0) {
        this.index = this.canciones.length - 1
      }

      this.$store.commit('llenarCancionActual', this.canciones[this.index])
      this.play(this.cancionActual)
    },
    next() {
      this.index ++
      if (this.index >= this.canciones.length) {
        this.index = 0
      }

      this.$store.commit('llenarCancionActual', this.canciones[this.index])
      this.play(this.cancionActual)
    },
  },
  watch: {
    volumen() {
      this.audio.volume = this.volumen /100
    },
  },
  created() {
    this.$store.dispatch('GetCanciones')
    this.$store.commit('llenarCancionActual', this.canciones[this.index])
    this.$store.commit('editAudioSrc', this.cancionActual.src)
    if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('iPhone') ) {
      this.volumen = 100
    }

    if (navigator.userAgent.includes('Windows')) {
      this.volumen = 10
    }
    this.audio.volume = this.volumen/100
  },
  mounted() {
    this.audio.onended = () => {alert('acabo la musica perro'); this.$store.commit('cambiarPlayed'); this.prev()}
  },
}
</script>