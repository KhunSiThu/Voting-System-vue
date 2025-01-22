<template>
    <router-view v-if="!userId && !userData" :userData="userData"/>
    <main v-if="userData && userId">
        <router-view v-if="userId && userData" :userData="userData"/>
    <SideBar v-if="userData && userData.profileImage && userData.status === 'active'" :userData="userData" />
    <Loading v-if="userId && !userData" />
    </main>
    
</template>


<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "./components/Loading";
import SideBar from "./components/SideBar";
import getStudentById from "./composables/getStudentById";


export default {
    components: {
        Loading,
        SideBar,
    },
    setup() {
        const userId = ref(localStorage.getItem("userId"));
        const { userData, error, load } = getStudentById();
        const router = useRouter();

        const navigateBasedOnUser = () => {
            if (!userId.value) {
                router.push("/");
                return;
            }

            if (error.value) {
                console.error("Error fetching user data:", error.value);
                return;
            }
            
        };

        onMounted(async () => {
            try {
                await load(); // Ensure load completes
                navigateBasedOnUser(); // Call navigation logic after successful data fetch
                
                
            } catch (error) {
                console.error("Error during load or navigation:", error);
            }
        });


        return {
            userId,
            userData,
            error,
        };
    },
};
</script>



<style scoped>
/* Add custom styles if needed */
</style>
