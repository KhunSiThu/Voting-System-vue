
import { db } from "@/firebase/config";
import { ref } from "vue";

let getAllCandidates = ()=>{
    let candidates = ref([]);
    let error = ref("");

    let load = async () => {
      try {

        let response = await db.collection("candidates").orderBy("number").get();
        candidates.value = response.docs.map((doc)=> {
          return {...doc.data()}
        })
        
      } catch (err) {
        error.value = err.message;
      }
    }

    return {candidates,error,load};
}

export default getAllCandidates;