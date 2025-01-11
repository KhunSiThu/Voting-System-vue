import { ref } from "vue";

let deadLine = () => {

    let dayString = ref("");
    let hourString = ref("");
    let minString = ref("");
    let secString = ref("");
    let remainingDays = ref("");
    let remainingHours = ref("");
    let remainingMinutes = ref("");
    let remainingSeconds = ref("");

    const data = "2025-01-15T10:00:00Z"; // Example date string
    const votingEndDate = new Date(data); // Convert the string to a Date object


    // Countdown function to update the timer
    const updateCountdown = () => {

        const now = new Date().getTime();
        const distance = votingEndDate - now;

        const totalSecondsInDay = 24 * 60 * 60;
        const totalSecondsInHour = 60 * 60;
        const totalSecondsInMinute = 60;

        // If countdown reaches zero, stop the timer
        if (distance <= 0) {
            clearInterval(interval);
            // Call any modal or function to notify the user that the vote has ended
            // openVoteEndModal();  // Uncomment this if it's defined elsewhere
            // expiredEl.classList.remove("hidden");  // Uncomment this if the element exists in the DOM
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Opposite progress calculation
        const totalDays = Math.ceil((votingEndDate - new Date(votingEndDate).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24));
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

    return {
        dayString,
        hourString,
        minString,
        secString,
        updateCountdown,
        remainingDays,
        remainingHours,
        remainingMinutes,
        remainingSeconds
    };
}

export default deadLine;


