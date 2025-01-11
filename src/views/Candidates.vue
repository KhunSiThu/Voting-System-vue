<template>
<SideBar></SideBar>

<div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

    <!-- Hero Section -->
    <section id="Hero" class="text-center py-20 relative bg-cover bg-center flex justify-center items-center dark:bg-black">
        <div class="absolute inset-0 bg-gradient-to-r from-black to-black opacity-70"></div>
        <div class="relative px-4 sm:px-6 lg:px-8 ">
            <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Meet the candidates</h1>
            <p class="text-base sm:text-lg lg:text-2xl text-white mb-6 sm:mb-8">
                Get to know the candidates vying for the title of King and Queen!
            </p>
            <div class="grid grid-cols-4 sm:grid-cols-4 gap-4 justify-center items-center max-w-3xl mx-auto z-20">
                <img src="../Images/EC.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="EC">
                <img src="../Images/ME.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="ME">
                <img src="../Images/CE.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="CE">
                <img src="../Images/EP.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="EP">
            </div>
        </div>
    </section>

    <!-- Search Section -->
    <section class="py-10 text-center">
        <div class="max-w-6xl mx-auto px-4 sm:px-0 lg:px-8">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Search candidates</h2>
            <input v-model="searchValue" id="searchInput" placeholder="Search by Name or candidate Number" class="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md mx-auto text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        </div>
    </section>

    <!-- Filter Section -->
    <section class="hidden pb-10 text-center lg:block">
        <div class="max-w-6xl mx-auto px-0 sm:px-0 lg:px-8">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">candidates by Major</h2>
            <div class="flex flex-wrap justify-center gap-5 ">
                <button class="bg-blue-500 text-white p-3 rounded text-sm sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('all')">All</button>
                <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Civil Engineering')">Civil Engineering</button>
                <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Electrical Power Engineering')">Electrical Power Engineering</button>
                <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Electronic Engineering')">Electronic Engineering</button>
                <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Mechanical Engineering')">Mechanical Engineering</button>
            </div>
        </div>
    </section>

    <!-- Candidate Sections -->
    <section class="py-16 px-5 text-center bg-gray-100 dark:bg-gray-900">
        <div v-if="error">
            <p class="text-red-500">{{ error }}</p>
        </div>
        <div v-else id="candidates-show-con" class=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">

            <!-- Candidate Card -->
            <div v-for="candidate in filterCandidates" :key="candidate.id" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border dark:border-gray-700">
                <div class="relative flex flex-col items-center ">
                    <div class="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4" :class="candidate.gender === 'male' ? 'border-blue-500' : 'border-pink-400'">
                        <img src="https://img.freepik.com/free-photo/confident-asian-woman-face-portrait-smiling_53876-144815.jpg?ga=GA1.1.518632610.1735269050&semt=ais_hybrid" alt="Candidate Name" class="w-full h-full object-cover">
                    </div>

                    <div class="absolute left-0 -bottom-8 items-center text-sm">
                        <span class="w-16 h-16 text-3xl font-bold text-white flex items-center justify-center rounded-full mr-3" :class="candidate.gender === 'male' ? 'bg-blue-500' : 'bg-pink-400'">
                            {{candidate.number}}
                        </span>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ candidate.name }}</h2>
                <p class="font-bold text-gray-700 dark:text-gray-300">Major - {{ candidate.major }}</p>
            </div>

        </div>
    </section>

    <!-- About the Event Section -->
    <section class="py-16 px-10 text-center bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-semibold mb-8">About the Event</h2>
            <p class="text-lg mb-8 prose text-justify">The King and Queen Selection event is a prestigious competition held
                annually at the Technological University (Yamethin). Students from various majors participate to showcase
                their talents and leadership qualities. Join us in celebrating the brightest stars of our university!</p>
            <img src="https://via.placeholder.com/800x400" alt="Event Image" class="mx-auto rounded-lg shadow-lg">
        </div>
    </section>

</div>

</template>

<script>
import {
    computed,
    onMounted,
    ref
} from "vue";
import useCandidates from "@/composables/useCandidates";
import SideBar from '../components/SideBar'

export default {

    components: {
        SideBar
    },

    setup() {
        const searchValue = ref("");
        const selectedMajor = ref("all"); // Currently selected major for filtering

        const {
            candidates,
            error,
            load
        } = useCandidates();

        load();

        // Computed property to filter candidates by name, number, and major
        const filterCandidates = computed(() => {
            const search = searchValue.value.toLowerCase();
            return candidates.value.filter((candidate) => {
                const matchesSearch =
                    candidate.name.toLowerCase().includes(search) ||
                    candidate.number.includes(search);
                const matchesMajor =
                    selectedMajor.value === "all" ||
                    candidate.major.toLowerCase() === selectedMajor.value.toLowerCase();
                return matchesSearch && matchesMajor;
            });
        });

        // Function to update the selected major for filtering
        const filterByMajor = (major) => {
            selectedMajor.value = major;
        };

        return {
            filterCandidates,
            error,
            searchValue,
            filterByMajor,
        };
    },
};
</script>

<style>
/* You can add additional styles for dark mode here if needed */
#hero {
    background-image: url('../Images/school.png');
}
</style>
