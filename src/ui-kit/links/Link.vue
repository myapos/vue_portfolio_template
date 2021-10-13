<template>
  <router-link :to="'/' + target" class="mr-10 text-purple-50">{{
    description
  }}</router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    target: String,
    description: String,
  },
};
</script>

<style scoped></style>
