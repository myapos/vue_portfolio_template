<template>
  <div class="flex flex-col p-5">
    <div class="p-5">
      <font-awesome-icon :icon="icon" class="text-white" size="3x" />
    </div>
    <div class="text-2xl">{{ number }}</div>
    <div class="text-lg">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "FunFactCard",
  props: {
    icon: String,
    number: String,
    description: String,
  },
};
</script>

<style scoped></style>
