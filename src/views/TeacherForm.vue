<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="w-full md:w-[360px] p-8 md:p-0">

            <!-- Back Button -->
            <button @click="goBack"
                class="fixed top-6 left-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm mb-4 flex items-center">
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back
            </button>

            <!-- Register Form Section -->
            <div v-if="isRegister && !registeredUser" class="mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Register New Teacher Account</h2>
                <form @submit.prevent="handleRegister">
                    <!-- Full Name Field -->
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" v-model="fullname" id="register_fullname"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="register_fullname"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Full Name
                        </label>
                    </div>

                    <!-- Teacher ID Field -->
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" v-model="teacherId" id="register_teacherId"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="register_teacherId"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Teacher ID
                        </label>
                    </div>

                    <!-- Password Field -->
                    <div class="relative z-0 w-full mb-5 group">
                        <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
                            class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility"></i>
                        <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="register_password"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="register_password"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                    </div>

                    <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

                    <div class="mt-10 text-center">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Register New Teacher Account
                        </button>
                    </div>
                </form>
                <div class="mt-4 text-center">
                    <span class="text-sm text-gray-600">Already have an account? </span>
                    <button @click="toggleForm" class="text-blue-600 hover:text-blue-800">Login</button>
                </div>
            </div>

            <!-- Login Form Section -->
            <div v-else class="mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Login to Teacher Account</h2>
                <form @submit.prevent="handleLogin">
                    <!-- Teacher ID Field -->
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" v-model="teacherId" id="login_teacherId"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="login_teacherId"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Teacher ID
                        </label>
                    </div>

                    <!-- Password Field -->
                    <div class="relative z-0 w-full mb-5 group">
                        <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
                            class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility"></i>
                        <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="login_password"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="login_password"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                    </div>

                    <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

                    <div class="mt-10 text-center">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button>
                    </div>
                </form>
                <div class="mt-4 text-center">
                    <span class="text-sm text-gray-600">Don't have an account? </span>
                    <button @click="toggleForm" class="text-blue-600 hover:text-blue-800">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/firebase/config";

export default {
    setup() {
        const isRegister = ref(true);
        const fullname = ref("");
        const teacherId = ref("");
        const password = ref("");
        const passwordVisible = ref(false);
        const errorMessage = ref("");
        const teacherIds = ref([]);
        const router = useRouter();

        const fetchAllTeacherIds = async () => {
            try {
                const querySnapshot = await db.collection("teacherID").get();
                teacherIds.value = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                errorMessage.value = "Failed to fetch teacher IDs.";
            }
        };

        onMounted(fetchAllTeacherIds);

        const togglePasswordVisibility = () => {
            passwordVisible.value = !passwordVisible.value;
        };

        const toggleForm = () => {
            isRegister.value = !isRegister.value;
            errorMessage.value = "";
        };

        const handleRegister = async () => {
            errorMessage.value = "";

            if (!fullname.value || !teacherId.value || !password.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }

            const teacherExists = teacherIds.value.find(teacher => teacher.teacherId === teacherId.value && !teacher.user);
            if (!teacherExists) {
                errorMessage.value = "Teacher ID already registered or invalid.";
                return;
            }

            const passwordError = validatePassword(password.value);
            if (passwordError) {
                errorMessage.value = passwordError;
                return;
            }

            try {
                await db.collection("teacherID").doc(teacherExists.id).update({ user: true });
                await db.collection("teachers").add({
                    fullname: fullname.value,
                    password: password.value, // Change this to hashed password for better security
                    teacherId: teacherId.value,
                });

                isRegister.value = false;
                await fetchAllTeacherIds();
            } catch (error) {
                errorMessage.value = "Error registering. Please try again.";
            }
        };

        const handleLogin = async () => {
            errorMessage.value = "";

            if (!teacherId.value || !password.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }

            try {
                const teachersSnapshot = await db.collection("teachers")
                    .where("teacherId", "==", teacherId.value)
                    .limit(1) // Optimize query
                    .get();

                if (teachersSnapshot.empty) {
                    errorMessage.value = "Invalid teacher ID or password.";
                    return;
                }

                const teacher = teachersSnapshot.docs[0].data();
                if (teacher.password !== password.value) { // Replace with hashed password check
                    errorMessage.value = "Invalid teacher ID or password.";
                    return;
                }

                localStorage.setItem("userId", teachersSnapshot.docs[0].id)
                localStorage.setItem("role", "teacher");

                await db.collection("teachers").doc(teachersSnapshot.docs[0].id).set({
                    status: "active"
                }, {
                    merge: true
                });

                router.push("/TeacherProfileForm");
                resetForm();
            } catch (error) {
                errorMessage.value = "Error logging in. Please try again.";
            }
        };

        const validatePassword = (password) => {
            if (password.length < 8) return "Password must be at least 8 characters.";
            if (!/[A-Z]/.test(password)) return "Include at least one uppercase letter.";
            if (!/[a-z]/.test(password)) return "Include at least one lowercase letter.";
            if (!/\d/.test(password)) return "Include at least one number.";
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Include at least one special character.";
            return "";
        };

        const resetForm = () => {
            fullname.value = "";
            teacherId.value = "";
            password.value = "";
            errorMessage.value = "";
        };

        const goBack = () => {
            router.back();
        };

        watch([teacherId, password], () => {
            errorMessage.value = "";
        });

        return {
            isRegister,
            fullname,
            teacherId,
            password,
            passwordVisible,
            errorMessage,
            togglePasswordVisibility,
            toggleForm,
            handleRegister,
            handleLogin,
            goBack,
        };
    },
};
</script>
