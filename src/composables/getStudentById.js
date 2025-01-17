import { db } from "@/firebase/config";
import { ref } from "vue"

let getStudentById = (id) =>{
    let userData = ref(null);
    let error1 = ref("");

    let load = async () => {
        try {

            let doc = await db.collection("students").doc(id).get();
            if(doc.data()) {
                userData.value = {id:doc.id,...doc.data()};
            }
            
        } catch (err) {
            error1.value = err.message;
        }
    }

    return {userData,error1,load};
}

export default getStudentById;