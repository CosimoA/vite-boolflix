<script>
// Componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'



// Strumenti
import { store } from './store';
// import axios from 'axios';

export default {
  name: "App",

  components: {
    AppHeader,
    AppMain,
    AppCard,

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
  <AppCard />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
