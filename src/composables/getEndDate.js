import { db } from "@/firebase/config";

const getEndDate = (callback) => {
    try {
        const unsubscribe = db.collection("admin").doc("deadline").onSnapshot(
            (docSnap) => {
                if (docSnap.exists) {
                    const timestamp = docSnap.data().deadline; // Retrieved value

                    let date;
                    if (timestamp?.toDate) {
                        // Firestore Timestamp
                        date = new Date(timestamp.toDate());
                    } else if (typeof timestamp === "string" || typeof timestamp === "number") {
                        // String or UNIX timestamp
                        date = new Date(timestamp);
                    } else {
                        console.error("Invalid timestamp format:", timestamp);
                        if (callback) callback(null);
                        return;
                    }

                    const isoDate = date.toISOString();
                    console.log(isoDate);
                    localStorage.setItem("endDate", isoDate);

                    if (callback) {
                        callback(isoDate); // Pass the ISO date to the callback
                    }
                } else {
                    console.error("No such document!");
                    if (callback) callback(null);
                }
            },
            (error) => {
                console.error("Error with Firestore snapshot:", error);
                if (callback) callback(null, error);
            }
        );

        return unsubscribe; // Allow caller to unsubscribe
    } catch (error) {
        console.error("Error initializing onSnapshot:", error);
        if (callback) callback(null, error);
        return null;
    }
};

export default getEndDate;
