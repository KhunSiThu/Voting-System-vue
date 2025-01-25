<template>
<div v-if="userData">
    <SideBar :userData="userData"></SideBar>
    <div v-if="userData" class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
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
                <div v-if="topWholeKingCandidate && topWholeQueenCandidate" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    <!-- Overall King -->
                    <div id="overallKing" class="flex flex-col items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border 'border-blue-500">
                                <img :src="topWholeKingCandidate.profileImage" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3" :class="topWholeKingCandidate.gender === 'male' ? 'bg-blue-500' : 'bg-pink-400'">
                                    {{ topWholeKingCandidate.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ topWholeKingCandidate.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{ topWholeKingCandidate.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ topWholeKingCandidate.major }}</p>
                    </div>

                    <!-- Overall Queen -->
                    <div id="overallQueen" class="flex flex-col items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="topWholeQueenCandidate.profileImage" alt="topWholeQueenCandidate Name" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3" :class="topWholeQueenCandidate.gender === 'male' ? 'bg-blue-500' : 'bg-pink-400'">
                                    {{ topWholeQueenCandidate.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ topWholeQueenCandidate.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{ topWholeQueenCandidate.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ topWholeQueenCandidate.major }}</p>
                    </div>
                </div>

                <div v-else class="flex w-full h-40 justify-center items-center">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
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
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        These exceptional students have designed cutting-edge circuits and systems, pushing the boundaries of modern technology. Their work lays the foundation for the next wave of electronic innovation and sustainability.
                    </p>
                    <div v-if="topECKing && topECQueen" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <!-- King Card -->
                        <div id="ECKing" class="flex flex-col items-center bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topECKing.profileImage" alt="Electronic King" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-blue-500">
                                        {{ topECKing.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topECKing.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-blue-600">{{ topECKing.voterCount }}</span>
                            </p>
                        </div>

                        <!-- Queen Card -->
                        <div id="ECQueen" class="flex flex-col items-center bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topECQueen.profileImage" alt="Electronic Queen" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-pink-400">
                                        {{ topECQueen.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topECQueen.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-orange-600">{{ topECQueen.voterCount }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-600 dark:text-gray-300">Loading Electronic Engineering Results...</p>
                    </div>
                </div>

                <!-- Electrical Power Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Electrical Power Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        Students in this field are at the forefront of creating sustainable energy solutions. Their work on power systems and renewable energy sources is key to shaping a greener, more efficient future.
                    </p>
                    <div v-if="topEPKing && topEPQueen" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <!-- King Card -->
                        <div id="ECKing" class="flex flex-col items-center bg-white border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topEPKing.profileImage" alt="Electronic King" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-blue-500">
                                        {{ topEPKing.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topEPKing.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topEPKing.voterCount }}</span>
                            </p>
                        </div>

                        <!-- Queen Card -->
                        <div id="ECQueen" class="flex flex-col items-center bg-white border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topEPQueen.profileImage" alt="Electronic Queen" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-pink-400">
                                        {{ topEPQueen.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topEPQueen.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topEPQueen.voterCount }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-600 dark:text-gray-300">Loading Electrical Power Engineering Results...</p>
                    </div>
                </div>

                <!-- Mechanical Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Mechanical Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        Mechanical engineers are innovators who design and build solutions that improve lives. These students exemplify the core of engineering, with breakthroughs in product design, robotics, and energy efficiency.
                    </p>
                    <div v-if="topMECHKing || topMECHQueen" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <!-- King Card -->
                        <div v-if="topMECHKing" id="ECKing" class="bg-white flex flex-col items-center border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topMECHKing.profileImage" alt="Electronic King" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-blue-500">
                                        {{ topMECHKing.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topMECHKing.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topMECHKing.voterCount }}</span>
                            </p>
                        </div>

                        <!-- Queen Card -->
                        <div v-if="topMECHQueen" id="ECQueen" class="bg-white flex flex-col items-center border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topMECHQueen.profileImage" alt="Electronic Queen" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-pink-400">
                                        {{ topMECHQueen.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topMECHQueen.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topMECHQueen.voterCount }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-600 dark:text-gray-300">Loading Mechanical Engineering Results...</p>
                    </div>
                </div>

                <!-- Civil Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Civil Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        These students have shown mastery in designing infrastructure that is both durable and sustainable. From bridges to smart cities, their projects represent the backbone of modern society and future development.
                    </p>
                    <div v-if="topCKing || topCQueen" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <!-- King Card -->
                        <div v-if="topCKing" id="ECKing" class="bg-white flex flex-col items-center border-blue-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topCKing.profileImage" alt="Electronic King" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-blue-500">
                                        {{ topCKing.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topCKing.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topCKing.voterCount }}</span>
                            </p>
                        </div>

                        <!-- Queen Card -->
                        <div v-if="topCQueen" id="ECQueen" class="bg-white flex flex-col items-center border-pink-400 border-2 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                            <div class="relative flex flex-col items-center">
                                <div class="w-full h-60 rounded overflow-hidden shadow-lg border">
                                    <img :src="topCQueen.profileImage" alt="Electronic Queen" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute left-4 bottom-4 items-center">
                                    <span class="md:w-16 md:h-16 w-12 h-12  text-3xl font-bold text-white flex items-center justify-center rounded-full bg-pink-400">
                                        {{ topCQueen.number }}
                                    </span>
                                </div>
                            </div>
                            <h2 class="text-xl text-blue-800 font-semibold mt-4">{{ topCQueen.name }}</h2>
                            <p class="w-full text-left font-semibold text-gray-700 dark:text-gray-300">
                                <span class="font-normal">Total Votes : </span>
                                <span class="text-gray-600">{{ topCQueen.voterCount }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-600 dark:text-gray-300">Loading Civil Engineering Results...</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
</div>
</template>

<script>
import {
    ref,
    onMounted,
    computed
} from 'vue';
import SideBar from '@/components/SideBar.vue';
import getResults from '@/composables/getResults';

export default {
    components: {
        SideBar
    },

    setup() {
        // Retrieve user information from localStorage
        const userId = localStorage.getItem("userId");
        const userData = JSON.parse(localStorage.getItem("userData"));

        // Define reactive variables
        const voteResultsWholeKing = ref([]);
        const voteResultsWholeQueen = ref([]);
        const topWholeKingCandidate = ref(null);
        const topWholeQueenCandidate = ref(null);

        const voteResultsMajorKing = ref([]);
        const voteResultsMajorQueen = ref([]);

        const topECKing = ref(null);
        const topECQueen = ref(null);

        const topEPKing = ref(null);
        const topEPQueen = ref(null);

        const topCKing = ref(null);
        const topCQueen = ref(null);

        const topMECHKing = ref(null);
        const topMECHQueen = ref(null);

        onMounted(async () => {
            try {
                // Fetch voting results for Whole King and Whole Queen
                voteResultsWholeKing.value = await getResults('voteWholeKing');
                voteResultsWholeQueen.value = await getResults('voteWholeQueen');

                // Fetch major results for each major
                voteResultsMajorKing.value = await getResults('voteMajorKing');
                voteResultsMajorQueen.value = await getResults("voteMajorQueen");

                // Determine the top candidate for Whole King
                if (voteResultsWholeKing.value.length > 0) {
                    topWholeKingCandidate.value = voteResultsWholeKing.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                } else {
                    console.warn('No vote data available for Whole King.');
                }

                // Determine the top candidate for Whole Queen
                if (voteResultsWholeQueen.value.length > 0) {
                    topWholeQueenCandidate.value = voteResultsWholeQueen.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                } else {
                    console.warn('No vote data available for Whole Queen.');
                }

                // Filter and get the top candidates for each major
                const filterECMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Electronic Engineering"));
                const filterECMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Electronic Engineering"));

                const filterEPMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Electrical Power Engineering"));
                const filterEPMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Electrical Power Engineering"));

                const filterCEMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Civil Engineering"));
                const filterCEMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Civil Engineering"));

                const filterMECHMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Mechanical Engineering"));
                const filterMECHMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Mechanical Engineering"));

                // Top candidates for each major
                if (filterECMajorKing.value.length > 0) {
                    topECKing.value = filterECMajorKing.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterECMajorQueen.value.length > 0) {
                    topECQueen.value = filterECMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterEPMajorKing.value.length > 0) {
                    topEPKing.value = filterEPMajorKing.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterEPMajorQueen.value.length > 0) {
                    topEPQueen.value = filterEPMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterCEMajorKing.value.length > 0) {
                    topCKing.value = filterCEMajorKing.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterCEMajorQueen.value.length > 0) {
                    topCQueen.value = filterCEMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterMECHMajorKing.value.length > 0) {
                    topMECHKing.value = filterMECHMajorKing.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

                if (filterMECHMajorQueen.value.length > 0) {
                    topMECHQueen.value = filterMECHMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount)[0];
                }

            } catch (error) {
                console.error('Error fetching vote results:', error);
            }
        });

        return {
            userData,
            voteResultsWholeKing,
            voteResultsWholeQueen,
            topWholeKingCandidate,
            topWholeQueenCandidate,
            topECKing,
            topECQueen,
            topEPKing,
            topEPQueen,
            topCKing,
            topCQueen,
            topMECHKing,
            topMECHQueen
        };
    }
};
</script>

<style></style>
