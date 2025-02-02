import { ref } from "vue";
import { db } from "@/firebase/config";

const getStudentLimit = async () => {
    const studentLimit = ref(null);

    try {
        const docRef = db.collection("admin").doc("student-limit");
        const doc = await docRef.get();

        if (doc.exists) {
            studentLimit.value = doc.data();
        } else {
            studentLimit.value = null;
        }
    } catch (error) {
        console.error("Error fetching student limit:", error);
    }

    return studentLimit; // Reactive reference to use in Vue components
};

export default getStudentLimit;
