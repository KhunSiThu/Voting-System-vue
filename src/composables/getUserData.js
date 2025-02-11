import { db } from "@/firebase/config";
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const getUserData = () => {
  const router = useRouter();

  // Get the userId from localStorage
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  let table = role ? "teachers" : "students";

  // If no userId is found, return default empty values
  if (!userId) {
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
      unsubscribe = db.collection(table).doc(userId).onSnapshot(
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

export default getUserData;
