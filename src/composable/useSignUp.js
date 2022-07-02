/* eslint-disable prettier/prettier */
import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
const err = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
  isPending.value = true;
  err.value = null; // vi la 1 composable, nen dung o nhieu noi => phai reset
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    await res.user.updateProfile({ displayName: fullName });
    if (!res) {
      throw new Error("Could not create a new user");
    }
    return res;
  } catch (error) {
    console.log(error);
    err.value = error.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { err, isPending, signUp };
}
