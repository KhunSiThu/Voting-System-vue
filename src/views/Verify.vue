<template>
    <div id="app" class="min-h-screen flex items-center justify-center bg-gray-100">
        <!-- Loading Indicator -->
        <div id="loading" v-show="isLoading">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>

        <!-- Main Content -->
        <div class="space-y-8 flex flex-col items-center justify-center">
            <!-- Error Message -->
            <div v-if="message && messageType === 'error'" class="alert alert-error">
                <i class="fa-solid fa-circle-exclamation"></i>
                {{ message }}
            </div>

            <!-- Success Message -->
            <div v-if="message && messageType === 'success'" class="alert alert-success">
                <i class="fa-solid fa-circle-check"></i>
                {{ message }}
            </div>

            <!-- Header -->
            <header class="text-7xl rounded-full flex items-center justify-center text-blue-500">
                <i class="fa-solid fa-envelope-open-text fa-bounce"></i>
            </header>
            <h4 class="text-xl font-medium text-gray-800">Verification Code</h4>
            <p class="text-center text-gray-600">
                Please enter the 4-digit verification code <br />
                we sent to your email <strong class="text-blue-400"> {{ userData.email }}</strong>.
            </p>

            <!-- OTP Form -->
            <form @submit.prevent="handleVerify" id="otp-form">
                <div class="flex w-full space-x-2">
                    <input v-for="(value, index) in otp" :key="index" v-model="otp[index]" type="text" maxlength="1"
                        class="otp-input" :disabled="index > 0 && otp[index - 1] === ''" @input="handleInput(index)"
                        :ref="setInputRef(index)" />
                </div>

                <!-- Verify Button -->
                <button id="verify" type="submit"
                    class="w-full mt-10 bg-blue-500 text-white text-lg p-2 rounded-lg hover:bg-blue-600 transition-all disabled:bg-blue-300 disabled:cursor-not-allowed"
                    :disabled="!isOtpComplete">
                    Verify OTP
                </button>

                <!-- Resend OTP Button -->
                <button v-if="message && messageType === 'error'" id="resend" type="button" @click="handleResend"
                    class="w-full mt-2 text-blue-500 text-sm py-2 rounded-lg transition-all">
                    Resend OTP code
                </button>
            </form>

        </div>
    </div>
</template>

<script>
import getUserById from "@/composables/getUserById";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {

        let route = useRouter();

        let userId = localStorage.getItem("userId");

        let {userData,error} = getUserById(userId);

        const otp = reactive(["", "", "", ""]);
        const isLoading = ref(false);
        const message = ref("");
        const messageType = ref("");
        const userEmail = ref("user@example.com");
        const inputRefs = ref([]);

        const isOtpComplete = computed(() => otp.every((char) => char.length === 1));

        const setInputRef = (index) => (el) => {
            inputRefs.value[index] = el;
        };

        const handleInput = (index) => {
            if (otp[index].length === 1 && index < otp.length - 1) {
                inputRefs.value[index + 1]?.focus();
            } else if (otp[index].length === 0 && index > 0) {
                inputRefs.value[index - 1]?.focus();
            }
        };

        const handleVerify = () => {

            isLoading.value = true;

            const storedOtp = userData.value.verify;

            const enteredOtp = otp.join(""); // Combine OTP inputs into a single string

            if (storedOtp === enteredOtp) {
                message.value = "OTP verified successfully";
                messageType.value = "success";

                sessionStorage.clear();
                route.push('/');

            } else {
                message.value = "Invalid OTP. Please try again.";
                messageType.value = "error";
            }

            isLoading.value = false;
        };

        const handleResend = () => {
            isLoading.value = true;

            const newOtp = generateOtp(); // Generate a new OTP
            localStorage.setItem("otp", newOtp); // Store the new OTP in localStorage
            message.value = "OTP resent successfully";
            messageType.value = "success";

            isLoading.value = false;
        };



        return {
            otp,
            isLoading,
            message,
            messageType,
            userEmail,
            isOtpComplete,
            handleInput,
            handleVerify,
            handleResend,
            setInputRef,
            userData
        };
    },
};
</script>


<style>
#loading {
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 200;
}

#loading i {
    font-size: 40px;
    color: rgb(84, 84, 255);
}

.alert {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
}

.alert-error {
    background-color: #fdecea;
    color: #d93025;
    border: 1px solid #f5c2c7;
}

.alert-success {
    background-color: #eafadd;
    color: #00ff44;
    border: 1px solid #88fe76;
}

.alert i {
    font-size: 1.2rem;
}

.otp-input {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 0.5rem;
    outline: none;
    transition: border-color 0.3s ease;
}

.otp-input:focus {
    border-color: #4070f4;
    box-shadow: 0 0 5px rgba(64, 112, 244, 0.5);
}
</style>