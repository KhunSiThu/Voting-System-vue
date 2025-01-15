import { ref } from "vue";

const getUserById = (id) => {
    const userData = ref({});
    const error = ref("");

    if(id===null) {
        return { userData, error };
    }

    const load = async () => {
        try {
            const response = await fetch("http://localhost:3000/users/" + id);
            if (response.status === 404) {
                throw new Error("URL Not Found!");
            }
            const datas = await response.json();
            userData.value = datas; // Assign the fetched data to userData
        } catch (err) {
            error.value = err.message || "An unexpected error occurred!";
        }
    };

    load(); 

    return { userData, error };
};

export default getUserById;