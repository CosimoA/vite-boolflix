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
            store.errorMessageMovie = "Nessun Film trovato";
            console.log(store.errorMessageMovie);
          } else {
            store.searchMovie = response.data.results;
            store.errorMessageMovie = "";
            console.log("RICERCA: " + store.searchQuery, response.data.results);
          }
        })
        .catch((err) => {
          console.error('Errore durante la chiamata API:', err);
        })

      let completeUrlSeries = `${store.seriesUrl}?api_key=${store.apiKey}&query=${store.searchQuery}&language=it-IT`;
      axios
        .get(completeUrlSeries)
        .then((response) => {
          if (response.data.results.length === 0) {
            store.errorMessageSeries = "Nessuna Serie Tv trovata";
            console.log(store.errorMessageSeries);
          } else {
            store.searchSeries = response.data.results;
            store.errorMessageSeries = "";
            console.log("RICERCA: " + store.searchQuery, response.data.results);
          }
        })
        .catch((err) => {
          console.error('Errore durante la chiamata API:', err);
        })
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
