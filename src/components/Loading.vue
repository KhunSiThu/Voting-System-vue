<template>
<div class="loading dark:bg-gray-900 dark:text-white bg-white text-black p-4 ">
    <span><i class="fa-solid fa-spinner fa-spin-pulse  text-blue-500 text-5xl"></i></span>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
}


</style>


