<template>
<div v-if="userData">
    <SideBar :userData="userData"></SideBar>

    <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
        <!-- Hero Section -->
        <section class="p-5 bg-white dark:bg-gray-800 text-center">
            <h1 class="text-xl sm:text-2xl md:text-4xl  font-bold text-blue-400 mb-4 sm:mb-6">
                Meet the University King & Queen Candidates
            </h1>
            
            <div class="grid grid-cols-4 sm:grid-cols-4 gap-4 justify-center items-center max-w-3xl mx-auto z-20">
                    <img src="../Images/EC.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="EC">
                    <img src="../Images/ME.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="ME">
                    <img src="../Images/CE.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="CE">
                    <img src="../Images/EP.png" class="w-32 sm:w-20 lg:w-32 h-auto" alt="EP">
                </div>
        </section>

        <!-- Voting Timer -->
        <section id="timer" class="space-y-2 relative py-5">
            <h1 class="text-sm sm:text-sm md:text-lg opacity-50 dark:text-gray-300 text-center">Voting Ends In</h1>
            <div class="flex justify-center gap-4 text-sm sm:text-sm md:text-base items-center">
                <div class="flex flex-col items-center text-yellow-300">
                    <span id="days" class="text-2xl sm:text-3xl md:text-3xl font-bold">{{ dayString }}</span>
                    <span>Days</span>
                </div>
                <div class="flex flex-col items-center text-blue-500">
                    <span id="hours" class="text-2xl sm:text-3xl md:text-3xl font-bold">{{ hourString }}</span>
                    <span>Hours</span>
                </div>
                <div class="flex flex-col items-center text-green-400">
                    <span id="minutes" class="text-2xl sm:text-3xl md:text-3xl font-bold">{{ minString }}</span>
                    <span>Minutes</span>
                </div>
                <div class="flex flex-col items-center text-red-600">
                    <span id="seconds" class="text-2xl sm:text-3xl md:text-3xl font-bold">{{ secString }}</span>
                    <span>Seconds</span>
                </div>
            </div>
            <p id="expired" class="hidden text-xl font-semibold text-red-500">
                Voting has ended!
            </p>
        </section>

        <!-- Voting Section -->
        <section id="voteWhole" class="pt-10 text-center">
            <h2 class="text-sm sm:text-lg md:text-2xl font-semibold mb-6">Vote for University King and Queen</h2>
            <div class="flex w-full md:w-1/2 mx-auto justify-evenly items-center md:space-x-8">
                <!-- King Card -->
                <div class="p-5 w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                    <h3 class="text-xs sm:text-base md:text-lg text-blue-500 dark:text-blue-400 mb-4">University King</h3>
                    <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University King" class="w-32 sm:w-40 md:w-48 border border-blue-400 mx-auto rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                    <router-link :to="{ name: 'Candidates', params: { id: 'male' } }">
                        <button class="md:w-32 w-20 text-xs sm:text-sm md:text-base font-bold hover:text-white border rounded-lg py-2 transition text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">Vote
                            King</button>
                    </router-link>
                </div>

                <!-- Queen Card -->
                <div class="p-5 w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                    <h3 class="text-xs sm:text-base md:text-lg text-pink-400 dark:text-pink-400 mb-4">University Queen</h3>
                    <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University Queen" class="w-32 sm:w-40 md:w-48 mx-auto border border-pink-400 rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                    <router-link :to="{ name: 'Candidates', params: { id: 'female' } }">
                        <button class="md:w-32 w-20 text-xs sm:text-sm md:text-base font-bold hover:text-white border rounded-lg py-2 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">Vote
                            Queen</button>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Voting System Policy Section -->
        <section class="mt-10 text-gray-700 dark:text-gray-300 py-6 rounded-lg">
            <h3 class="text-sm sm:text-lg md:text-xl font-semibold mb-4 text-center">Voting System Policy</h3>
            <p class="text-sm sm:text-sm md:text-base leading-6 md:mx-auto max-w-4xl prose text-justify mx-3">
                Every student enrolled in the university is entitled to vote. One student, one vote policy applies, and each vote must represent a genuine and independent decision. Participate responsibly and let your voice be heard for a better university community!
            </p>
        </section>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import {
    ref,
    computed,
    onMounted
} from 'vue';
import getUserData from '@/composables/getUserData';
import deadLine from '@/composables/deadLine';

export default {
    components: {
        SideBar
    },
    setup() {
        const userId = localStorage.getItem("userId");
        const loading = ref(true);

        const {
            userData,
            load: loadUserData
        } = getUserData();
        const isLoading = ref(true);

        // Deadline
        const {
            dayString,
            hourString,
            minString,
            secString,
            updateCountdown
        } = deadLine();

        onMounted(async () => {
            if (!userId) {
                console.warn("User ID not found in localStorage");
                isLoading.value = false;
                return;
            }
            try {
                await loadUserData();
            } catch (err) {
                console.error("Initialization error:", err);
            } finally {
                isLoading.value = false;
                loading.value = false;
            }
        });
        return {
            loading,
            userData,
            isLoading,

            dayString,
            hourString,
            minString,
            secString,
        };
    }
};
</script>

<style></style>
