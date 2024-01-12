<script>

export default {
    name: 'AppHeader',
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
                    <input type="text" placeholder="Cerca Film o Serie Tv">
                </div>

            </div>

        </div>

    </header>
</template>

<style lang="scss">
@use '../styles/general.scss';

.header {
    background-color: #000;

    .container {
        .row {
            justify-content: flex-end;
            align-items: center;
        }
    }

    .logo {
        width: 75px;
        margin-right: auto;
    }

    input[type="text"] {
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