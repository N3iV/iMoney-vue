<template>
  <nav-brand />
  <slot />
</template>
<script>
import NavBrand from "@/components/NavBrand.vue";
export default {
  components: {
    NavBrand,
  },
};
</script>
