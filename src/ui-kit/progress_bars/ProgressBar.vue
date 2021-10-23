<template>
  <div>
    <div class="font-bold">{{ title }}</div>
    <div class="progress">
      <div class="progress_bar" :style="{ width: percentage }">
        {{ percentage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    title: String,
    percentage: String,
  },
};
</script>

<style scoped>
.progress {
  border: 3px solid #363940;
  background-color: transparent;
  overflow: visible;
  height: auto;
  min-width: 800px;
  margin: 5px;
}

.progress_bar {
  background-color: #676d75;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 768px) {
  .progress {
    min-width: 200px;
  }
}
</style>
