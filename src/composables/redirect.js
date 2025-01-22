import { useRouter } from "vue-router";

let redirect = (s) => {
  let router = useRouter();

  if (s) {
                
    if (s.status === "active" && s.profileImage) {
        router.push("/HomeView");
    } else if (!s.profileImage) {
        router.push("/ProfileForm");
    } else if (s.status === "out") {
        router.push("/StudentForm");
    }
}
}

export default redirect;