<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    name: 'AppCardSeries',
    props: {
        mySerie: Object
    },
    methods: {
        getFlagLanguage(language) {
            switch (language) {
                case 'en':
                    return 'us';
                case 'ja':
                    return 'jp';
                default:
                    return language;
            }
        }
    }
}

</script>

<template>
    <div class="card">
        <div class="info">
            <ul>
                <li>Titolo Film:<br> <strong>{{ mySerie.name }}</strong></li>
                <li>Titolo Originale:<br> <strong>{{ mySerie.original_name }}</strong></li>
                <li>Lingua: <strong>{{ mySerie.original_language }}</strong>
                    <span :class="`fi fi-${getFlagLanguage(mySerie.original_language)}`"></span>
                </li>
                <li>Voto: <strong>{{ mySerie.vote_average }}</strong>
                    <i v-for="n in 5" :key="n" class="fa-star"
                        :class="{ 'fa-solid': n <= Math.round(mySerie.vote_average / 2), 'fa-regular': n > Math.round(mySerie.vote_average / 2) }"
                        style="color: #ffff00;"></i>
                </li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid white;
    min-height: 500px;
    min-width: 350px;
    width: 25%;
    background-color: black;
}

.info {
    max-width: 300px;
    // text-align: center;
    color: white;
}

i {
    margin-left: 5px;
}

.fi {
    width: 30px;
}
</style>