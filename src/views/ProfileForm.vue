<template>
<div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <!-- Title Section -->
        <div class="text-center mb-8">
            <h2 class="text-2xl font-semibold text-gray-700">Update Your Profile Picture</h2>
            <p class="text-sm text-gray-500 mt-2">Select a new profile picture to personalize your account.</p>
        </div>

        <!-- Profile Image Upload Section -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Profile Image Preview -->
            <div class="flex justify-center mb-6">
                <label for="profile-image" class="cursor-pointer">
                    <div class="w-40 h-40 rounded-full border-4 border-blue-500 flex justify-center items-center overflow-hidden bg-gray-200 hover:opacity-80 transition-opacity">
                        <img v-if="imagePreview" :src="imagePreview" alt="Profile Preview" class="w-full h-full object-cover" />
                        <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooCX-nPSHN0kCVdUnm-eptCPvUF04YaxeHQ&s" alt="Default Profile" class="w-full h-full object-cover" />
                    </div>
                </label>
                <input type="file" id="profile-image" accept="image/*" class="hidden" @change="previewImage" />
            </div>

            <!-- Displaying User's Name -->
            <div class="mb-6 text-center">
                <p class="text-lg font-medium text-gray-700">John Doe</p>
            </div>

            <!-- Upload Button -->
            <div class="text-center">
                <button type="submit" class="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300">
                    Upload Profile Picture
                </button>
            </div>
        </form>

        <!-- Status Message -->
        <div v-if="uploadStatus" class="mt-4 text-center text-sm text-green-500">
            {{ uploadStatus }}
        </div>
    </div>
</div>
</template>

  
  
<script>
import {
    ref
} from "vue";

export default {
    setup() {
        // Reactive variables
        const imageFile = ref(null);
        const imagePreview = ref(null);
        const uploadStatus = ref("");

        // Preview image after file selection
        const previewImage = (event) => {
            const file = event.target.files[0];
            if (file) {
                imageFile.value = file;
                imagePreview.value = URL.createObjectURL(file);
            }
        };

        // Handle form submission (simulating image upload)
        const handleSubmit = () => {
            if (!imageFile.value) {
                alert("Please select an image before submitting.");
                return;
            }

            // Simulate image upload process
            setTimeout(() => {
                uploadStatus.value = "Profile picture uploaded successfully!";
                resetForm();
            }, 1500);
        };

        // Reset form after upload
        const resetForm = () => {
            imageFile.value = null;
            imagePreview.value = null;
        };

        return {
            imagePreview,
            uploadStatus,
            previewImage,
            handleSubmit,
        };
    },
};
</script>
