<template>
  <div id="home">
    <Navbar />
    <div class="home_content">
      
    </div>
    <Reproductor />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/NavBar.vue'
import Reproductor from '@/components/Reproductor.vue'
import CardMusic from '@/components/cardMusic.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Reproductor,
    CardMusic
  }
}
</script>