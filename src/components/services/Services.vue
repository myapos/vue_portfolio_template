<template>
  <div class="cta" id="services">
    <div class="header font-bold text-3xl text-center m-5">Services</div>
    <app-ruler name="information" />
    <div class="flex justify-center teaser">what we really know how</div>
    <div class="container m-auto">
      <section class="services p-5 flex flex-row flex-wrap justify-center">
        <app-service-card
          title="App Development"
          text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
          icon="mobile-alt"
        />
        <app-service-card
          title="Ui Design"
          text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
          icon="chart-pie"
        />
        <app-service-card
          title="Cloud Hosting"
          text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
          icon="cloud"
        />
        <app-service-card
          title="Coding Pen"
          text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
          icon="pencil-alt"
        />
      </section>
    </div>
  </div>
</template>

<script>
import AppServiceCard from "../../ui-kit/services_card/ServiceCard.vue";
import AppRuler from "../../ui-kit/ruler/Ruler.vue";
export default {
  name: "Services",
  components: {
    AppServiceCard,
    AppRuler,
  },
};
</script>

<style scoped>
.header {
  text-transform: uppercase;
}
</style>
