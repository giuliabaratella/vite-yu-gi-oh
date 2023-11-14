<template>
    <header class="p-3 d-flex align-items-center">
        <div class="logo-box pe-4">
            <img src="../assets/images/yu-gi-oh-logo.svg" alt="Yu-Gi-Oh logo">
        </div>
        <h1 class="mb-0">Yu-Gi-Oh-Api</h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

header {
    height: 80px;
    background-color: $lightColor;
    .logo-box{
        height: 40px;
        img{
            height: 100%;
        }
    }
}
</style>