<script>
// Componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


// Strumenti
import { store } from './store';
// import axios from 'axios';

export default {
  name: "App",

  components: {
    AppHeader,
    AppMain,

  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
