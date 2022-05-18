<template>
  <div id="home">
    <div id="home_content">
      <Navbar />
      <div class="content">
        <SearchBar />
        <div class="main">
          <div class="banner-music">
            
          </div>
          <div class="musicaCards">
            <CardMusic v-for="(item,index) in canciones" :key="index" :data="item"/>
          </div>
        </div>
      </div>
    </div>
    <Reproductor />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/NavBar.vue'
import Reproductor from '@/components/Reproductor.vue'
import CardMusic from '@/components/cardMusic.vue'
import SearchBar from '@/components/SearchBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Reproductor,
    CardMusic,
    SearchBar
  },
  computed: {
    ...mapState(['canciones'])
  },
}
</script>