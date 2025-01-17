<template>
<Loading v-if="clickSubmit"></Loading>

<div class="w-screen h-screen flex justify-center items-center">
    <div class="w-full md:w-[360px] p-8 md:p-0">

        <!-- Back Button -->
        <button @click="goBack" class="fixed top-6 left-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm mb-4 flex items-center">
            <i class="fa-solid fa-arrow-left mr-2"></i>
            Back
        </button>

        <!-- Register Form -->
        <div v-if="isRegister && !registeredUser" class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Register New Student Account</h2>
            <form @submit.prevent="handleRegister">
                <!-- Full Name Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="fullname" id="register_fullname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_fullname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Full Name
                    </label>
                </div>

                <!-- Roll No Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="rollNo" id="register_rollNo" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="register_rollNo" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Roll No
                    </label>
                    <p v-if="rollexample" class="absolute top-4 right-0 text-gray-400 text-xs">{{ rollexample }}</p>
                </div>

                <!-- Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="register_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>

                <!-- Confirm Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="confirmPasswordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('confirmPassword')"></i>
                    <input :type="confirmPasswordVisible ? 'text' : 'password'" v-model="confirmPassword" id="register_confirmPassword" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_confirmPassword" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirm Password
                    </label>
                </div>

                <p v-if="errorMessage" class="text-red-600 text-sm prose text-justify">{{ errorMessage }}</p>

                <div class="mt-10 text-center">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register New Account
                    </button>
                </div>
            </form>

            <div class="mt-4 text-center">
                <span class="text-sm text-gray-600">Already have an account? </span>
                <button @click="toggleForm" class="text-blue-600 hover:text-blue-800">Login</button>
            </div>
        </div>

        <!-- Login Form -->
        <div v-else class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Login to Your Student Account</h2>
            <form @submit.prevent="handleLogin">
                <!-- Roll No Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="rollNo" id="login_rollNo" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="login_rollNo" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Roll No
                    </label>
                </div>

                <!-- Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="login_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="login_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>

                <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

                <div class="mt-10 text-center">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
import {
    checkRollNo,
    rollExample
} from '@/composables/checkRollNo';
import Loading from '../components/Loading'
import {
    studentRegister
} from "@/composables/studentRegister";
import {
    ref
} from "vue";
import {
    useRouter
} from "vue-router";

export default {
    components: {
        Loading
    },
    setup() {
        const isRegister = ref(true); // Start with registration form
        const fullname = ref("");
        const rollNo = ref("");
        const rollError = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const passwordVisible = ref(false);
        const confirmPasswordVisible = ref(false);
        const errorMessage = ref("");
        const registeredUser = ref(false);
        const clickSubmit = ref(false);

        const router = useRouter();

        const userMajor = localStorage.getItem("userMajor");
        const userYear = localStorage.getItem("userYear");

        let rollexample = rollExample(userYear,userMajor);

        const togglePasswordVisibility = (type) => {
            if (type === "password") passwordVisible.value = !passwordVisible.value;
            if (type === "confirmPassword") confirmPasswordVisible.value = !confirmPasswordVisible.value;
        };

        const toggleForm = () => {
            isRegister.value = !isRegister.value;
        };

        const validatePassword = (password) => {
            if (password.length < 8) {
                return "Password must be at least 8 characters long.";
            }
            if (!/[A-Z]/.test(password)) {
                return "Password must contain at least one uppercase letter.";
            }
            if (!/[a-z]/.test(password)) {
                return "Password must contain at least one lowercase letter.";
            }
            if (!/\d/.test(password)) {
                return "Password must contain at least one number.";
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                return "Password must contain at least one special character.";
            }
            return ""; // No errors
        };

        const handleRegister = async () => {
            errorMessage.value = ""; // Reset error message   

            if (!fullname.value || !rollNo.value || !password.value || !confirmPassword.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }

            let rollcheck = checkRollNo(userYear, userMajor, rollNo.value);
            if (!rollcheck) {
                errorMessage.value = "Invalid Roll Number Format! Please enter a valid roll number.";
                return;
            }

            const passwordError = validatePassword(password.value);
            if (passwordError) {
                errorMessage.value = passwordError;
                return;
            }

            if (password.value !== confirmPassword.value) {
                errorMessage.value = "Passwords do not match.";
                return;
            }

            const {
                addStudent,
                error
            } = studentRegister(
                fullname.value,
                rollNo.value,
                password.value,
                userYear,
                userMajor
            );

            try {
                clickSubmit.value = true;
                const userId = await addStudent();
                if (userId) {
                    isRegister.value = false;
                    registeredUser.value = true;
                    clickSubmit.value = false;
                    localStorage.setItem("userId",userId);
                }

            } catch (err) {
                clickSubmit.value = false;
                errorMessage.value = error.value || "An unexpected error occurred. Please try again.";
            }
        };

        const handleLogin = () => {
            errorMessage.value = ""; // Reset error message
            if (!rollNo.value || !password.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }
            console.log("Logging in with:", {
                rollNo: rollNo.value,
                password: password.value
            });
        };

        const goBack = () => {
            localStorage.removeItem("userMajor");
            router.back();
        };

        return {
            clickSubmit,
            isRegister,
            fullname,
            rollNo,
            rollError,
            rollexample,
            password,
            confirmPassword,
            passwordVisible,
            confirmPasswordVisible,
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

<style scoped>
/* Add scoped styles if needed */
</style>
