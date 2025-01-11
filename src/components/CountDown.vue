<template>
<!-- Countdown Timer Section -->
<section id="countdown" class="bg-white dark:bg-gray-800 p-5 md:p-20 sm:p-20 text-center flex items-center justify-center">
    <div class="countdown-container text-center space-y-8">
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
                        <circle  :stroke-dasharray="remainingSeconds*3.14+','+314" id="progress-seconds" class="progress" cx="60" cy="60" r="50" stroke="#FF4500">
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
            remainingSeconds
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
            remainingSeconds
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


