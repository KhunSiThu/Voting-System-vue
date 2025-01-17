<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gray-50">
        <div class="w-full md:w-[360px] p-8 md:p-0">
            <!-- Back Button -->
            <button
                @click="goBack"
                class="fixed top-6 left-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm mb-4 flex items-center transition-all duration-300"
            >
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back
            </button>

            <!-- Choose Major -->
            <div class="text-center">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Choose Your Major</h2>

                <div class="mb-4">
                    <p class="text-sm text-gray-600">Click a button to select your major</p>

                    <!-- Major Buttons in a Row Layout -->
                    <div class="mt-4  flex flex-wrap justify-center gap-6">
                        <button class="w-full"
                            :class="{
                                'py-2 px-4 text-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300': true,
                                'border-gray-300 bg-transparent hover:bg-gray-100': selectedMajor !== 'Electronic Engineering',
                                'border-blue-600 bg-blue-100': selectedMajor === 'Electronic Engineering'
                            }"
                            @click="selectMajor('Electronic Engineering')">
                            <div class="w-full flex items-center">
                                <img src="../Images/EC.png" alt="Electronic Engineering" class="w-10 h-10 mr-3 rounded-full" />
                                <span>Electronic Engineering</span>
                            </div>
                        </button>
                        <button class="w-full"
                            :class="{
                                'py-2 px-4 text-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300': true,
                                'border-gray-300 bg-transparent hover:bg-gray-100': selectedMajor !== 'Electrical Power Engineering',
                                'border-blue-600 bg-blue-100': selectedMajor === 'Electrical Power Engineering'
                            }"
                            @click="selectMajor('Electrical Power Engineering')">
                            <div class="w-full flex items-center">
                                <img src="../Images/EP.png" alt="Electrical Power Engineering" class="w-10 h-10 mr-3 rounded-full" />
                                <span>Electrical Power Engineering</span>
                            </div>
                        </button>
                        <button class="w-full"
                            :class="{
                                'py-2 px-4 text-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300': true,
                                'border-gray-300 bg-transparent hover:bg-gray-100': selectedMajor !== 'Mechanical Engineering',
                                'border-blue-600 bg-blue-100': selectedMajor === 'Mechanical Engineering'
                            }"
                            @click="selectMajor('Mechanical Engineering')">
                            <div class="w-full flex items-center">
                                <img src="../Images/ME.png" alt="Mechanical Engineering" class="w-10 h-10 mr-3 rounded-full" />
                                <span>Mechanical Engineering</span>
                            </div>
                        </button>
                        <button class="w-full"
                            :class="{
                                'py-2 px-4 text-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300': true,
                                'border-gray-300 bg-transparent hover:bg-gray-100': selectedMajor !== 'Civil Engineering',
                                'border-blue-600 bg-blue-100': selectedMajor === 'Civil Engineering'
                            }"
                            @click="selectMajor('Civil Engineering')">
                            <div class="w-full flex items-center">
                                <img src="../Images/CE.png" alt="Civil Engineering" class="w-10 h-10 mr-3 rounded-full" />
                                <span>Civil Engineering</span>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Selected Major -->
                <div v-if="selectedMajor" class="mt-4">
                    
                    <button @click="clearSelection" class="mt-2 text-blue-600 text-sm hover:text-blue-700 transition-all duration-300">Clear Selection</button>
                </div>

                <!-- Error Message -->
                <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

                <!-- Next Button -->
                <div class="mt-6">
                    <button 
                        @click="nextPage(selectMajor)" 
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
                        :disabled="!selectedMajor || loading">
                        <span v-if="loading">Loading...</span>
                        <span v-else>Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const selectedMajor = ref('');
        const errorMessage = ref('');
        const loading = ref(false);
        const router = useRouter();

        // Function to go back to the previous page
        const goBack = () => {
            localStorage.removeItem("userMajor");
            localStorage.removeItem("userYear");
            router.back(); // Adjust based on your routing logic
        };

        // Function to select a major
        const selectMajor = (major) => {
            localStorage.setItem("userMajor",major);
            selectedMajor.value = major;
            errorMessage.value = ''; // Clear any previous error
        };

        // Function to clear selected major
        const clearSelection = () => {
            localStorage.removeItem("userMajor");
            selectedMajor.value = '';
        };

        // Function to proceed to the next page after major selection
        const nextPage = async (major) => {
            if (!selectedMajor.value) {
                errorMessage.value = "Please select a major";
                return;
            }
            loading.value = true;
            try {
                
                router.push("/StudentForm");
            } catch (error) {
                errorMessage.value = "Something went wrong!";
            } finally {
                loading.value = false;
            }
        };

        return {
            selectedMajor,
            errorMessage,
            loading,
            goBack,
            selectMajor,
            clearSelection,
            nextPage
        };
    }
};
</script>

<style scoped>
button:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
}
</style>
