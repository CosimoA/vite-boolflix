<script>

import AppCardMovie from './AppCardMovie.vue';
import AppCardSeries from './AppCardSeries.vue';
import { store } from '../store';


export default {
    name: 'AppMain',
    components: {
        AppCardMovie,
        AppCardSeries,
    },
    data() {
        return {
            store,
        };
    },
}

</script>

<template>
    <main class="main">

        <div class="container">
            <h2>Movies</h2>
            <div class="row">

                <div v-if="store.errorMessageMovie">
                    <h2>{{ store.errorMessageMovie }}</h2>
                </div>

                <div v-else v-for="(movie, i) in store.searchMovie" v-bind:key="movie.id">
                    <AppCardMovie v-bind:myMovie="movie" />
                </div>

            </div>
            <h2>Series</h2>
            <div class="row">
                <div v-if="store.errorMessageSeries">
                    <h2>{{ store.errorMessageSeries }}</h2>
                </div>

                <div v-else v-for="(serie, index) in store.searchSeries" v-bind:key="serie.id">
                    <AppCardSeries v-bind:mySerie="serie" />
                </div>

            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/mixins.scss' as *;

.main {
    padding: 10px;
}

.row {
    display: flex;
    overflow-x: auto;
    margin-bottom: 20px;

    &::-webkit-scrollbar {
        width: 0;
    }
}
</style>

