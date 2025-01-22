<template>
    <div>
        <!-- Show a loading indicator while data is being fetched -->
        <Loading v-if="isLoading" />

        <!-- Pass userData to the router-view -->
        <router-view/>
   
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import getStudentById from "./composables/getStudentById";
import Loading from "@/components/Loading.vue"; // Ensure the correct path
import SideBar from "@/components/SideBar.vue"; // Ensure the correct path

export default {
    components: {
        Loading,
        SideBar,
    },
    setup() {
        const router = useRouter();

        // Get the userId from localStorage
        const userId = localStorage.getItem("userId");

        // Call the composable to fetch student data
        const { userData, error, load } = getStudentById(userId);

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
/* Add custom styles if needed */
</style>