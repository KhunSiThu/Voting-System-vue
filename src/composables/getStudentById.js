import { db } from "@/firebase/config";
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const getStudentById = () => {
  const userId = localStorage.getItem("userId");
  const router = useRouter();

  // If no userId is found, return default empty values
  if (!userId) {
    return {
      userData: ref(null),
      error: ref("User ID not found"),
      load: () => {},
    };
  }

  const userData = ref(null);
  const error = ref("");
  let unsubscribe = null;

  const load = async () => {
    try {
      unsubscribe = db.collection("students").doc(userId).onSnapshot(
        (doc) => {
          if (doc.exists) {
            userData.value = { id: doc.id, ...doc.data() };
            // if(userData.value.status === 'active') {
            //   localStorage.setItem("userData",JSON.stringify(userData.value));
            // } else {
            //   localStorage.removeItem("userData")
            // }
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
