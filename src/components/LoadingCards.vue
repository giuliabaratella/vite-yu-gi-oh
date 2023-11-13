<template>
    <div id="loading-cards">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="text-center">
                <p class="fw-bold">Loading...</p>
                <div class="progress"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;
#loading-cards{
    background-color: $primaryColor;
    .container {
    color: $lightColor;
    height: calc(100vh - 80px);

    p{
        font-size: 2em;
    }
    .progress {
    width:200px;
    height:30px;
    border-radius: 20px;
    position: relative;
    }
    .progress::before {
    content:"";
    position: absolute;
    margin:3px;
    inset:0 100% 0 0;
    border-radius: 20px;
    background: $primaryColor;
    animation:progress 2s infinite;
    }
    @keyframes progress {
        100% {inset:0}
    }
    }

}
    
</style>