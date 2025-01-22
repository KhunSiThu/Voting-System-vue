import { db } from "@/firebase/config";
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const getStudentById = (id) => {
  const router = useRouter();

  // If no userId is found, return default empty values
  if (!id) {
    return {
      userData: ref(null),
      error: ref("User ID not provided"),
      load: () => {},
    };
  }

  const userData = ref(null);
  const error = ref("");
  let unsubscribe = null;

  const load = () => {
    try {
      unsubscribe = db.collection("students").doc(id).onSnapshot(
        (doc) => {
          if (doc.exists) {
            userData.value = { id: doc.id, ...doc.data() };
            // Store the fetched user data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData.value));
          } else {
            error.value = "Student not found";
          }
        },
        (err) => {
          console.error("Error fetching student:", err.message);
          error.value = err.message;
        }
      );
    } catch (err) {
      console.error("Unexpected error:", err.message);
      error.value = "An unexpected error occurred.";
    }
  };

  // Ensure the Firestore listener is cleaned up on component unmount
  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  return { userData, error, load };
};

export default getStudentById;
