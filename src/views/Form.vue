<template>
<div class="w-screen h-screen flex justify-center items-center">
    <div class="w-[360px]">
        <!-- Register Form -->
        <div v-if="isRegister" class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Register New Account</h2>
            <form @submit.prevent="handleRegister">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" v-model="email" id="register_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                    <p v-if="emailError" class="text-red-600 text-sm mt-1">{{ emailError }}</p>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="register_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    <p v-if="passwordError" class="text-red-600 text-sm mt-1">{{ passwordError }}</p>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="confirmPasswordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('confirmPassword')"></i>
                    <input :type="confirmPasswordVisible ? 'text' : 'password'" v-model="confirmPassword" id="confirm_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="confirm_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirm password
                    </label>
                </div>
                <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>
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
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-10">Login to Your Account</h2>
            <form @submit.prevent="handleLogin">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" v-model="email" id="login_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="login_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                    <p v-if="emailError" class="text-red-600 text-sm mt-1">{{ emailError }}</p>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="login_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="login_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    <p v-if="passwordError" class="text-red-600 text-sm mt-1">{{ passwordError }}</p>
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
import getAllUser from "@/composables/getAllUser";
import {
    ref
} from "vue";

import {
    useRouter
} from "vue-router";

export default {
    setup() {
        const isRegister = ref(true);
        const email = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const errorMessage = ref("");
        const passwordError = ref("");
        const emailError = ref("");
        const passwordVisible = ref(false);
        const confirmPasswordVisible = ref(false);






        let route = useRouter();

        // Check login email
        const checkLoginEmail = async (email, password) => {
            console.log(password)
            const {
                users,
                error,
                load
            } = getAllUser();
            await load();
            if (error.value) {
                emailError.value = error.value;
                return;
            }
            const user = users.value.find((user) => user.email === email);
            if (user) {

                console.log(user.password)
               
                if (password.toString() === user.password.toString()) {
                    passwordError.value = ""
                    
                    route.push('/Verify')

                } else {
                    passwordError.value = "Password incorrect!";
                }
            } else {
                emailError.value = "User not found!";
            }
        };

        // Check register email
        const checkEmail = async (email) => {
            const {
                users,
                error,
                load
            } = getAllUser();
            await load();
            if (error.value) {
                emailError.value = error.value;
                return;
            }
            const exists = users.value.some((user) => user.email === email);
            if (exists) {
                emailError.value = "Email already exists!";
            }
        };

        const toggleForm = () => {
            isRegister.value = !isRegister.value;
            errorMessage.value = "";
            emailError.value = "";
            passwordError.value = "";
        };

        const togglePasswordVisibility = (field) => {
            if (field === "password") {
                passwordVisible.value = !passwordVisible.value;
            } else if (field === "confirmPassword") {
                confirmPasswordVisible.value = !confirmPasswordVisible.value;
            }
        };

        const validateEmail = () => {
            const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            emailError.value = ""; // Reset the error message

            if (!gmailPattern.test(email.value)) {
                emailError.value = "Please enter a valid Gmail address.";
            }
        };

        const validatePassword = () => {
            passwordError.value = ""; // Reset the error message

            if (password.value.length < 8) {
                passwordError.value = "Password must be at least 8 characters long.";
            } else if (!/[A-Z]/.test(password.value)) {
                passwordError.value = "Password must contain at least one uppercase letter.";
            } else if (!/[a-z]/.test(password.value)) {
                passwordError.value = "Password must contain at least one lowercase letter.";
            } else if (!/[0-9]/.test(password.value)) {
                passwordError.value = "Password must contain at least one number.";
            } else if (!/[!@#$%^&*]/.test(password.value)) {
                passwordError.value = "Password must contain at least one special character.";
            }
        };

        const handleRegister = async () => {
            emailError.value = "";
            passwordError.value = ""; // Clear previous errors
            validateEmail(); // Validate email
            validatePassword(); // Validate password
            await checkEmail(email.value);

            if (!emailError.value && !passwordError.value && password.value === confirmPassword.value) {
                
                alert("Registration Successful!");
                const user = {
                    email: email.value,
                    password: password.value
                };
                localStorage.setItem("registeredUser", JSON.stringify(user));
                toggleForm(); // Redirect to login after successful registration
            } else if (password.value !== confirmPassword.value) {
                errorMessage.value = "Passwords do not match.";
            }
        };

        const handleLogin = async () => {
            emailError.value = "";
            passwordError.value = ""; // Clear previous errors
            validateEmail();
            if (!email.value || !password.value) {
                errorMessage.value = "Please fill out all fields.";
            } else {
                errorMessage.value = "";
               
                await checkLoginEmail(email.value, password.value);
            }
        };

        return {
            isRegister,
            email,
            password,
            confirmPassword,
            errorMessage,
            passwordError,
            emailError,
            passwordVisible,
            confirmPasswordVisible,
            toggleForm,
            togglePasswordVisibility,
            handleRegister,
            handleLogin,
        };
    },
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
