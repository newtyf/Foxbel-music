<template>
  <div id="reproductor">
    <div class="cancion">
      <img :src="current.image" alt="image of the singer">
      <div class="cancion_titulo">
        <p class="song">{{current.song}}</p>
        <p class="singer">{{current.singer}} - {{current.album}}</p>
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


export default {
  data() {
    return {
      current: {},
      index: 0,

      volumen: 0,
      mute: false,
      isPlaying: false,
      audio: new Audio(),
      musicDuration: 0,
    }
  },
  computed: {
    ...mapState(['canciones'])
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
      if (typeof song.src !== "undefined") {
        this.current = song

        this.audio.src = this.current.src
      }
      this.audio.play()
      this.isPlaying = true
    },
    pause() {
      this.audio.pause()
      this.isPlaying = false
    },
    prev() {
      this.index --
      if (this.index < 0) {
        this.index = this.canciones.length - 1
      }

      this.current = this.canciones[this.index]
      this.play(this.current)
    },
    next() {
      this.index ++
      if (this.index > this.canciones.length) {
        this.index = 0
      }

      this.current = this.canciones[this.index]
      this.play(this.current)
    }
  },
  watch: {
    volumen() {
      this.audio.volume = this.volumen /100
    },
  },
  created() {
    this.$store.dispatch('GetCanciones')
    this.current = this.canciones[this.index],
    this.audio.src = this.current.src
    if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('iPhone') ) {
      this.volumen = 100
    }

    if (navigator.userAgent.includes('Windows')) {
      this.volumen = 10
    }
    this.audio.volume = this.volumen/100
  },
  mounted() {
    this.audio.onended = () => {alert('acabo la musica perro'); this.play = false}
  },
}
</script>