<template>
  <div class="bg-gray-800 p-4 flex flex-wrap justify-between">
    <app-link
      v-for="item in items"
      :key="item"
      :target="item.target"
      :description="item.description"
    />
    <app-switch
      id="header"
      :disabled="false"
      enableText="Dark Mode"
      disabledText="Light Mode"
    />
  </div>
</template>

<script>
import AppLink from "../ui-kit/links/Link";
import AppSwitch from "../ui-kit/switch/Switch";
export default {
  name: "Menu",
  components: {
    AppLink,
    AppSwitch,
  },
  data() {
    return {
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
  },
};
</script>
