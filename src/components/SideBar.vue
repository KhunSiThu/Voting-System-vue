<template>

  <nav
    class="inline-flex mb-3 border-b border-gray-100 dark:border-gray-900 sm:hidden w-full bg-gray-200 dark:bg-gray-800 sticky top-0 z-30 shadow-b-lg">
    <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar"
      aria-controls="cta-button-sidebar" type="button"
      class="inline-flex items-center p-2 m-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-300 ease-in-out"
      aria-label="Toggle Sidebar">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
      </svg>
    </button>
  </nav>



  <aside id="cta-button-sidebar"
    class="fixed border-e border-gray-100 dark:border-gray-900 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar">
    <div class="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
      <div class="flex items-center gap-4  px-2 py-5 border-b m-1">

        <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" :src="userData.profile_image"
          alt="Bordered avatar">

        <div class="font-medium dark:text-white">
          <div>{{ userData.name }}</div>
          <div class="text-xs md:text-sm text-gray-500 dark:text-gray-400">{{ userData.email }}</div>
        </div>
      </div>

      <ul class="space-y-4 font-medium px-3">
        <li>
          <router-link :to="{ name: 'HomeView' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-house text-xl"></i>

            <span class="ms-3">Home Page</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Vote' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-check-to-slot text-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Vote</span>
            <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> -->
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Candidates' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-users text-xl"></i>

            <span class="flex-1 ms-3 whitespace-nowrap">Candidates</span>
            <!-- <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Results' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-crown text-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Results</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-file-signature text-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Policy' }"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i class="fa-solid fa-shield-halved text-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Privacy Policy</span>
          </router-link>
        </li>
        <li>
          <button @click="logout"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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
  </aside>

  <!-- <div class="sm:ml-64">
    
      <router-view />
    
  </div> -->



</template>
<script>
import getUserById from '@/composables/getUserById';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {

    let route = useRouter();

    const isDarkMode = ref(false);

    let userId = localStorage.getItem("userId");

    let { userData, error } = getUserById(userId);

    // Toggle dark mode on and off
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    let logout = () => {
      localStorage.setItem("status", "logout");
      route.push('/');
    }

    return { userData, toggleDarkMode, logout };
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
