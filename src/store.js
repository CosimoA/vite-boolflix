import { reactive } from "vue";

export const store = reactive({
    // URLs
    /* Api */ apiUrl: "https://api.themoviedb.org/3/search/",
    /* Images */ imgUrl: "https://image.tmdb.org/t/p/w500/",

    //Chiave Api TMDB
    apiKey: 'ee9477622fd438eb5e8774f9d79daa52',

    // Api Response Array
    searchMovie: [],
    searchSeries: [],

    // Search Parameters
    searchQuery: "",
    searchLanguage: "it",
});