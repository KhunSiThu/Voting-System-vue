<template>

<router-view/>

</template>

<script>

export default {
    components: {

    },
}
</script>

<style>
.bg-blur {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.493);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
</style>