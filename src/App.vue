<script>
// Componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'



// Strumenti
import { store } from './store';
// import axios from 'axios';

export default {
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
  <h1>App</h1>
  <AppHeader />
  <AppMain />
  <AppCard />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
