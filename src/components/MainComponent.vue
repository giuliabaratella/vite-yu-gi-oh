<template>
    <main>
        <div class="my-4">Ricerca</div>
        <div class="container d-flex flex-wrap justify-content-between column-gap-5 p-5">
            <cardBox v-for="card in store.cardList"
            :title="card.name"
            :subtitle="card.type"
            :img="card.card_images[0].image_url"/>
        </div>
    </main>
</template>

<script>
import {store} from '../data/store.js';
import cardBox from './cardBox.vue';
export default {
    name: 'MainComponent',
    components: {
        cardBox,
    },
    data () {
        return {
            store,
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

main {
    background-color: $primaryColor;
    padding-bottom: 20px;
    .container {
        background-color: $lightColor;
    }
}
</style>