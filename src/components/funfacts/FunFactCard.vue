<template>
  <div class="fun_fact_container flex flex-col flex-wrap">
    <div class="p-5">
      <font-awesome-icon :icon="icon" class="text-white" :size="icon_size" />
    </div>
    <div class="number">{{ number }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "FunFactCard",
  props: {
    icon: String,
    number: String,
    description: String,
  },
  mounted() {
    this.calculateIconSize();
    window.addEventListener("resize", this.calculateIconSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calculateIconSize);
  },
  data() {
    return {
      icon_size: this.calculateIconSize(),
    };
  },
  methods: {
    calculateIconSize() {
      const { width } = screen;
      let size = "3x";
      if (width < 1280) {
        size = "2x";
      }

      this.icon_size = size;
      return size;
    },
  },
};
</script>

<style scoped>
.number {
  font-size: 1.5rem;
}
.description {
  font-size: 1.2rem;
}
.fun_fact_container {
  padding: 1.3rem;
}
/* On screens that are 1536px or less, set the background color to olive */
@media screen and (max-width: 1536px) {
  .number {
    font-size: 1.2rem;
  }
  .description {
    font-size: 0.7rem;
  }

  .fun_fact_container {
    padding: 0.8rem;
  }
}

@media screen and (max-width: 640px) {
  .number {
    font-size: 0.6rem;
  }
  .description {
    font-size: 0.5rem;
  }

  .fun_fact_container {
    padding: 0.2rem;
  }
}
</style>
