<template>
  <section class="about p-5 text-center">
    <div class="header text-2xl font-bold">Our Skills</div>
    <section class="flex flex-row flex-wrap justify-center mt-16">
      <app-progress-bar title="Photoshop & Illustrator" percentage="20%" />
      <app-progress-bar title="WordPress" percentage="40%" />
      <app-progress-bar title="Html & Css" percentage="10%" />
      <app-progress-bar title="Javascript" percentage="90%" />
    </section>
  </section>
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
.header {
}

.subsection {
  max-width: 400px;
  margin: 0 auto;
}
</style>
