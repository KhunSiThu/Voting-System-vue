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

                <p v-if="rollError" class="text-red-600 text-sm prose text-justify mb-6">{{ rollError }}</p>

                <!-- Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="register_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>

                <p v-if="passwordErrors" class="text-red-600 text-sm prose text-justify mb-6">{{ passwordErrors }}
                </p>

                <!-- Confirm Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="confirmPasswordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('confirmPassword')"></i>
                    <input :type="confirmPasswordVisible ? 'text' : 'password'" v-model="confirmPassword" id="register_confirmPassword" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="register_confirmPassword" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirm Password
                    </label>
                </div>

                <p v-if="matchError" class="text-red-600 text-sm prose text-justify mb-6">{{ matchError }}</p>

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

                <p v-if="rollError" class="text-red-600 text-sm prose text-justify mb-6">{{ rollError }}</p>

                <!-- Password Input -->
                <div class="relative z-0 w-full mb-5 group">
                    <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="absolute right-0 p-2.5 cursor-pointer" @click="togglePasswordVisibility('password')"></i>
                    <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="login_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="login_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>

                <p v-if="passwordErrors" class="text-red-600 text-sm prose text-justify mb-6">{{ passwordErrors }}
                </p>

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
import Loading from "../components/Loading";
import {
    ref
} from "vue";
import {
    useRouter
} from "vue-router";
import {
    checkRollNo,
    rollExample
} from "@/composables/checkRollNo";
import {
    studentRegister
} from "@/composables/studentRegister";
import getStudentById from "@/composables/getStudentById";
import getAllStudents from "@/composables/getAllStudents";
import {
    db
} from "@/firebase/config";

export default {
    components: {
        Loading
    },
    setup() {
        // **State Variables**
        const isRegister = ref(true);
        const fullname = ref("");
        const rollNo = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const clickSubmit = ref(false);
        const passwordVisible = ref(false);
        const confirmPasswordVisible = ref(false);
        const registeredUser = ref(false);

        // **Error Messages**
        const rollError = ref("");
        const passwordErrors = ref("");
        const matchError = ref("");
        const errorMessage = ref("");

        // **User Info**
        const userMajor = localStorage.getItem("userMajor");
        const userYear = localStorage.getItem("userYear");
        const rollexample = rollExample(userYear, userMajor);

        const router = useRouter();

        // Load all students
        const {
            students,
            error1,
            load
        } = getAllStudents();

        // **Helper Functions**
        const togglePasswordVisibility = (type) => {
            if (type === "password") passwordVisible.value = !passwordVisible.value;
            if (type === "confirmPassword") confirmPasswordVisible.value = !confirmPasswordVisible.value;
        };

        const toggleForm = () => {
            clearErrors();
            isRegister.value = !isRegister.value;
        };

        const clearErrors = () => {
            rollError.value = "";
            passwordErrors.value = "";
            matchError.value = "";
            errorMessage.value = "";
        };

        // **Password Validation**
        const validatePassword = (password) => {
            if (password.length < 8) return "Password must be at least 8 characters.";
            if (!/[A-Z]/.test(password)) return "Must include at least one uppercase letter.";
            if (!/[a-z]/.test(password)) return "Must include at least one lowercase letter.";
            if (!/\d/.test(password)) return "Must include at least one number.";
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Must include one special character.";
            return "";
        };

        // **Register Student**
        const handleRegister = async () => {

            clearErrors();
            if (!fullname.value || !rollNo.value || !password.value || !confirmPassword.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }

            if (!checkRollNo(userYear, userMajor, rollNo.value)) {
                rollError.value = "Invalid Roll Number Format!";
                return;
            }

            const passwordError = validatePassword(password.value);
            if (passwordError) {
                passwordErrors.value = passwordError;
                return;
            }

            if (password.value !== confirmPassword.value) {
                matchError.value = "Passwords do not match.";
                return;
            }

            clickSubmit.value = true;
            await load()

            // Validate student credentials
            const student = students.value.find((s) => s.rollno === rollNo.value);

            if (student) {
                clickSubmit.value = false;
                rollError.value = "Roll Number already exists.";
                return;
            }

            const {
                addStudent
            } = studentRegister(fullname.value, rollNo.value, password.value, userYear, userMajor);
            try {
                const userId = await addStudent();
                if (userId) {
                    // localStorage.setItem("userId", userId);

                    localStorage.removeItem("userProfile")
                    registeredUser.value = true;
                    isRegister.value = false;
                }
            } catch {
                errorMessage.value = "Registration failed. Try again.";
            } finally {
                clickSubmit.value = false;
            }
        };

        // **Login Student**
        const handleLogin = async () => {
            clearErrors();

            // Validate input fields
            if (!rollNo.value || !password.value) {
                errorMessage.value = "Please fill out all fields.";
                return;
            }

            clickSubmit.value = true;
            await load()
            // Check for errors in fetching data
            if (error1.value) {
                errorMessage.value = "An error occurred while fetching student data.";
                clickSubmit.value = false;
                return;
            }

            // Validate student credentials
            const student = students.value.find((s) => s.rollno === rollNo.value);

            if (!student) {
                clickSubmit.value = false;
                rollError.value = "Your account was not found!";
                return;
            }

            if (student.password !== password.value) {
                clickSubmit.value = false;
                passwordErrors.value = "Password is incorrect!";
                return;
            }

            // Successful login: store user data in localStorage
            localStorage.setItem("userId", student.id);

            await db.collection("students").doc(student.id).set({

                status: "active"
            }, {
                merge: true
            });

            // Check and handle user profile image
            if (student.profileImage) {
                // Store the base64 image string in Firestore
                router.push("/HomeView");
            } else {
                router.push("/ProfileForm");
            }
        };

        const goBack = () => {
            localStorage.removeItem("userMajor");
            router.back();
        };

        return {
            isRegister,
            fullname,
            rollNo,
            password,
            confirmPassword,
            passwordVisible,
            confirmPasswordVisible,
            rollexample,
            clickSubmit,
            rollError,
            passwordErrors,
            matchError,
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
