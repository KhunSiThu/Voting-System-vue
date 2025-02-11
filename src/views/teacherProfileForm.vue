<template>
    <Loading v-if="clickSubmit || !userData"></Loading>
    <div v-if="userData" class="relative min-h-screen bg-gray-50">
        <!-- Fixed Policy Section -->
        <div class="w-full bg-indigo-600 text-white text-center p-4 fixed top-0 left-0 z-50 shadow-lg">
            <p class="md:w-3/6 mx-auto text-xs sm:text-sm prose text-justify">
                <strong>Profile Picture Policy :</strong> To ensure the integrity and security of the voting system, a
                profile picture is required. This helps verify your identity and ensures a fair and transparent process
                for all participants.
            </p>
        </div>

        <!-- Main Content Below Fixed Policy -->
        <div class="flex justify-center items-center pt-24 sm:pt-32 min-h-screen bg-gray-50">
            <div class="w-full max-w-lg p-8 sm:p-10">
                <!-- Title Section -->
                <div class="text-center mb-6">
                    <h2 class="text-2xl text-blue-500 sm:text-4xl font-semibold">Update Profile Picture</h2>
                    <p class="text-sm text-gray-500 my-2">Please upload a profile picture to continue.</p>
                </div>

                <!-- Profile Image Upload Section -->
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- Profile Image Preview -->
                    <div class="flex justify-center mb-6">
                        <label for="profile-image" class="cursor-pointer">
                            <div class="w-40 h-40 md:h-60 md:w-60 flex justify-center items-center overflow-hidden bg-gray-200">
                                <img v-if="imagePreview" :src="imagePreview" alt="Profile Preview"
                                    class="w-full h-full object-cover border-4 border-blue-400" />
                                <img v-else src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                                    alt="Default Profile"
                                    class="w-full h-full object-cover p-10 opacity-40 hover:opacity-100 border-dashed border-4 border-gray-400 overflow-hidden" />
                            </div>
                        </label>
                        <input type="file" id="profile-image" accept="image/*" class="hidden" @change="previewImage" />
                    </div>

                    <!-- Displaying User's Name -->
                    <div class="mb-6 text-center">
                        <p class="text-lg font-medium text-gray-700">{{ userData.fullname }}</p>
                    </div>

                    <!-- Upload Button (Disabled if no image) -->
                    <div class="text-center">
                        <button type="submit"
                            class="w-full px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
                            :disabled="!imageFile">
                            Upload Profile Picture
                        </button>
                    </div>
                </form>

                <!-- Status Message -->
                <div v-if="uploadStatus" class="mt-4 text-center text-sm"
                    :class="uploadStatus.includes('Error') ? 'text-red-500' : 'text-green-500'">
                    {{ uploadStatus }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Loading from '../components/Loading';
import { db } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
    components: {
        Loading,
    },

    setup() {
        const imageFile = ref(null);
        const imagePreview = ref(null);
        const uploadStatus = ref("");
        const clickSubmit = ref(false);
        const userData = ref(null);

        const userId = localStorage.getItem("userId");
        const router = useRouter();

        // Fetch user data from Firestore
        const fetchUserData = async () => {
            try {
                const userDoc = await db.collection("teachers").doc(userId).get();
                if (userDoc.exists) {
                    userData.value = userDoc.data();

                    if(userDoc.data().profileImage) {
                        router.push("/HomeView");
                    }
                } else {
                    console.error("User not found");
                    router.push("/TeacherForm");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                uploadStatus.value = "Error fetching user data. Please try again.";
            }
        };

        onMounted(fetchUserData);

        const previewImage = (event) => {
            const file = event.target.files[0];
            if (file) {
                imageFile.value = file;
                imagePreview.value = URL.createObjectURL(file);
            }
        };

        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(file);
            });
        };

        const handleSubmit = async () => {
            clickSubmit.value = true;
            if (!imageFile.value) {
                uploadStatus.value = "Please select an image before submitting.";
                clickSubmit.value = false;
                return;
            }

            try {
                const base64Image = await convertToBase64(imageFile.value);
                await db.collection("teachers").doc(userId).update({
                    profileImage: base64Image,
                });

                uploadStatus.value = "Profile picture uploaded successfully!";
                router.push("/HomeView");
            } catch (error) {
                console.error("Error uploading image:", error);
                uploadStatus.value = "Error uploading image. Please try again.";
            } finally {
                clickSubmit.value = false;
            }
        };

        return {
            imagePreview,
            uploadStatus,
            previewImage,
            handleSubmit,
            imageFile,
            clickSubmit,
            userData,
        };
    },
};
</script>

<style scoped>
button:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
}
</style>
