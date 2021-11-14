<template>
  <div class="relative">
    <div
      v-if="activeTheme === 'dark'"
      class="relative z-0 slide_background slide_background_black"
    ></div>
    <div
      v-if="activeTheme === 'light'"
      class="relative z-0 slide_background slide_background_white"
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
          {{ $t("FunFacts.title") }}
        </div>
        <transition-group
          name="custom-classes-transition"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeInUp"
        >
          <app-ruler
            name="information"
            v-if="shouldDisplaySectionHeader"
            class="text-white"
          />
          <div
            class="m-5 teaser custom_teaser"
            v-if="shouldDisplaySectionHeader"
          >
            {{ $t("FunFacts.subtitle") }}
          </div>
        </transition-group>
        <div class="flex flex-row justify-center">
          <app-fun-fact-card
            icon="users"
            number="3000"
            :description="$t('FunFacts.clients')"
          />
          <app-fun-fact-card
            icon="leaf"
            number="800"
            :description="$t('FunFacts.projects')"
          />
          <app-fun-fact-card
            icon="trophy"
            number="55"
            :description="$t('FunFacts.awards')"
          />
          <app-fun-fact-card
            icon="coffee"
            number="1100"
            :description="$t('FunFacts.coffees')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRuler from "@/shared/ruler/Ruler.vue";
import AppFunFactCard from "./FunFactCard.vue";
import { isInViewport } from "@/helpers/isInViewport";
export default {
  name: "FunFacts",
  components: {
    AppRuler,
    AppFunFactCard,
  },
  mounted() {
    window.addEventListener("scroll", this.isSectionHeaderInViewport);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.isSectionHeaderInViewport);
  },
  data() {
    return {
      shouldDisplaySectionHeader: false,
    };
  },
  computed: {
    activeTheme: function () {
      const activeTheme = this.$store.getters.getActiveTheme();
      return activeTheme;
    },
  },
  methods: {
    isSectionHeaderInViewport() {
      const sectionHeader = document.getElementById("sectionHeader");
      const res = isInViewport(sectionHeader);

      this.shouldDisplaySectionHeader = res;
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-1000px);
  opacity: 0;
}
.slide_background {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  background-attachment: fixed;
  background-position: 0px 90px;
}
.slide_background_black {
  background-image: url("../../assets/funfacts/business-marketing-meeting-office.jpg");
  background-color: #000714;
}
.slide_background_white {
  background-image: url("../../assets/funfacts/business-marketing-meeting-office.jpg");
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
