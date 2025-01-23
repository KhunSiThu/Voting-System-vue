<template>
<Loading v-if="isLoading"></Loading>
<div v-else class="flex justify-center items-center h-screen bg-gray-100">
    <div class="text-center">
        <!-- Logo Animation -->
        <div class="flex justify-center mb-10 md:mr-6 animate-logo-smooth">
            <img src="../Images/uni_logo.png" alt="University Logo" class="mr-3 w-40 sm:w-40 md:w-48 lg:w-56 border-2 border-blue-400 p-3 rounded" />
        </div>

        <!-- Title with Smooth Animation -->
        <h2 class="text-3xl md:text-4xl font-extrabold text-gradient bg-clip-text text-transparent mb-6 animate-title-smooth">
            Technological University (Yamethin)
            <span class="block my-3 text-lg md:text-2xl animate-title-smooth">Voting System</span>
        </h2>
        <p class="text-lg mb-8 animate-title-smooth">Select your role to proceed</p>

        <!-- Role Selection Buttons -->
        <div class="space-x-4">
            <router-link :to="{ name: 'SelectYear' }" class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                Student
            </router-link>
            <router-link :to="{ name: 'TeacherForm' }" class="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                Teacher
            </router-link>
        </div>
    </div>
</div>
</template>

  
  
<script>
import getStudentById from "@/composables/getStudentById";
import Loading from "../components/Loading";
import {
    useRouter
} from "vue-router";
import {
    onMounted,
    ref
} from "vue";

export default {
    components: {
        Loading,
    },
    name: "RoleSelection",

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

        // Fetch data and handle routing logic on component mount
        onMounted(async () => {
            if (!userId) {
                console.warn("User ID not found in localStorage");
                isLoading.value = false;
                return;
            }

            try {
                await load();
                if (userData.value) {
                    // Redirect based on the user's profile data
                    if (userData.value.status === "active" && userData.value.profileImage) {
                        router.push("/HomeView");
                    } else if (!userData.value.profileImage) {
                        router.push("/ProfileForm");
                    } else if (userData.value.status === "out") {
                        router.push("/StudentForm");
                    }
                } else {
                    console.warn("User data is empty or null");
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
};
</script>
  
  
<style scoped>
/* Custom gradient for the title text */
.text-gradient {
    background-image: linear-gradient(to right, #3b82f6, #14b8a6);
    -webkit-background-clip: text;
    background-clip: text;
}

/* Animation for logo fading in smoothly */
@keyframes logo-smooth {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animation for title and text fading in smoothly */
@keyframes title-smooth {
    0% {
        opacity: 0;
        transform: translateY(15px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Applying the smooth animations */
.animate-logo-smooth {
    animation: logo-smooth 1s ease-out;
}

.animate-title-smooth {
    animation: title-smooth 1s ease-out;
}

/* Staggering the title and text animation */
.animate-title-smooth:nth-child(1) {
    animation-delay: 0.3s;
}

.animate-title-smooth:nth-child(2) {
    animation-delay: 0.6s;
}

.animate-title-smooth:nth-child(3) {
    animation-delay: 0.9s;
}

/* Hover effect for buttons (subtle scale and color change) */
.router-link-active {
    animation: fadeIn 1s ease-in-out;
}
</style>
