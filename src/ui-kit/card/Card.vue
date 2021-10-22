<template>
  <div class="card flex flex-row">
    <div class="m-5">
      <div class="rotate-box-icon rotating">
        <div class="zero-rotation">
          <font-awesome-icon :icon="icon" color="#fff" size="2x" />
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
};
</script>

<style scoped>
.rotating {
  cursor: pointer;
  transition: transform 1s ease-in-out;
  transform: rotate(45deg) skew(10deg, 10deg);
  border: 2px solid #1f2937;
  background-color: #1f2937;
  padding: 2px;
  background-clip: content-box;
  height: 50px;
  width: 50px;
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
</style>
