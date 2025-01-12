<template>
<SideBar></SideBar>
<div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
    <!-- Hero Section -->
    <section class="text-center relative bg-cover bg-center pb-10 mx-auto">

        <div class="bg-white z-10 flex flex-col items-center py-5 px-3 sticky w-full header dark:bg-gray-800">
            <h1 class="text-blue-500 text-2xl sm:text-4xl md:text-4xl font-bold py-4">{{ userMajor }}</h1>
            <p class="text-sm text-black sm:text-xl md:text-2xl mb-2 opacity-50 dark:text-gray-300">
                Help your favorite contestants shine by casting your vote today!
            </p>

            <div class="flex gap-3 md:gap-12 sm:gap-12 mt-10">
                <div>
                    <h2 class="font-bold text-2xl mb-5 dark:text-white">KING ?</h2>
                    <div class="w-40 mb-4 h-30 overflow-hidden object-cover border-2 border-gray-300 rounded dark:border-gray-500">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-3d-icon-download-in-png-blend-fbx-gltf-file-formats--help-ask-user-interface-pack-icons-4652954.png?f=webp" alt="">
                    </div>
                </div>

                <div>
                    <h2 class="font-bold text-2xl mb-5 dark:text-white">QUEEN ?</h2>
                    <div class="w-40 mb-4 h-30 overflow-hidden object-cover border-2 border-gray-300 rounded dark:border-gray-500">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-3d-icon-download-in-png-blend-fbx-gltf-file-formats--help-ask-user-interface-pack-icons-4652954.png?f=webp" alt="">
                    </div>
                </div>
            </div>

            <!-- Voting Timer -->
            <div id="timer" class="space-y-2 relative md:absolute sm:absolute md:bottom-10 md:right-10">
                <h1 class="text-lg opacity-50 dark:text-gray-300">Voting Ends In</h1>
                <div class="flex justify-center gap-4 text-sm items-center">
                    <div class="flex flex-col items-center text-yellow-300">
                        <span id="days" class="text-3xl font-bold">{{ dayString }}</span>
                        <span>Days</span>
                    </div>
                    <div class="flex flex-col items-center text-blue-500">
                        <span id="hours" class="text-3xl font-bold">{{ hourString }}</span>
                        <span>Hours</span>
                    </div>
                    <div class="flex flex-col items-center text-green-400">
                        <span id="minutes" class="text-3xl font-bold">{{ minString }}</span>
                        <span>Minutes</span>
                    </div>
                    <div class="flex flex-col items-center text-red-600">
                        <span id="seconds" class="text-3xl font-bold">{{ secString }}</span>
                        <span>Seconds</span>
                    </div>
                </div>
                <p id="expired" class="hidden text-xl font-semibold text-red-500">
                    Voting has ended!
                </p>
            </div>

        </div>

        <!-- Content for King and Queen -->
        <div class="flex flex-col max-w-8xl m-auto justify-start items-center mt-10 md:block md:w-full sm:flex-row">
            <!-- Filter Buttons -->
            <div class="flex gap-3 md:gap-12 sm:gap-12 mb-5">
                <button @click="filterSelected('male')" class="flex justify-center w-40 items-center bg-blue-500 text-lg md:text-2xl font-bold text-white py-3 px-5 rounded hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-600">
                    <i class="fas fa-crown text-white mr-2 md:mr-4 cursor-pointer" id="kingIcon"></i>
                    <span>King</span>
                </button>

                <button @click="filterSelected('female')" class="flex justify-center w-40 items-center bg-pink-500 text-lg md:text-2xl font-bold text-white py-3 px-5 rounded hover:bg-pink-700 transition dark:bg-pink-700 dark:hover:bg-pink-600">
                    <i class="fas fa-crown text-white mr-2 md:mr-4 cursor-pointer" id="queenIcon"></i>
                    <span>Queen</span>
                </button>
            </div>

            <div class="h3 flex justify-center items-center" :class="king_queen === 'KING' ? 'text-blue-400' : 'text-pink-400'">
                <h3 class="text-xl md:text-4xl sm:text-4xl font-bold mr-5">Candidates For {{ king_queen }} </h3>
                <i class="fas fa-crown cursor-pointer text-3xl" id="kingIcon"></i>
            </div>

        </div>

        <!-- Contestants Grid for King -->
        <div id="filter_king" class="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-4 max-w-8xl m-auto">
            <!-- Candidate Card -->
            <div v-for="candidate in filterCandidates" :key="candidate.id" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border dark:border-gray-700">
                <div class="relative flex flex-col items-center ">
                    <div class="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4" :class="candidate.gender === 'male' ? 'border-blue-400' : 'border-pink-400'">
                        <img src="https://img.freepik.com/free-photo/confident-asian-woman-face-portrait-smiling_53876-144815.jpg?ga=GA1.1.518632610.1735269050&semt=ais_hybrid" alt="Candidate Name" class="w-full h-full object-cover">
                    </div>

                    <div class="absolute left-0 -bottom-8 items-center text-sm">
                        <span class="w-16 h-16 text-3xl font-bold text-white flex items-center justify-center rounded-full mr-3" :class="candidate.gender === 'male' ? 'bg-blue-400' : 'bg-pink-400'">
                            {{ candidate.number }}
                        </span>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ candidate.name }}</h2>
                <p class="font-bold text-gray-700 dark:text-gray-300">Major - {{ candidate.major }}</p>
                <button class="m-7 font-bold hover:text-white border rounded-lg py-2 px-3 transition" :class="[
                candidate.gender === 'male'
                    ? 'text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50  dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400'
                    : 'text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50  dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400'
            ]">
                    Vote Now
                </button>

            </div>
        </div>

  

    </section>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import deadLine from '@/composables/deadLine';
import useCandidates from '@/composables/useCandidates';
import {
    computed,
    ref
} from 'vue';

export default {

    components: {
        SideBar
    },

    setup() {

        let userMajor = "Mechanical Engineering"; // data from database
        let select = ref("male");
        let king_queen = ref('KING');

        const {
            candidates,
            error,
            load
        } = useCandidates();

        const filterSelected = (sel) => {
            select.value = sel;
            king_queen.value = select.value === 'male' ? 'KING' : 'QUEEN';
        };

        let filterCandidates = computed(() => {
            return candidates.value.filter((candidate) => {
                return candidate.gender.toLowerCase() === select.value.toLowerCase() && candidate.major.toLowerCase() === userMajor.toLowerCase()
            })
        })

        load();

        let {
            dayString,
            hourString,
            minString,
            secString,
            updateCountdown
        } = deadLine();

        updateCountdown();

        return {
            dayString,
            hourString,
            minString,
            secString,
            filterCandidates,
            error,
            filterSelected,
            userMajor,
            select,
            king_queen
        }
    }
}

// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");
// const expiredEl = document.getElementById("expired");
</script>

<style></style>
