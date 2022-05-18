<template>
  <div id="progreso" @click="jumpBar">
    <div class="barra" :style="{width: progress+'%'}"><div class="dot"></div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      progress: 0
    }
  },
  computed: {
    ...mapState(['audio'])
  },
  methods: {
    jumpBar(e) {
      const progresoArea = document.getElementById('progreso').clientWidth
      let clickOffSetX = e.offsetX
      let songDuration = this.audio.duration

      let newTime = (clickOffSetX/progresoArea) * songDuration
      this.$store.commit('editAudioCurrentTime', newTime)
      this.$emit('darPlay')
    },
  },
  mounted() {
    this.audio.addEventListener('timeupdate', (e) => {
      const duration = e.path[0].duration
      const current = e.path[0].currentTime
      this.progress = (current/duration) * 100
    })
  }
}
</script>