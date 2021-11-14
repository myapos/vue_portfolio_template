<template>
  <div class="partners relative bg-gray-50 dark:bg-gray-200 p-16">
    <div class="intro_text text-3xl text-center">{{ $t("Join.title") }}</div>
    <app-ruler name="information" />
    <div class="m-5 text-center teaser">{{ $t("Join.subtitle") }}</div>
    <div class="flex flex-row flex-wrap justify-center">
      <app-social-network-card
        v-for="social_network in social_networks"
        :key="social_network.id"
        :social_network="social_network"
      />
    </div>
  </div>
</template>

<script>
import AppSocialNetworkCard from "./SocialNetworkCard";
import AppRuler from "@/shared/ruler/Ruler.vue";
import * as data from "./data";
export default {
  name: "JoinUs",
  components: { AppRuler, AppSocialNetworkCard },
  data() {
    const { social_networks } = data;
    return { social_networks };
  },
};
</script>
