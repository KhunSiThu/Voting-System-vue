import { db } from "@/firebase/config";
import { ref } from "vue";

const getStudentById = (id) => {

  const role = localStorage.getItem("role");

  let table = role ? "teachers" : "students";

  // If no userId is provided, return default values
  if (!id) {
    return {
      userData: ref(null),
      error: ref("User ID not provided"),
      load: async () => {
        console.warn("Load function called without a valid ID.");
      },
    };
  }

  const userData = ref(null);
  const error = ref("");

  const load = async () => {
    try {
      // Fetch the student data from Firestore
      const doc = await db.collection(table).doc(id).get();
      if (doc.exists) {
        userData.value = { id: doc.id, ...doc.data() };
      } else {
        error.value = "Student not found";
      }
    } catch (err) {
      console.error("Error fetching student:", err.message);
      error.value = "An unexpected error occurred.";
    }
  };

  return { userData, error, load };
};

export default getStudentById;
