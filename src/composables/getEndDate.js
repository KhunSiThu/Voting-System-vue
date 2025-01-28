import { db } from "@/firebase/config";

const getEndDate = (callback) => {
    try {
        const unsubscribe = db.collection("admin").doc("deadline").onSnapshot(
            (docSnap) => {
                if (docSnap.exists) {
                    const timestamp = docSnap.data().deadline; // Retrieved value

                    let date;
                    if (timestamp?.toDate) {
                        date = new Date(timestamp.toDate());
                    } else if (typeof timestamp === "string" || typeof timestamp === "number") {
                        date = new Date(timestamp);
                    } else {
                        console.error("Invalid timestamp format:", typeof timestamp, timestamp);
                        if (callback) callback(null, new Error("Invalid timestamp format"));
                        return;
                    }

                    const isoDate = date.toISOString();
                    // console.log(isoDate);
                    // localStorage.setItem("endDate", isoDate);

                    if (callback) {
                        callback(isoDate);
                    }
                } else {
                    console.error("No such document!");
                    if (callback) callback(null, new Error("Document does not exist"));
                }
            },
            (error) => {
                console.error("Error with Firestore snapshot:", error);
                if (callback) callback(null, error);
            }
        );

        return unsubscribe;
    } catch (error) {
        console.error("Error initializing onSnapshot:", error);
        if (callback) callback(null, error);
        return null;
    }
};

export default getEndDate;
