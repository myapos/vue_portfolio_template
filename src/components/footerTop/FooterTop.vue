<template>
  <div class="flex flex-row flex-wrap justify-center items-start bg-gray-900">
    <div class="flex flex-col m-2 p-2 justify-between">
      <div class="mb-5 text-2xl font-bold text-gray-100">Useful links</div>
      <app-links-list :links="links" />
    </div>
    <div class="flex flex-col m-2 p-2 justify-between text-gray-100">
      <div class="mb-5 text-2xl font-bold text-gray-100">Subscribe</div>
      <app-subscribe :email="email" />
    </div>
    <div class="flex flex-col m-2 p-2 justify-between text-gray-100">
      <div class="mb-5 text-2xl font-bold text-gray-100">Recent tweets</div>
      <app-tweets :tweets="tweets" />
    </div>
  </div>
</template>
<script>
import AppLinksList from "./LinksList";
import AppSubscribe from "./Subscribe";
import AppTweets from "./Tweets";

import * as db from "./data";
export default {
  name: "FooterTop",
  components: {
    AppLinksList,
    AppSubscribe,
    AppTweets,
  },
  data() {
    const { data } = db;
    return {
      ...data,
    };
  },
};
</script>

<style scoped></style>
