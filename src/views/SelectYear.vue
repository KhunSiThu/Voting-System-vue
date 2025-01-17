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

            <!-- Choose Year -->
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Choose Your Year</h2>

                <div class="mb-4">
                    <p class="text-sm text-gray-600">Select your year to proceed</p>

                    <!-- Year Buttons in a Row Layout -->
                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'First Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'First Year'
                            }"
                            @click="selectYear('First')"
                        >
                            First Year
                        </button>
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'Second Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'Second Year'
                            }"
                            @click="selectYear('Second')"
                        >
                            Second Year
                        </button>
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'Third Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'Third Year'
                            }"
                            @click="selectYear('Third')"
                        >
                            Third Year
                        </button>
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'Fourth Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'Fourth Year'
                            }"
                            @click="selectYear('Fourth')"
                        >
                            Fourth Year
                        </button>
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'Fifth Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'Fifth Year'
                            }"
                            @click="selectYear('Fifth')"
                        >
                            Fifth Year
                        </button>
                        <button
                            class="py-3 px-4 text-gray-900 border-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            :class="{
                                'border-gray-300 bg-white hover:bg-gray-100': selectedYear !== 'Sixth Year',
                                'border-blue-600 bg-blue-100 text-blue-900': selectedYear === 'Sixth Year'
                            }"
                            @click="selectYear('Sixth')"
                        >
                            Sixth Year
                        </button>
                    </div>
                </div>

                <!-- Selected Year -->
                <div v-if="selectedYear" class="mt-4">
                   
                    <button
                        @click="clearSelection"
                        class="mt-2 text-blue-600 text-sm hover:text-blue-700 transition-all duration-300"
                    >
                        Clear Selection
                    </button>
                </div>

                <!-- Error Message -->
                <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

                <!-- Next Button -->
                <div class="mt-6">
                    
                    <button
                        @click="nextPage"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
                        :disabled="!selectedYear || loading"
                    >
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
        const selectedYear = ref('');
        const errorMessage = ref('');
        const loading = ref(false);
        const router = useRouter();

        // Function to go back to the previous page
        const goBack = () => {
            localStorage.removeItem("userYear");
            router.back(); // Adjust based on your routing logic
        };

        // Function to select a year
        const selectYear = (year) => {
            selectedYear.value = year;
            localStorage.setItem("userYear",year)
            errorMessage.value = ''; // Clear any previous error
        };

        // Function to clear selected year
        const clearSelection = () => {
            localStorage.removeItem("userYear");
            selectedYear.value = '';
        };

        // Function to proceed to the next page after year selection
        const nextPage = async () => {
            if (!selectedYear.value) {
                errorMessage.value = "Please select a year";
                return;
            }
            loading.value = true;
            try {
                router.push("/SelectMajor");
            } catch (error) {
                errorMessage.value = "Something went wrong!";
            } finally {
                loading.value = false;
            }
        };

        return {
            selectedYear,
            errorMessage,
            loading,
            goBack,
            selectYear,
            clearSelection,
            nextPage
        };
    }
};
</script>
