<script>
// Componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


// Strumenti
import { store } from './store';
import axios from 'axios';

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
  },
  methods: {
    searchMovie() {
      // Controlla se l'input è vuoto
      if (this.store.searchQuery.trim() === '') {
        return;
      }

      // Altrimenti, esegui la chiamata API
      let completeUrlMovie = `${store.movieUrl}?api_key=${store.apiKey}&query=${store.searchQuery}&language=it-IT`;

      axios
        .get(completeUrlMovie)
        .then((response) => {
          if (response.data.results.length === 0) {
            store.errorMessage = "Nessun film trovato";
            console.log(store.errorMessage);
          } else {
            store.searchMovie = response.data.results;
            store.errorMessage = "";
            console.log("RICERCA: " + store.searchQuery, response);
          }
        })
        .catch((error) => {
          console.error('Errore durante la chiamata API:', error);
        });
    },
  }
}
</script>

<template>
  <AppHeader @search="searchMovie" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
