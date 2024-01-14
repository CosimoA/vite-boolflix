<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    name: 'AppCard',
    props: {
        myMovie: Object
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
                <li>Titolo Film:<br> <strong>{{ myMovie.title }}</strong></li>
                <li>Titolo Originale:<br> <strong>{{ myMovie.original_title }}</strong></li>
                <li>Lingua: <strong>{{ myMovie.original_language }}</strong>
                    <span :class="`fi fi-${getFlagLanguage(myMovie.original_language)}`"></span>
                </li>
                <li>Voto: <strong>{{ myMovie.vote_average }}</strong>
                    <i v-for="n in 5" :key="n" class="fa-star"
                        :class="{ 'fa-solid': n <= Math.round(myMovie.vote_average / 2), 'fa-regular': n > Math.round(myMovie.vote_average / 2) }"
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