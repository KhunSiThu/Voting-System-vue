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
                    Join us in celebrating the winners from each major. These exceptional individuals have earned
                    recognition for their leadership and contributions to their communities.
                </p>
                <a href="#major-results" class="text-lg text-indigo-500 font-semibold inline-block px-6 py-3 border-2 border-indigo-200 rounded-full transition-all duration-300 hover:bg-indigo-200 dark:border-indigo-400 dark:text-indigo-400 hover:dark:bg-indigo-500">
                    View Major Results
                </a>
            </div>
        </section>

        <!-- Overall Winners Section -->
        <section class="py-20 rounded-xl mx-5 mb-16">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-gray-100">Overall
                    Winners</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">

                    <ShowResults :title=true :king="wholeKing" :queen="wholeQueen"></ShowResults>

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

                    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <ShowResults :king="ECKing" :queen="ECQueen" ></ShowResults>
                    </div>
  
                </div>

                <!-- Electrical Power Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Electrical Power Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        Students in this field are at the forefront of creating sustainable energy solutions. Their work on power systems and renewable energy sources is key to shaping a greener, more efficient future.
                    </p>
                    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <ShowResults :king="EPKing" :queen="EPQueen" ></ShowResults>
                    </div>
                </div>

                <!-- Mechanical Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Mechanical Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        Mechanical engineers are innovators who design and build solutions that improve lives. These students exemplify the core of engineering, with breakthroughs in product design, robotics, and energy efficiency.
                    </p>
                    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <ShowResults :king="MECHKing" :queen="MECHQueen" ></ShowResults>
                    </div>
                </div>

                <!-- Civil Engineering Section -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">Civil Engineering</h3>
                    <p class="text-sm md:text-xl text-gray-600 mb-6 dark:text-gray-300 prose text-justify">
                        These students have shown mastery in designing infrastructure that is both durable and sustainable. From bridges to smart cities, their projects represent the backbone of modern society and future development.
                    </p>
                    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                        <ShowResults :king="CKing" :queen="CQueen" ></ShowResults>
                    </div>
                </div>

            </div>
        </section>

    </div>
</div>
</template>

<script>
import ShowResults from '../components/ShowResults'
import {
    ref,
    onMounted,
    computed
} from 'vue';
import SideBar from '@/components/SideBar.vue';
import getResults from '@/composables/getResults';
import {
    db
} from '@/firebase/config';

export default {
    components: {
    ShowResults,
        SideBar
    },

    setup() {
        const year = new Date().getFullYear().toString(); // Current year
        const wholeKing = ref(null);
        const wholeQueen = ref(null);
        const ECKing = ref(null);
        const ECQueen = ref(null);
        const EPKing = ref(null);
        const EPQueen = ref(null);
        const CKing = ref(null);
        const CQueen = ref(null);
        const MECHKing = ref(null);
        const MECHQueen = ref(null);

        let userData = JSON.parse(localStorage.getItem("userData"));

        function listenToResultsAndFilter() {
            try {
                // Set up real-time listener for the 'results' collection
                const docRef = db.collection("results").doc(year);

                // Use onSnapshot to listen for real-time updates
                docRef.onSnapshot(docSnap => {
                    if (docSnap.exists) {
                        const results = docSnap.data(); // All data from the document

                        // Filter specific objects (e.g., CKing, CQueen, ECKing)
                        Object.keys(results).forEach(key => {
                            const obj = results[key];

                            if (key === 'wholeKing') {
                                wholeKing.value = obj;
                            }

                            if (key === 'wholeQueen') {
                                wholeQueen.value = obj;
                            }

                            if (key === 'EPKing') {
                                EPKing.value = obj;
                            }

                            if (key === 'EPQueen') {
                                EPQueen.value = obj;
                            }

                            if (key === 'ECKing') {
                                ECKing.value = obj;
                            }

                            if (key === 'ECQueen') {
                                ECQueen.value = obj;
                            }

                            if (key === 'CKing') {
                                CKing.value = obj;
                            }

                            if (key === 'CQueen') {
                                CQueen.value = obj;
                            }

                            if (key === 'MECHKing') {
                                MECHKing.value = obj;
                            }

                            if (key === 'MECHQueen') {
                                MECHQueen.value = obj;
                            }

                        });
                    } else {
                        console.log("No such document!");
                    }
                });
            } catch (error) {
                console.error("Error fetching document: ", error);
            }
        }

        listenToResultsAndFilter();

        return {
            userData,
            wholeKing,
            wholeQueen,
            ECKing,
            ECQueen,
            EPKing,
            EPQueen,
            CKing,
            CQueen,
            MECHKing,
            MECHQueen,
        };
    },
};
</script>

<style></style>
