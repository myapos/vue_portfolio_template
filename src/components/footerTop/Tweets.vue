<template>
  <div class="flex flex-col flex-wrap justify-center items-center">
    <div v-for="tweet in tweets" :key="tweet.id" class="m-2">
      <div>
        <span class="text-sm dark:text-gray-600 mr-2">@{{ tweet.by }}</span>
        <span>{{ tweet.text }}</span>
      </div>

      <div class="text-sm mt-2">{{ tweet.when }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweets",
  props: {
    tweets: Object,
  },
};
</script>

<style scoped></style>
