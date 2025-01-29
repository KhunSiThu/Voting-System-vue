<template>
<div v-if="userData">
    <SideBar :userData="userData"></SideBar>

    <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

        <!-- Hero Section: Introduction -->
        <section id="Hero" class="text-center py-20 relative bg-cover bg-center flex justify-center items-center dark:bg-black">
            <div class="absolute inset-0 bg-gradient-to-r from-black to-black opacity-70"></div>

            <div class="relative z-10 flex flex-col md:flex-row items-center justify-center home-main">
                <div class="flex justify-center mb-5 md:mb-0 md:mr-6 uniLogoCon">
                    <img src="../Images/uni_logo.png" alt="University Logo" class="mr-3 w-32 sm:w-40 md:w-48 lg:w-56" />
                </div>

                <div class="flex justify-center flex-col items-center text-center px-4">
                    <h1 class="text-3xl text-blue-400 sm:text-4xl md:text-5xl font-bold mb-4">
                        <span class="text-blue-400 dark:text-blue-400 text-2xl sm:text-6xl md:text-7xl">
                            King and Queen Selection
                        </span>
                        <span class="block mt-6 sm:my-6 md:my-4 text-lg sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-300">
                            Technological University (Yamethin)
                        </span>
                    </h1>
                    <p class="text-sm md:text-center prose text-justify text-white sm:text-lg md:text-xl mb-2 opacity-70 dark:opacity-70">
                        Choose your favorite candidates for the roles of King and Queen who represent the spirit of our university. Your vote matters and makes a difference!
                    </p>
                </div>
            </div>
        </section>

        <!-- Countdown Timer Section: Time Left to Vote -->
        <CountDown></CountDown>

        <!-- University-Wide Voting Section -->
        <section id="voteWhole" class="pt-10 text-center">
            <div class="container mx-auto px-4 py-10 rounded ">
                <h2 class="text-3xl md:text-4xl font-semibold text-blue-500 dark:text-blue-400 mb-6">
                    University-Wide Voting
                </h2>
                <p class="text-sm md:text-center prose text-justify md:text-lg mb-12 text-gray-600 dark:text-gray-300">
                    Support the most deserving candidates who represent the spirit of the entire university. Vote for the King and Queen who embody leadership, grace, and unity.
                </p>

                <!-- King and Queen Cards -->
                <div class="flex w-full md:w-1/2 mx-auto justify-around items-center  md:space-x-8 ">

                    <!-- King Card -->
                    <div class="p-5  w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                        <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University King" class="w-32 sm:w-40 md:w-48 mx-auto  rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                        <h3 class="md:text-2xl text-base font-semibold mb-4 text-blue-500 dark:text-blue-400">King</h3>
                    </div>

                    <!-- Queen Card -->
                    <div class=" p-5 w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                        <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University Queen" class="w-32 sm:w-40 md:w-48 mx-auto rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                        <h3 class="md:text-2xl text-base font-semibold mb-4 text-blue-500 dark:text-blue-400">Queen</h3>

                    </div>
                </div>

                <router-link :to="{name:'UniversityVote'}">
                    <button class="bg-blue-500 mt-10 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition ease-in-out">
                    Vote Now
                </button>
                </router-link>
            </div>
        </section>

        <hr>

     <!-- Major-Specific Voting Section -->
        <section id="voteWhole" class="pt-10 text-center">
            <div class="container mx-auto px-4 py-10 rounded ">
                <h2 class="text-3xl md:text-4xl font-semibold text-blue-500 dark:text-blue-400 mb-6">
                    Major-Specific Voting
                </h2>
                <p class="text-sm md:text-lg mb-12 text-gray-600 dark:text-gray-300 md:text-center prose text-justify">
                    Cast your vote for the King and Queen who represent the values and spirit of your major. Choose the best candidates from your department.
                </p>

                <!-- King and Queen Cards -->
                <div class="flex w-full md:w-1/2 mx-auto justify-around items-center  md:space-x-8 ">

                    <!-- King Card -->
                    <div class="p-5 w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                        <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University King" class="w-32 sm:w-40 md:w-48 mx-auto  rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                        <h3 class="md:text-2xl text-base font-semibold mb-4 text-blue-500 dark:text-blue-400">Major King</h3>
                    </div>

                    <!-- Queen Card -->
                    <div class=" p-5 w-36 md:w-1/2 rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-gray-200">
                        <img src="https://cdn-icons-png.freepik.com/512/9321/9321521.png" alt="University Queen" class="w-32 sm:w-40 md:w-48 mx-auto rounded-full mb-6 shadow-md transition-all duration-300 hover:scale-110 bg-gray-50 dark:bg-gray-700" />
                        <h3 class="md:text-2xl text-base font-semibold mb-4 text-blue-500 dark:text-blue-400">Major Queen</h3>

                    </div>
                </div>

                <router-link :to="{name:'MajorVote'}">
                    <button class="bg-blue-500 mt-10 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition ease-in-out">
                    Vote Now
                </button>
                </router-link>
            </div>
        </section>


    </div>
</div>

<Loading v-else />
</template>

<script>
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import CountDown from '../components/CountDown';
import {
    onMounted,
    ref
} from 'vue';
import {
    useRouter
} from 'vue-router';
import getUserData from '@/composables/getUserData';
import getEndDate from '@/composables/getEndDate';

export default {
    name: 'HomeView',

    components: {
        Loading,
        CountDown,
        SideBar,
    },

    setup() {
        const router = useRouter();

        // State for user data and loading
        const userId = localStorage.getItem("userId");
        const {
            userData,
            error,
            load
        } = getUserData();
        const isLoading = ref(true);

        // Lifecycle hook to fetch user data
        onMounted(async () => {
            if (!userId) {
                console.warn("User ID not found in localStorage");
                router.push("/login"); // Redirect to login if user ID is missing
                return;
            }

            try {

                await load();
            } catch (err) {
                console.error("Failed to load user data:", err);
            } finally {
                isLoading.value = false;
            }
        });

        return {
            userData,
            isLoading,
            error,
        };
    },
};
</script>

<style>
#Hero {
    background-image: url('../Images/school.png');
}

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
