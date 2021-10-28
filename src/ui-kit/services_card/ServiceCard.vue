<template>
  <div
    class="
      service_card
      flex flex-col
      justify-center
      align-center
      text-center
      m-5
    "
  >
    <div class="p-5 m-auto">
      <div class="rotate-box-icon rotating">
        <div class="zero-rotation">
          <font-awesome-icon :icon="icon" color="#fff" size="2x" />
        </div>
      </div>
    </div>
    <div class="service_title font-bold">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: String,
    text: String,
    icon: String,
  },
};
</script>

<style scoped>
.service_card {
  max-width: 320px;
}
.rotating {
  cursor: pointer;
  transition: transform 1s ease-in-out;
  transform: rotate(45deg);
  border: 2px solid #1f2937;
  background-color: #1f2937;
  padding: 2px;
  background-clip: content-box;
  height: 70px;
  width: 70px;
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
