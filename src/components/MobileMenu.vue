<template>
  <div class="bg-gray-800 p-4 flex justify-end">
    <app-switch id="header" :disabled="false" />
  </div>
</template>

<script>
import AppSwitch from "../ui-kit/switch/Switch";
export default {
  name: "MobileMenu",
  components: {
    AppSwitch,
  },
};
</script>
