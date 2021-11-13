<template>
  <a :href="'#' + target" class="mr-10 dark:text-purple-50">{{
    $t(description)
  }}</a>
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
