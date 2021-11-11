<template>
  <div class="card flex flex-row flex-wrap">
    <div class="m-5">
      <div class="rotate-box-icon rotating">
        <div class="zero-rotation">
          <font-awesome-icon :icon="icon" color="#fff" :size="size" />
        </div>
      </div>
    </div>
    <div class="flex flex-col m-5">
      <div class="text-justify">{{ header }}</div>
      <div class="text-justify">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: String,
    header: String,
    icon: String,
  },
  data() {
    return {
      size: this.handleResize().size,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      let size = "2x";

      if (screen.width < 1024) {
        size = "2x";
      }
      if (screen.width < 728) {
        size = "1x";
      }

      if (screen.width < 545) {
        size = "1x";
      }

      this.size = size;
      return { size };
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 640px;
}
.rotating {
  cursor: pointer;
  transition: transform 1s ease-in-out;
  transform: rotate(45deg);
  border: 2px solid #1f2937;
  background-color: #1f2937;
  padding: 2px;
  background-clip: content-box;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rotating:hover {
  transform: rotateZ(90deg);
  filter: brightness(150%);
}

.zero-rotation {
  transform: rotateZ(-45deg);
}
.zero-rotation:hover {
  transform: rotateZ(-90deg);
}

/* On screens that are 1536px or less, set the background color to olive */
@media screen and (max-width: 728px) {
  .rotating {
    height: 30px;
    width: 30px;
  }
}
</style>
