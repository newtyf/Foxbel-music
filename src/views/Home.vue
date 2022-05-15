<template>
  <div id="home">
    <div id="home_content">
      <Navbar />
      <div class="content">
        <SearchBar />
        <div class="banner-music">
          <p>aaaa</p>
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

export default {
  name: 'Home',
  components: {
    Navbar,
    Reproductor,
    CardMusic,
    SearchBar
  }
}
</script>