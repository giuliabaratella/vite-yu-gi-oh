<template>
    <main class="pb-3">
        <div class="container px-5 pb-5">
            
            <div class="row column-gap-4 justify-content-between">
                <div class="counter col-12 mb-4">
                    <p class="my-3 fw-bold">Found {{ store.cardList.length }} cards</p>
                </div>
                <cardBox v-for="card in store.cardList"
                :title="card.name"
                :subtitle="card.type"
                :img="card.card_images[0].image_url"/>
            </div>
            
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
    .counter {
        background-color: $darkColor;
        color: $lightColor;
    }
    .container {
        background-color: $lightColor;
    }
}
</style>