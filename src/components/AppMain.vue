<script>

import AppCard from './AppCard.vue';
import { store } from '../store';


export default {
    name: 'AppMain',
    components: {
        AppCard,
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

            <div class="row">
                <div v-if="store.errorMessage">
                    <h2>{{ store.errorMessage }}</h2>
                </div>

                <div v-else v-for="(movie, i) in store.searchMovie" v-bind:key="movie.id">
                    <AppCard />
                </div>



            </div>

        </div>

    </main>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/mixins.scss' as *;

.main {
    padding: 10px;

    .row {
        @include center (wrap);
    }

}
</style>