<template>
    <div id="search-component">
        <div class="container py-4 px-5">
            <label for="archetype">Filter by Archetype</label>
            <select name="archetype" id="archetype" class="form-select" aria-label="Archetype" v-model="SelectedValue" @change="$emit('archetypeValue', SelectedValue)">
                <option value="" selected>...</option>
                <option value="-Eyes Dragon">-Eyes Dragon</option>
                <option value="ABC">ABC</option>
                <option value="Abyss Script">Abyss Script</option>
                <option value="Adamancipator">Adamancipator</option>
                <option value="Adventurer Token">Adventurer Token</option>
                <option value="Aesir">Aesir</option>
                <option value="Aether">Aether</option>
                <option value="Alligator">Alligator</option>

            </select>
        </div>
    </div>
</template>

<script>
export default {
    name:'SearchComponent',
    data () {
        return {
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