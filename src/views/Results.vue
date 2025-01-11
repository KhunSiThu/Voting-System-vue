<template>
<SideBar></SideBar>

<div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
    <!-- Hero Section -->
    <section class="text-center py-24 px-3">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-2xl md:text-4xl font-extrabold mb-6 tracking-tight text-blue-500 dark:text-blue-400">
                King & Queen Election Results
            </h1>
            <p class="text-sm md:text-xl mb-10 prose text-justify text-gray-600 dark:text-gray-300">
                Join us in celebrating the winners from each major. These exceptional individuals have earned recognition for their leadership and contributions to their communities.
            </p>
            <a href="#major-results" class="text-lg text-indigo-500 font-semibold inline-block px-6 py-3 border-2 border-indigo-200 rounded-full transition-all duration-300 hover:bg-indigo-200 dark:border-indigo-400 dark:text-indigo-400 hover:dark:bg-indigo-500">
                View Major Results
            </a>
        </div>
    </section>

    <!-- Overall Winners Section -->
    <section class="py-20 rounded-xl mx-5 mb-16">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-gray-100">Overall Winners</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                <!-- Overall King -->
                <div id="overallKing" class="flex flex-col items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="font-bold text-center">Data not found!</h1>
                </div>

                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <h1 class="font-bold text-center">Data not found!</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- Major Results Sections -->
    <section id="major-results" class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-semibold mb-12 text-center text-indigo-700 dark:text-indigo-400">Major Results</h2>

            <!-- Electronic Engineering Section -->
            <div class="mb-16">
                <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Electronic Engineering</h3>
                <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300">These outstanding students have demonstrated exceptional skills in areas like circuit design and innovative tech solutions. Their work reflects the future of engineering.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                    <!-- King Card -->
                    <div id="ECKing" class="bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>

                    <!-- Queen Card -->
                    <div id="ECQueen" class="bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>
                </div>
            </div>

            <!-- Electrical Power Engineering Section -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Electrical Power Engineering</h3>
                <p class="text-sm md:text-xl text-gray-600 mb-6 prose text-justify dark:text-gray-300">Our winners from Electrical Power Engineering have excelled in power systems and renewable energy, driving innovations for a sustainable future.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                    <!-- King Card -->
                    <div id="EPKing" class="bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>

                    <!-- Queen Card -->
                    <div id="EPQueen" class="bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>
                </div>
            </div>

            <!-- Mechanical Engineering Section -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Mechanical Engineering</h3>
                <p class="text-sm md:text-xl text-gray-600 mb-6 prose text-justify dark:text-gray-300">Mechanical Engineering students are pushing the boundaries of robotics, thermodynamics, and mechanical design.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                    <!-- King Card -->
                    <div id="MEKing" class="bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>

                    <!-- Queen Card -->
                    <div id="MEQueen" class="bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>
                </div>
            </div>

            <!-- Civil Engineering Section -->
            <div class="mb-16">
                <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Civil Engineering</h3>
                <p class="text-sm md:text-xl text-gray-600 mb-6 prose text-justify dark:text-gray-300">Civil Engineering students are designing the infrastructure of tomorrow, focusing on sustainable building practices and innovative construction methods.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                    <!-- King Card -->
                    <div id="CEKing" class="bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>

                    <!-- Queen Card -->
                    <div id="CEQueen" class="bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="font-bold text-center">Data not found!</h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>


</template>

  
  
<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
        SideBar
    },
}

// Add any logic here if needed, for example for toggling dark mode
</script>
  
  
<style scoped>
/* You can add custom dark mode styles here if necessary */
</style>
