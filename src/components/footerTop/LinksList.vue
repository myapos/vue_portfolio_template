<template>
  <ul>
    <li v-for="link in links" :key="link.id" class="text-gray-100">
      <a :href="link.target" target="_blank">{{ link.description }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LinksList",
  props: {
    links: Object,
  },
};
</script>

<style scoped></style>
