import { ref, onMounted } from "vue";

const useCandidates = () => {
    const candidates = ref([]);
    const error = ref("");

    const load = async () => {
        try {
            const response = await fetch("http://localhost/candidates");

            if (response.status === 404) {
                throw new Error("URL Not Found!");
            }

            const data = await response.json();
            candidates.value = data;
        } catch (err) {
            error.value = err.message || "An unexpected error occurred!";
        }
    };

 

    return { candidates, error, load };
};

export default useCandidates;
