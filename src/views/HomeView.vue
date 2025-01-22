<template>


<div v-if="userData">
    <SideBar :userData="userData"></SideBar>

    <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

        <!-- Hero Section -->
        <section id="Hero" class="text-center py-20 relative bg-cover bg-center flex justify-center items-center dark:bg-black">
            <div class="absolute inset-0 bg-gradient-to-r from-black to-black opacity-70"></div>

            <div class="relative z-10 flex flex-col md:flex-row items-center justify-center home-main">
                <div class="flex justify-center mb-5 md:mb-0 md:mr-6 uniLogoCon">
                    <img src="../Images/uni_logo.png" alt="University Logo" class="mr-3 w-32 sm:w-40 md:w-48 lg:w-56" />
                </div>

                <div class="flex justify-center flex-col items-center text-center px-4">
                    <h1 class="text-3xl text-blue-400 sm:text-4xl md:text-5xl font-bold mb-4">
                        <span class="text-blue-400 dark:text-blue-400 text-2xl sm:text-6xl md:text-7xl">King and
                            Queen
                            Selection</span>
                        <span class="s2 block mt-6 sm:my-6 md:my-4 text-lg sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-300">
                            Technological University (Yamethin)
                        </span>
                    </h1>
                    <p class="text-sm text-white sm:text-lg md:text-xl mb-2 opacity-70 dark:opacity-70">
                        Vote for your favorite candidates from your major and help them shine bright!
                    </p>
                </div>
            </div>
        </section>

        <CountDown></CountDown>

        <!-- Candidates by Major Section -->
        <section id="majorCon" class="py-20 text-center flex justify-center items-center">
            <div class="w-full px-4">
                <h2 class="text-3xl md:text-4xl font-semibold text-blue-500 dark:text-blue-400 my-5">
                    Candidates by Major
                </h2>
                <p class="text-sm md:text-lg sm:text-lg mb-10">
                    Select your major and support the King and Queen of your department by voting!
                </p>

                <!-- Major Categories -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                    <!-- Electronic Engineering -->
                    <div class="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-6 card-hover dark:bg-gray-800 dark:text-gray-200">
                        <img src="../Images/EC.png" alt="Electronic Engineering" class="w-64 object-cover rounded-t-lg mb-4" />
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Electronic Engineering</h3>
                        <p class="text-sm md:text-lg sm:text-lg text-gray-600 dark:text-gray-300 mb-4 prose text-justify">
                            Vote for the King and Queen from the Electronic Engineering major. Leading innovation
                            and technological
                            advancement.
                        </p>
                        <a href="./candidate.php" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition">
                            Vote Now
                        </a>
                    </div>

                    <!-- Electrical Power Engineering -->
                    <div class="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-6 card-hover dark:bg-gray-800 dark:text-gray-200">
                        <img src="../Images/EP.png" alt="Electrical Power Engineering" class="w-64 object-cover rounded-t-lg mb-4" />
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Electrical Power Engineering</h3>
                        <p class="text-sm md:text-lg sm:text-lg text-gray-600 dark:text-gray-300 mb-4 prose text-justify">
                            Cast your vote for the King and Queen of the Electrical Power Engineering major.
                            Empowering the future of
                            energy systems.
                        </p>
                        <a href="./candidate.php" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition">
                            Vote Now
                        </a>
                    </div>

                    <!-- Mechanical Engineering -->
                    <div class="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-6 card-hover dark:bg-gray-800 dark:text-gray-200">
                        <img src="../Images/ME.png" alt="Mechanical Engineering" class="w-64 object-cover rounded-t-lg mb-4" />
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Mechanical Engineering</h3>
                        <p class="text-sm md:text-lg sm:text-lg text-gray-600 dark:text-gray-300 mb-4 prose text-justify">
                            Vote for the King and Queen from Mechanical Engineering. Shaping the future of
                            technology and innovation.
                        </p>
                        <a href="./candidate.php" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition">
                            Vote Now
                        </a>
                    </div>

                    <!-- Civil Engineering -->
                    <div class="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-6 card-hover dark:bg-gray-800 dark:text-gray-200">
                        <img src="../Images/CE.png" alt="Civil Engineering" class="w-64 object-cover rounded-t-lg mb-4" />
                        <h3 class="text-xl md:text-2xl sm:text-2xl font-semibold mb-4">Civil Engineering</h3>
                        <p class="text-sm md:text-lg sm:text-lg text-gray-600 dark:text-gray-300 mb-4 prose text-justify">
                            Cast your vote for the King and Queen of the Civil Engineering major. Building a strong
                            foundation for the
                            future.
                        </p>
                        <a href="./candidate.php" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition">
                            Vote Now
                        </a>
                    </div>

                </div>
            </div>
        </section>

    </div>
</div>
<Loading v-else/>

</template>

<script>
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import CountDown from '../components/CountDown'
import {
    onMounted,
    onUnmounted,
    ref
} from 'vue';
import redirect from '@/composables/redirect';
import getStudentById from '@/composables/getStudentById';
import {
    useRouter
} from 'vue-router';

export default {
    name: 'HomeView',


    components: {
        Loading,
        CountDown,
        SideBar
    },

    mounted() {

    },

    setup() {
        const router = useRouter();

        // Get the userId from localStorage
        const userId = localStorage.getItem("userId");

        // Call the composable to fetch student data
        const {
            userData,
            error,
            load
        } = getStudentById(userId);

        // Track loading state
        const isLoading = ref(true);

        // Fetch the data on mount
        onMounted(async () => {
            if (!userId) {
                console.warn("User ID not found in localStorage");
                isLoading.value = false;
                return;
            }

            try {
                await load();
                if(userData.value) {
                    localStorage.setItem("userData",JSON.stringify(userData.value))
                }
            } catch (err) {
                console.error("Failed to load user data:", err);
            } finally {
                isLoading.value = false;
            }
        });

        return {
            userData,
            isLoading,
        };
    },
}
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
