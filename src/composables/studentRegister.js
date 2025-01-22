import { db } from "@/firebase/config";
import { ref } from "vue";

// Function for student registration
const studentRegister = (name, rollno, password, year, major) => {
    const error = ref(""); // Reactive error variable

    // Function to add a student to the database with a specific ID
    const addStudent = async () => {
        const newStudent = {
            name,
            rollno,
            password,
            year,
            major,
            createdAt: new Date(), // Add a timestamp for record creation
        };

        try {
            // Use the set method with the provided ID
            let res = await db.collection("students").add(newStudent);
            return res.id;
        } catch (err) {
            error.value = err.message; // Set error message if an error occurs
            console.error("Error adding student:", err); // Log error for debugging
        }
    };

    return { addStudent, error }; // Return the function and error
};

export { studentRegister };
