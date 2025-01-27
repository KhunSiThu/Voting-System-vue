import { ref } from "vue";
import { db } from "@/firebase/config";

// Real-time `getResults` function
const getResults = (year, callback) => {
    const allResults = ref(null);
    let obj = "wholeKing";

    try {
        const docRef = db.collection("results").doc(year.toString());

        // Set up a real-time listener using `onSnapshot`
        docRef.onSnapshot((doc) => {
            if (doc.exists) {
                allResults.value = doc.data();

                // Trigger the callback with the updated data, if provided
                if (callback) {
                    callback(doc.data());
                }
            } else {
                console.log("No results found for the year:", year);
                allResults.value = null;
            }
        });
    } catch (error) {
        console.error("Error setting up real-time listener:", error);
    }

    return allResults; // Reactive reference to use in Vue components
};

export default getResults;
