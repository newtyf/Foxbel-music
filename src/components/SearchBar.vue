<template>
  <div id="search">
    <button class="buttonMenu" :class="{'check': mostrarNav}" @click="mostrarNavegacion">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <div class="search-input">
      <div class="input">
        <input type="text" placeholder="Buscar...">
        <img src="@/assets/imgs/SearchBar/lupa.png" alt="Search">
      </div>
    </div>
    <div class="user">
      <div class="user-picture">
        <img src="@/assets/giphy.gif" alt="">
      </div>
      <div class="user-name">
        Axel Munoz
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  computed: {
    ...mapState(['mostrarNav'])
  },
  methods: {
    ...mapActions(['mostrarNavegacion'])
  }
}
</script>

<style>

</style>