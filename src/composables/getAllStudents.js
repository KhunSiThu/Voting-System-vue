import { db } from "@/firebase/config";
import { ref } from "vue";

let getAllStudents = () => {
    let students = ref([]);
    let error1 = ref("");

    let load = async () => {
        try {
            let res = await db.collection("students").get();
            students.value = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (err) {
            error1.value = err.message;
        }
    };

    return { students, error1, load };
};

export default getAllStudents;
