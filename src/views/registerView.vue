<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="space-y-6 flex flex-col justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              class="px-4 py-4 rounded-lg border-gray-100 border-2 mt-1"
              id="fullName"
              placeholder="iMoney...."
              v-model="fullName"
            />
          </label>
        </div>

        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              type="email"
              class="px-4 py-4 rounded-lg border-gray-100 border-2 mt-1"
              id="email"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              class="px-4 py-4 rounded-lg border-gray-100 border-2 mt-1"
              id="password"
              placeholder="******"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="bg-primary text-white font-bold px-3 py-4 text-center w-full rounded-lg"
            type="submit"
          >
            Sign up
          </button>
          <button
            v-else
            disabled
            class="bg-primary text-white font-bold px-3 py-4 text-center w-full rounded-lg cursor-not-allowed bg-gray-600"
          >
            Loading ...
          </button>
        </div>
      </form>
      <div v-if="err" class="text-left mt-4 text-red">
        <span>{{ err }}</span>
      </div>
      <!-- Start : direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1 font-bold text-primary">
          <router-link :to="{ name: 'Login', params: {} }">Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignUp } from "@/composable/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { err, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    async function onSubmit() {
      await signUp(email.value, password.value, fullName.value);
      if (!err.value) router.push({ name: "Home", params: {} });
    }
    return {
      onSubmit,
      fullName,
      email,
      password,
      err,
      isPending,
    };
  },
};
</script>
