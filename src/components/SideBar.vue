<template>
    <nav @click="showSidebar" class="inline-flex mb-3 border-b border-gray-100 dark:border-gray-900 sm:hidden w-full bg-gray-200 dark:bg-gray-800 sticky top-0 z-30 shadow-b-lg">
        <button id="sideBarbtn" type="button" class="inline-flex items-center p-2 m-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-300 ease-in-out" aria-label="Toggle Sidebar">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>
    </nav>
    
    <aside  
        class="fixed top-0 left-0 z-50 w-full flex md:w-64 h-screen border-r  dark:border-gray-800 transition-transform duration-300 ease-in-out transform md:translate-x-0" 
        :class="show ? 'translate-x-0' : '-translate-x-full'"
    >
        <div class="h-full w-2/3 md:w-full overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
            <div class="flex items-center gap-4  px-2 py-5 border-b m-1">
    
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" :src="userData.profileImage" alt="Bordered avatar">
    
                <div class="font-medium dark:text-white">
                    <div>{{ userData.name }}</div>
                    <div class="text-xs md:text-sm text-gray-500 dark:text-gray-400">{{ userData.email }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">ID : {{ userData.rollno }}</div>
                </div>
            </div>
    
            <ul class="space-y-4 font-medium px-3">
                <li>
                    <router-link :to="{ name: 'HomeView' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-house text-xl"></i>
    
                        <span class="ms-3">Dashboard</span> <!-- Updated for better clarity -->
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'MajorVote' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-check-to-slot text-xl"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Vote for Major</span> <!-- Updated for clarity -->
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'UniversityVote' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-users text-xl"></i>
    
                        <span class="flex-1 ms-3 whitespace-nowrap">Vote for Overall</span> <!-- Updated for clarity -->
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Results' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-crown text-xl"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Election Results</span> <!-- Updated for clarity -->
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Contact' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-file-signature text-xl"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Contact Support</span> <!-- Updated for clarity -->
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Policy' }" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-shield-halved text-xl"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Privacy & Security Policy</span> <!-- Updated for clarity -->
                    </router-link>
                </li>
                <li>
                    <button @click="logout" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-right-from-bracket text-xl"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                    </button>
                </li>
            </ul>
    
            <div class="p-3 m-1 rounded flex justify-between items-center bg-gray-200 dark:bg-slate-700">
                <span class="text-gray-900 rounded-lg dark:text-white font-bold">Theme</span>
                <!-- Dark Mode Toggle Button -->
                <button @click="toggleDarkMode" class="  text-gray-900 dark:text-white">
                    <i class="fas" :class="isDarkMode ? 'fa-sun' : 'fa-moon'"></i>
                </button>
            </div>
    
        </div>
        <div @click="showSidebar" id="bgBlur" class="w-1/3 md:hidden h-full"></div>
    </aside>
    
    <div v-if="showLogoutModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Confirm Logout
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to log out?
            </p>
            <div class="flex justify-end space-x-3">
                <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" @click="cancelLogout">
                    Cancel
                </button>
                <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="confirmLogout">
                    Log Out
                </button>
            </div>
        </div>
    </div>
    </template>
    

<script>
import {
    ref
} from "vue";
import {
    useRouter
} from "vue-router";
import {
    db
} from "@/firebase/config";

export default {

    props: ['userData'],
    setup(props) {

        const userId = localStorage.getItem("userId");

        const router = useRouter();
        const isDarkMode = ref(false);
        const showLogoutModal = ref(false);
        const show = ref(false);

        let showSidebar = () => {
            show.value = !show.value
        }

        // Toggle Dark Mode
        const toggleDarkMode = () => {
            const isDark = localStorage.getItem("dark");
            if (!isDark) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("dark", true);
                isDarkMode.value = true;
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.removeItem("dark");
                isDarkMode.value = false;
            }
        };

        // Open Logout Modal
        const logout = () => {
            showLogoutModal.value = true;
        };

        // Cancel Logout
        const cancelLogout = () => {
            showLogoutModal.value = false;
        };

        // Confirm Logout
        const confirmLogout = async () => {
            showLogoutModal.value = false;
            localStorage.removeItem("userData");
            router.push("/");
            await db.collection("students").doc(props.userData.id).set({
                status: "out"
            }, {
                merge: true
            });

        };

        return {
            toggleDarkMode,
            logout,
            cancelLogout,
            confirmLogout,
            isDarkMode,
            showLogoutModal,
            showSidebar,
            show

        };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#bgBlur {
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.356);
}
</style>
