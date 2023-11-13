<template>
    <main>
        <div class="my-4">Ricerca</div>

        <div class="container">
            carte
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainComponent',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

main {
    background-color: $primaryColor;
    .container {
        background-color: $lightColor;
    }
}
</style>