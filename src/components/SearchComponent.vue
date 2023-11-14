<template>
    <div id="search-component">
        <div class="container py-4 px-5">
            <label for="archetype">Filter by Archetype</label>
            <select name="archetype" id="archetype" class="form-select" aria-label="Archetype" v-model="SelectedValue" @change="$emit('archetypeValue', SelectedValue)">
                <option value="" selected>...</option>
                <option v-for="el in store.archetypesList" :value="el.archetype_name">{{el.archetype_name}}</option>
            </select>
        </div>
    </div>
</template>

<script>
import {store} from '../data/store.js';
export default {
    name:'SearchComponent',
    data () {
        return {
            store,
            SelectedValue:'',
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#search-component {
    background-color: $primaryColor;
    .container {
        background-color: $lightColor;
    }
}


</style>