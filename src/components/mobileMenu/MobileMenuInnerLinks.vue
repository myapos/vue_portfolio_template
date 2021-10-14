<template>
  <div class="absolute top-full">
    <div class="layer bg-gray-400 p-5 flex flex-col opacity-90">
      <app-link
        v-for="item in items"
        :key="item"
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
