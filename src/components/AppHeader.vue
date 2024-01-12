<script>
import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <header class="header">
        <div class="container">

            <div class="row">

                <div class="logo">
                    <img src="/img/logo.jpg" alt="logo">
                </div>

                <div class="searchbar">
                    <input type="search" placeholder="Cerca Film o Serie Tv" v-model="store.searchQuery"
                        @keyup.enter="$emit('search')" required>
                </div>

            </div>

        </div>

    </header>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/mixins.scss' as *;

.header {

    background-color: #000;

    .container {
        .row {
            @include center (space_b);
        }
    }

    .logo {
        width: 75px;
    }

    input[type="search"] {
        margin: 0 10px;
        padding: 10px;
        border: 1.5px solid #2b2b2b;
        background-color: #2b2b2b;
        color: white;
        transition: border-color 0.4s;
        border-radius: 5px;

        &:focus {
            border-color: #e50914;
            outline: none;
        }
    }
}
</style>