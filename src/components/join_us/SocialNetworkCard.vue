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
        <a target="_blank" :href="social_network.url" class="zero-rotation">
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: social_network.icon }"
            class="text-white"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialNetworkCard",
  props: {
    social_network: Object,
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
  height: 35px;
  width: 35px;
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
