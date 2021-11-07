<template>
  <div class="relative" id="contact">
    <div
      v-if="activeTheme === 'dark'"
      class="relative z-0 contact_background contact_background_black"
    ></div>
    <div
      v-if="activeTheme === 'light'"
      class="relative z-0 contact_background contact_background_white"
    ></div>

    <div class="cover absolute left-0 right-0 z-0"></div>
    <div
      class="
        details
        text-center
        ml-auto
        mr-auto
        left-0
        right-0
        text-green-50
        dark:text-gray-50
        z-0
        absolute
      "
    >
      <div class="relative">
        <div class="intro_text text-3xl text-center" id="sectionHeader">
          Contacts
        </div>
        <app-ruler name="information" />
        <div class="m-5 teaser custom_teaser">All to contact us</div>
        <div class="flex flex-row flex-wrap justify-around">
          <app-address-info :info="info" />
          <app-contact-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRuler from "@/ui-kit/ruler/Ruler.vue";
import AppAddressInfo from "./AddressInfo.vue";
import AppContactForm from "./ContactForm.vue";
import * as db from "./data";

export default {
  name: "Contacts",
  components: {
    AppRuler,
    AppAddressInfo,
    AppContactForm,
  },
  data() {
    const { data } = db;
    return {
      ...data,
    };
  },
  computed: {
    activeTheme: function () {
      const activeTheme = this.$store.getters.getActiveTheme();
      return activeTheme;
    },
  },
};
</script>

<style scoped>
img {
  height: 600px;
  width: 100%;
}

.intro_text {
  text-transform: uppercase;
}
.details {
  z-index: 1;
  left: 0;
  right: 0;
  top: 20%;
}

.controls {
  margin-top: 12rem;
}

.contact_background {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  background-attachment: fixed;
  background-position: 0px 90px;
}
.contact_background_black {
  background-image: url("../../assets/contacts/map-bg.jpg");
  background-color: #000714;
}
.contact_background_white {
  background-image: url("../../assets/contacts/map-bg.jpg");
}
.cover {
  background-color: #000714;
  height: 500px;
  width: 100%;
  top: 0;
  opacity: 0.8;
}

.custom_teaser {
  color: white;
}
</style>
