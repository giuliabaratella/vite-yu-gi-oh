<template>
    <div class="card-box text-center mb-3">
        <div class="img-box mb-3">
            <img :src="img" :alt="title">
        </div>
        <div class="card-text">
            <h5 class="text-uppercase mb-3">{{title}}</h5>
            <div>{{subtitle}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'cardBox',
        props: {
            img: String,
            title: String,
            subtitle: String,
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-box{
    width: 200px;
    background-color: $primaryColor;
    .card-text{
        padding: 10px;
        h5{
            color: $lightColor;
            font-size: 1em;
        }
    }
    .img-box{
        img {
            width: 100%;
        }
    }

}
</style>
