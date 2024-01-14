import { reactive } from "vue";

export const store = reactive({
    // URLs
    /* Movie */ movieUrl: "https://api.themoviedb.org/3/search/movie",
    /* Series */ seriesUrl: "https://api.themoviedb.org/3/search/tv",
    /* Images */ imgUrl: "https://image.tmdb.org/t/p/w342/",

    //Chiave Api TMDB
    apiKey: 'ee9477622fd438eb5e8774f9d79daa52',

    // Api Response Array
    searchMovie: [],
    searchSeries: [],

    // Search Parameters
    searchQuery: "",
    errorMessageMovie: "",
    errorMessageSeries: "",

});