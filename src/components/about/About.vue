<template>
  <div class="cta" id="about">
    <div class="container m-auto">
      <section class="about p-5 text-center">
        <div class="header text-3xl">{{ $t("About.title") }}</div>
        <app-ruler name="information" />
        <div class="teaser">{{ $t("About.subtitle") }}</div>
        <!--  <h2>{{ $t("test") }}</h2> -->
        <section class="cards flex flex-row flex-wrap mt-16">
          <app-card
            header="Who We Are?"
            text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
            icon="users"
          />
          <app-card
            header="What We Do?"
            text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
            icon="headset"
          />
          <app-card
            header="Why We Do it?"
            text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
            icon="heart"
          />
          <app-card
            header="Since When?"
            text="Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist."
            icon="clock"
          />
          <!---->
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import AppCard from "./Card.vue";
import AppRuler from "@/shared/ruler/Ruler.vue";

export default {
  name: "About",
  components: {
    AppCard,
    AppRuler,
  },
};
</script>

<style scoped>
.header {
  text-transform: uppercase;
}
.ruler {
  max-width: 200px;
  height: px;
  width: 200px;
  border-top: 1px solid #ccc;
}
.subsection {
  max-width: 400px;
  margin: 0 auto;
}
.cards {
  justify-content: space-between;
}

/* On screens that are 1536px or less, set the background color to olive */
@media screen and (max-width: 1536px) {
  .cards {
    justify-content: space-around;
  }
}
</style>
