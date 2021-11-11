<template>
  <app-header />
  <app-slider />
  <app-about />
  <app-skills />
  <app-download />
  <app-services />
  <app-reviews />
  <app-works />
  <app-fun-facts />
  <app-team />
  <app-partners />
  <app-prices />
  <app-join-us />
  <app-contacts />
  <app-footer-top />
  <app-footer />
  <app-scroll-to-top />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/footer/Footer.vue";
import AppAbout from "@/components/about/About";
import AppSlider from "@/components/slider/Slider.vue";
import AppSkills from "@/components/skills/Skills.vue";
import AppDownload from "@/components/download/Download.vue";
import AppScrollToTop from "@/components/scrollToTop/ScrollToTop.vue";
import AppServices from "@/components/services/Services.vue";
import AppReviews from "@/components/reviews/Reviews.vue";
import AppWorks from "@/components/works/Works.vue";
import AppFunFacts from "@/components/funfacts/FunFacts.vue";
import AppTeam from "@/components/team/Team.vue";
import AppPartners from "@/components/partners/Partners.vue";
import AppPrices from "@/components/prices/Prices.vue";
import AppJoinUs from "@/components/join_us/JoinUs.vue";
import AppContacts from "@/components/contacts/Contacts.vue";
import AppFooterTop from "@/components/footerTop/FooterTop.vue";

export default {
  name: "Base",
  components: {
    AppHeader,
    AppFooter,
    AppAbout,
    AppSlider,
    AppSkills,
    AppDownload,
    AppScrollToTop,
    AppServices,
    AppReviews,
    AppWorks,
    AppFunFacts,
    AppTeam,
    AppPartners,
    AppPrices,
    AppJoinUs,
    AppContacts,
    AppFooterTop,
  },
  props: {},
};
</script>
