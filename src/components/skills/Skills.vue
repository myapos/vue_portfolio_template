<template>
  <div class="cta">
    <div class="container m-auto">
      <section class="skills p-5 text-center">
        <div class="header text-2xl font-bold">Our Skills</div>
        <section class="flex flex-row flex-wrap mt-16 progress_bars_skills">
          <app-progress-bar title="Photoshop & Illustrator" percentage="20%" />
          <app-progress-bar title="WordPress" percentage="40%" />
          <app-progress-bar title="Html & Css" percentage="10%" />
          <app-progress-bar title="Javascript" percentage="90%" />
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import AppProgressBar from "../../ui-kit/progress_bars/ProgressBar.vue";
export default {
  name: "Skills",
  components: {
    AppProgressBar,
  },
};
</script>

<style scoped>
.progress_bars_skills {
  justify-content: space-between;
}
/* On screens that are 1536px or less, set the background color to olive */
@media screen and (max-width: 1536px) {
  .progress_bars_skills {
    justify-content: space-around;
  }
}
</style>
