<template>
    <div v-if="king" id="overallKing"
        class="flex flex-col items-center border-blue-400 border-2 bg-white shadow-2xl rounded-lg md:rounded-3xl md:p-6 p-2 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
        <div v-if="title" class="md:w-40 md:h-32 w-20 h-12 flex flex-col items-center justify-center p-5">
            <img src="https://www.pngall.com/wp-content/uploads/1/Crown-PNG-Image.png" alt="">
        </div>
        <div class="relative flex flex-col items-center">
            <div class="relative w-full h-24 md:h-60 rounded overflow-hidden shadow-lg ">
                <img :src="king.profileImage" alt="king Name" class="w-full h-full object-cover ">
            </div>
            <div class="absolute left-4 bottom-3 md:-bottom-8 items-center text-sm">
                <span
                    class="md:w-16 md:h-16 w-6 h-6 md:text-3xl text-xs font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                    {{ king.number }}
                </span>
            </div>
        </div>
        <h2 class="text-xs sm:text-base md:text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.name }}</h2>
        <p class="w-full text-left font-bold text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Total Votes - {{ king.voterCount }}</p>
        <p class="w-full text-left font-bold text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">{{ king.major }} Major</p>
    </div>

    <div v-if="!king" id="overallKing"
        class="flex flex-col items-center justify-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
        <h1 class="text-xs sm:text-lg md:text-2xl">Unpublish</h1>
    </div>

    <div v-if="queen" id="overallQueen"
        class="flex flex-col items-center border-pink-400 border-2 bg-white shadow-2xl rounded-lg md:rounded-3xl md:p-6 p-2 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
        <div class="relative flex flex-col items-center">
            <div v-if="title" class="md:w-40 md:h-32 w-16 h-12 flex flex-col items-center justify-center">
                <img class="" src="https://pngimg.com/d/crown_PNG22.png" alt="">
            </div>
            <div class="relative w-full h-24 md:h-60 rounded overflow-hidden shadow-lg">
                <img :src="queen.profileImage" alt="queen Name" class="w-full h-full object-cover">
            </div>
            <div class="absolute left-4 bottom-3 md:-bottom-8 items-center text-sm">
                <span
                    class="md:w-16 md:h-16 w-6 h-6 md:text-3xl text-xs font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                    {{ queen.number }}
                </span>
            </div>
        </div>
        <h2 class="text-xs sm:text-base md:text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.name }}</h2>
        <p class="w-full text-left font-bold text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Total Votes - {{ queen.voterCount }}</p>
        <p class="w-full text-left font-bold text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Major - {{ queen.major }}</p>
    </div>

    <div v-if="!queen" id="overallQueen"
        class="flex flex-col items-center justify-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
        <h1 class="text-xs sm:text-lg md:text-2xl">Unpublish</h1>
    </div>
</template>


<script>
export default {
    props: ['king', 'queen','title']
}
</script>

<style></style>
