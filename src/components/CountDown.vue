<template>
    
<section v-if="votingEnd">
    <!-- Voting End Section -->
    <div class="voting-end-section text-center p-8 md:p-12 bg-white dark:bg-gray-800 dark:text-gray-200">
        <h1 class="text-2xl sm:text-4xl font-bold dark:text-white">Voting Period Has Ended</h1>
        <p class="text-gray-400 dark:text-gray-300 text-sm sm:text-xl mt-4 prose md:text-center text-justify">
            The voting deadline has passed. Thank you for your participation!
        </p>
        
        <p class="text-sm sm:text-lg text-gray-500 dark:text-gray-300 mt-6 prose md:text-center text-justify">
            We appreciate your engagement in this year's election. Stay tuned for the results!
        </p>
        
        <!-- View Results Buttons -->
        <div class="mt-8 md:space-x-10">
            <!-- University Results Button -->
            <router-link to="/Candidates">
                <button class="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    View Overall University Results
                </button>
            </router-link>
            
            <!-- Major Results Button -->
            <router-link to="/Vote" >
                <button class="bg-blue-500 text-white px-8 py-3 mt-5 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    View Results by Major
                </button>
            </router-link>
        </div>

        <!-- Contact Us Section -->
        <div class="mt-6">
            <p class="text-sm sm:text-base text-gray-500 dark:text-gray-300">
                For any questions or concerns, feel free to 
                <router-link to="/contact">
                    <span class="text-yellow-400 hover:text-yellow-500">Contact Us</span>
                </router-link>.
            </p>
        </div>
    </div>
</section>

<!-- Countdown Timer Section -->
<section v-else id="countdown" class="bg-white dark:bg-gray-800 p-5 md:p-20 sm:p-20 text-center flex items-center justify-center">
    <div v-if="isLoading" role="status" class="flex justify-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
    </div>

    <div v-else class="countdown-container text-center space-y-8">
        <h1 class="text-lg sm:text-4xl md:text-5xl font-bold uppercase tracking-wide dark:text-white">Countdown to
            Voting Deadline</h1>
        <p class="text-gray-400 dark:text-gray-300 text-sm sm:text-xl md:text-2xl">
            Keep track of the remaining time to cast your vote:
        </p>

        <!-- Circular Progress Bars -->
        <div class="block md:flex sm:flex justify-between md:justify-center sm:justify-center gap-10">
            <div class="flex gap-6 justify-between mb-5">
                <!-- Days -->
                <div class="circle">
                    <svg width="120" height="120">
                        <circle class="background" cx="60" cy="60" r="50"></circle>
                        <circle :stroke-dasharray="remainingDays*3.14+','+314" id="progress-days" class="progress" cx="60" cy="60" r="50" stroke="#FFD700">
                        </circle>
                    </svg>
                    <div class="label">
                        <span id="days" class="text-2xl">{{dayString}}</span><br />
                        <small class="text-gray-600 dark:text-gray-300">Days</small>
                    </div>
                </div>

                <!-- Hours -->
                <div class="circle">
                    <svg width="120" height="120">
                        <circle class="background" cx="60" cy="60" r="50"></circle>
                        <circle :stroke-dasharray="remainingHours*3.14+','+314" id="progress-hours" class="progress" cx="60" cy="60" r="50" stroke="#1E90FF">
                        </circle>
                    </svg>
                    <div class="label">
                        <span id="hours" class="text-2xl">{{hourString}}</span><br />
                        <small class="text-gray-600 dark:text-gray-300">Hours</small>
                    </div>
                </div>
            </div>

            <div class="flex gap-6 justify-between">
                <!-- Minutes -->
                <div class="circle">
                    <svg width="120" height="120">
                        <circle class="background" cx="60" cy="60" r="50"></circle>
                        <circle :stroke-dasharray="remainingMinutes*3.14+','+314" id="progress-minutes" class="progress" cx="60" cy="60" r="50" stroke="#32CD32">
                        </circle>
                    </svg>
                    <div class="label">
                        <span id="minutes" class="text-2xl">{{minString}}</span><br />
                        <small class="text-gray-600 dark:text-gray-300">Minutes</small>
                    </div>
                </div>

                <!-- Seconds -->
                <div class="circle">
                    <svg width="120" height="120">
                        <circle class="background" cx="60" cy="60" r="50"></circle>
                        <circle :stroke-dasharray="remainingSeconds*3.14+','+314" id="progress-seconds" class="progress" cx="60" cy="60" r="50" stroke="#FF4500">
                        </circle>
                    </svg>
                    <div class="label">
                        <span id="seconds" class="text-2xl">{{secString}}</span><br />
                        <small class="text-gray-600 dark:text-gray-300">Seconds</small>
                    </div>
                </div>
            </div>
        </div>
        <p class="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-xl md:text-2xl">
            Don't miss the opportunity! Vote before it's too late!
        </p>

    </div>
</section>
</template>

<script>
import deadLine from '@/composables/deadLine';

export default {

    setup() {
        let {
            dayString,
            hourString,
            minString,
            secString,
            updateCountdown,
            remainingDays,
            remainingHours,
            remainingMinutes,
            remainingSeconds,
            isLoading,
            votingEnd
        } = deadLine();

        updateCountdown();

        return {
            dayString,
            hourString,
            minString,
            secString,
            remainingDays,
            remainingHours,
            remainingMinutes,
            remainingSeconds,
            isLoading,
            votingEnd,
        }

    }

}
</script>

<style scoped>
#countdown {
    font-family: 'Poppins', sans-serif;
}

.circle {
    position: relative;
    width: 120px;
    height: 120px;
}

.circle svg {
    transform: rotate(-90deg);
}

.circle .progress {
    fill: none;
    stroke-width: 12;
    stroke-linecap: round;
    transform-origin: center;
    transition: stroke 0.3s ease;
    /* Smooth transition for color change */
}

.circle .background {
    fill: none;
    stroke: rgba(0, 0, 0, 0.14);
    stroke-width: 12;
}

.circle .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;
}

/* Specific Colors for Progress Bars */
#progress-days {
    stroke: #FFD700;
    /* Gold */
}

#progress-hours {
    stroke: #1E90FF;
    /* DodgerBlue */
}

#progress-minutes {
    stroke: #32CD32;
    /* LimeGreen */
}

#progress-seconds {
    stroke: #FF4500;
    /* OrangeRed */
}

/* Optional: Hover Effect for Labels */
.circle .label span:hover {
    color: #FF4500;
    transition: color 0.3s ease;
}
</style>
