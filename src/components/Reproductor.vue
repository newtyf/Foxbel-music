<template>
  <div id="reproductor">
    <div class="cancion">
      <img src="@/assets/giphy.gif" alt="image of the singer">
      <div class="cancion_titulo">
        <p class="song">Song</p>
        <p class="singer">Singer - Album</p>
      </div>
    </div>
    <div class="controls">
      <div class="previous efecto" @click="controls(0)">
        <img src="../assets/imgs/Reproductor/backward-step-solid.svg" alt="">
      </div>
      <div class="pause efecto" v-show="play" @click="controls(1)">
        <img src="../assets/imgs/Reproductor/pause-solid.svg" alt="">
      </div>
      <div class="play efecto" v-show="!play" @click="controls(2)">
        <img src="../assets/imgs/Reproductor/play-solid.svg" alt="">
      </div>
      <div class="next efecto" @click="controls(3)">
        <img src="../assets/imgs/Reproductor/forward-step-solid.svg" alt="">
      </div>
    </div>
    <div class="audio">
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

import song from '/src/assets/music/ASAN - 7 Digitos (Primera version) _ Letra adelanto(MP3_128K).mp3'

export default {
  data() {
    return {
      volumen: 0,
      mute: false,
      play: false,
      audio: new Audio(song)
    }
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
    controls(position) {
      const Allcontrols = document.getElementsByClassName('efecto')
      for (const iterator of Allcontrols) {
        iterator.classList.remove('fondo')
      }
      if (position == 1 || position == 2) {
        this.play = !this.play
        const controlsplay = document.getElementsByClassName('efecto')[1]
        controlsplay.classList.add('fondo')
        const controlspause = document.getElementsByClassName('efecto')[2]
        controlspause.classList.add('fondo')
        if (position == 2) {
          this.audio.play();
        }
        if (position == 1) {
          this.audio.pause()
        }

      }
      else {
      const controls = document.getElementsByClassName('efecto')[position]
      console.log(controls);
      controls.classList.add('fondo')
      }
    },
  },
  watch: {
    volumen() {
      this.audio.volume = this.volumen /100
    }
  },
  created() {
    if (navigator.userAgent.includes('Android')) {
      this.volumen = 100
    }

    if (navigator.userAgent.includes('Windows')) {
      this.volumen = 10
    }
    this.audio.volume = this.volumen/100
  },
}
</script>