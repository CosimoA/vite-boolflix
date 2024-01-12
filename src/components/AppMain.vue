<script>

import AppCard from './AppCard.vue'


export default {
    name: 'AppMain',
    components: {
        AppCard,

    },
}

</script>

<template>
    <main class="main">

        <div class="container">

            <div class="row">

                <AppCard />

            </div>

        </div>

    </main>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/mixins.scss' as *;

.main {
    background-color: #2b2b2b;
    padding: 10px;

    .row {
        @include center (wrap);
    }

}
</style>