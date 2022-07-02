<template>
  <h1>home page</h1>
  <div v-if="user">{{ user.displayName }}</div>
</template>
<script>
import { useUser } from "@/composable/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
