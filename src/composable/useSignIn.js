/* eslint-disable prettier/prettier */
import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const err = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  err.value = null;
  isPending.value = true;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    return res;
  } catch (error) {
    console.log(error);
    err.value = error.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignIn() {
  return { err, isPending, signIn };
}
