<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../store";


export default {
    name: 'AppCardMovie',
    props: {
        myMovie: Object
    },
    data() {
        return {
            store,
        };
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
        <div class="flip-card">
            <div class="front">
                <img v-if="myMovie.poster_path" :src="`${store.imgUrl}${myMovie.poster_path}`">
                <div v-else class="fallback-cover text-white">Cover non disponibile</div>
            </div>
            <div class="back">
                <div class="card-info">
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
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.card {
    border: 1px solid white;
    height: 497px;
    width: 342px;
    background-color: black;
    perspective: 1000px;
    overflow: hidden;

}

.card-info {
    padding-top: 40px;
}

.flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

.card:hover .flip-card {
    transform: rotateY(180deg);
}

.front,
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.front {
    transform: rotateY(0deg);
}

.back {
    transform: rotateY(180deg);
    display: none;
}

.card:hover .back {
    display: block;
}

.card-info {
    color: white;
    max-height: 300px;
}

i {
    margin-left: 5px;
}

.fi {
    width: 30px;
}
</style>