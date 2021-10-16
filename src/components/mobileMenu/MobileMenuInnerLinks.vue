<template>
  <div
    class="absolute top-full left-0 p-5 bg-gray-800 opacity-90 rounded-b-sm"
    :style="{ width: innerMenuWidth + 'px', 'border-top': '1px solid red' }"
  >
    <div class="layer flex flex-col">
      <app-link
        v-for="item in items"
        :key="item.target"
        :target="item.target"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import AppLink from "../../ui-kit/links/Link";

export default {
  name: "MobileMenuInnerLinks",
  components: {
    AppLink,
  },
  props: {
    innerMenuWidth: Number,
  },
  data() {
    const data = {
      items: [
        { target: "home", description: "Home" },
        { target: "about", description: "About" },
        { target: "services", description: "Services" },
        { target: "works", description: "Works" },
        { target: "team", description: "Team" },
        { target: "prices", description: "Prices" },
        { target: "contact", description: "Contact" },
      ],
    };

    return data;
  },
};
</script>

<style scoped></style>
