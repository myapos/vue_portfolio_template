<template>
  <div
    class="flex flex-col justify-center items-center dark:bg-gray-800 member"
    @mouseover="show = true"
    @mouseout="show = false"
  >
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeInUp"
    >
      <div class="flex flex-col items-center justify-center" v-if="show">
        <div class="m-5 flex flex-col">
          {{ member.username }}
          <div class="gender m-5">
            <font-awesome-icon
              v-if="member.gender == 'male'"
              icon="male"
              class="text-white"
              size="2x"
            />
            <font-awesome-icon
              v-if="member.gender == 'female'"
              icon="female"
              class="text-white"
              size="2x"
            />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    member: Object,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.member {
  top: 0;
  left: 0;
  width: 140px;
  height: 140px;
  opacity: 0;
}
.member:hover {
  opacity: 0.8;
}

.gender {
  margin: 0 auto;
}
</style>
