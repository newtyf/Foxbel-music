<template>
  <div id="progreso">
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
  mounted() {
    this.audio.addEventListener('timeupdate', (e) => {
      console.log(e.path[0].duration);
      const duration = e.path[0].duration
      const current = e.path[0].currentTime
      this.progress = (current/duration) * 100
    })
  }
}
</script>