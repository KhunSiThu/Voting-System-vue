import { ref } from "vue";

const getAllUser = () => {
    const users = ref([]);
    const error = ref("");

    const load = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            if (response.status === 404) {
                throw new Error("URL Not Found!");
            }
            const datas = await response.json();
            users.value = datas;
        } catch (err) {
            error.value = err.message || "An unexpected error occurred!";
        }
    };

    return { users, error, load };
};

export default getAllUser;