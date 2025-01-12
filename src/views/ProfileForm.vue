<template>
    <Loading v-if="loading"></Loading>
    <div class="flex items-center justify-center w-screen h-screen">

        <div class="w-[400px] flex justify-center items-center flex-col">
            <div class="relative group profile-con">
                <img id="profile-image" :src="profileImage || defaultImage" alt="Profile Image"
                    class="rounded-full border-4 border-gray-300 shadow-lg object-cover transition-transform group-hover:scale-105"
                    style="object-fit: cover; width: 100%; height: 100%;" />
            </div>
            <div class="w-full mt-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                    Profile Image</label>
                <input accept="image/*" @change="handleImageChange" ref="fileInput" required
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">
            </div>

            <div class="w-full mt-5">
                <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                    Name</label>
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    </span>
                    <input ref="fullNameInputRef" type="text" id="website-admin" required
                        class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie Green" v-model="fullName">
                </div>
            </div>

            <div class="w-full mt-5">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your
                    Major</label>
                <select ref="majorSelectRef" id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="selectedMajor" required>
                    <option value="">None</option>
                    <option value="Electronic Engineering">Electronic Engineering</option>
                    <option value="Electrical Power Engineering">Electrical Power Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                </select>
            </div>

            <div class="w-full flex justify-evenly mt-8 ">

                <button @click="resetForm"
                    class="py-3 w-32 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium shadow-lg transform transition-transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Reset
                </button>

                <button @click="submitForm"
                    class="py-3 w-32 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium shadow-lg transform transition-transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Confirm
                </button>

            </div>

        </div>

    </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    components: {
        Loading
    },
    setup() {

        let loading = ref(false);

        let route = useRouter();

        let user = JSON.parse(sessionStorage.getItem("registeredUser"));

        const profileImage = ref(""); // Profile image preview
        const defaultImage = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbNq2LBNwU__YfunpRuckZs6tVQsqA272jw&s"); // Default placeholder
        const fileInput = ref(null); // Reference to the file input element
        const fullName = ref(""); // Full Name
        const selectedMajor = ref(""); // Selected Major

        const fullNameInputRef = ref(null); // Reference to full name input
        const majorSelectRef = ref(null); // Reference to select input

        // Handle image file change
        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImage.value = e.target.result; // Update image preview
                };
                reader.readAsDataURL(file);
            }
        };

        // Reset form
        const resetForm = () => {
            profileImage.value = defaultImage.value;
            fullName.value = "";
            selectedMajor.value = "";
            if (fileInput.value) {
                fileInput.value.value = ""; // Clear file input
            }
        };

        // Submit form with validation
        const submitForm = () => {
            // Null check for fields
            if (!profileImage.value || profileImage.value === defaultImage.value) {

                fileInput.value?.focus(); // Focus file input
                return;
            }
            if (!fullName.value.trim()) {

                fullNameInputRef.value?.focus(); // Focus full name input
                return;
            }
            if (!selectedMajor.value) {

                majorSelectRef.value?.focus(); // Focus major select dropdown
                return;
            }

            let addUser = async () => {
                await fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: fullName.value,
                        email: user.email,
                        password: user.password,
                        major: selectedMajor.value,
                        profile_image: profileImage.value 
                    })
                })
                .then(()=>{
                    return true
                }) 
                .catch(() => {
                    return false
                })

                
            }

            const sendVerifyCode = async () => {
                loading.value = true;

                // Check if user.email, user.password, and fullName.value are defined
                if (!user.email || !user.password || !fullName.value) {
                    console.error('Email, password or full name is missing.');
                    return; // Exit if any required field is missing
                }

                try {
                    const response = await fetch('http://localhost:9000/sendVerifyCode.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            name: fullName.value
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();

                    if (data.success) {
                        sessionStorage.setItem("verifyCode", data.verityCode);
                        await addUser();
                        route.push('/Verify')

                    } else {
                        console.error('Failed to send verification code.');
                    }

                } catch (error) {
                    console.error('There was an error fetching the data:', error);
                }
            };

            sendVerifyCode();





        };

        return {
            profileImage,
            defaultImage,
            fileInput,
            fullName,
            selectedMajor,
            fullNameInputRef,
            majorSelectRef,
            handleImageChange,
            resetForm,
            submitForm,
            loading
        };
    },
};
</script>

<style scoped>
.profile-con {
    width: 200px;
    height: 200px;
    position: relative;
}

.profile-con button:hover {
    background-color: rgba(0, 0, 0, 0.77);
    opacity: 1;
}

@media (max-width: 600px) {
    .profile-con {
        width: 150px;
        height: 150px;
    }
}
</style>
