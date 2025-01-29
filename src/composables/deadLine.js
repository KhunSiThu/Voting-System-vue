import { onMounted, ref } from "vue";
import getEndDate from "./getEndDate";

let deadLine = () => {

    let endDate = ref(null);

    let dayString = ref("");
    let hourString = ref("");
    let minString = ref("");
    let secString = ref("");
    let remainingDays = ref("");
    let remainingHours = ref("");
    let remainingMinutes = ref("");
    let remainingSeconds = ref("");

    let votingEnd = ref(false);  
    const isLoading = ref(true); 

    // Fetch end date asynchronously
    getEndDate((isoDate, error) => {
        if (error) {
            console.error("Error retrieving end date:", error);
        } else if (isoDate) {
            endDate.value = new Date(isoDate); // Store the end date as Date object
            
            isLoading.value = false;  // Mark as loaded
        } else {
            console.log("No end date found.");
            isLoading.value = false;  // Mark as loaded even if there's no date
        }
    });

    // Countdown function to update the timer
    const updateCountdown = () => {
        if (isLoading.value || !endDate.value) {
            return;  // Don't run countdown if loading or no date
        }

        const now = new Date().getTime();
        const distance = endDate.value - now;
        // If countdown reaches zero, stop the timer
        if (distance <= 0) {
            
            votingEnd.value = true;

            dayString.value = 0;
            hourString.value = 0;
            minString.value = 0;
            secString.value = 0;

            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Opposite progress calculation
        const totalDays = Math.ceil((endDate.value - new Date(endDate.value).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24));
        remainingDays.value = (days / totalDays) * 100;
        remainingHours.value = (hours / 24) * 100;
        remainingMinutes.value = (minutes / 60) * 100;
        remainingSeconds.value = (seconds / 60) * 100;

        // Format the countdown values as strings with leading zeros if necessary
        dayString.value = days.toString().padStart(2, "0");
        hourString.value = hours.toString().padStart(2, "0");
        minString.value = minutes.toString().padStart(2, "0");
        secString.value = seconds.toString().padStart(2, "0");
    };

    // Start the countdown timer
    const interval = setInterval(updateCountdown, 1000);

    // Return the reactive values to the template
    return {
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
    };
}

export default deadLine;
