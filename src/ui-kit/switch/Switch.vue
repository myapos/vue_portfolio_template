<template>
  <label
    :for="id + '_button'"
    :class="{ active: isActive }"
    class="flex flex-row items-center toggle__button"
  >
    <sun-icon v-if="isActive" class="toggle__label h-5 w-5 text-yellow-200" />
    <moon-icon v-else class="toggle__label h-5 w-5 text-gray-500" />

    <input
      type="checkbox"
      :disabled="disabled"
      :id="id + '_button'"
      v-model="checkedValue"
      @click="toggle"
    />
    <span class="toggle__switch"></span>
  </label>
</template>

<script>
import { SunIcon } from "@heroicons/vue/solid";
import { MoonIcon } from "@heroicons/vue/solid";
import { ACTION_TYPES } from "../../store/actionTypes";
export default {
  name: "Switch",
  components: {
    SunIcon,
    MoonIcon,
  },
  props: {
    id: String,
    disabled: Boolean,
  },
  data() {
    return {
      currentState: this.disabled,
    };
  },
  computed: {
    isActive() {
      return this.currentState;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
      },
    },
  },
  methods: {
    toggle() {
      this.$store.dispatch(ACTION_TYPES.TOGGLE_THEME);
    },
  },
};
</script>

<style scoped>
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle__button .toggle__switch {
  display: inline-block;
  height: 12px;
  border-radius: 6px;
  width: 40px;
  background: #bfcbd9;
  box-shadow: inset 0 0 1px #bfcbd9;
  position: relative;
  margin-left: 10px;
  transition: all 0.25s;
}
.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}
.toggle__button .toggle__switch::after {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #4d4d4d;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
.active .toggle__switch {
  background: #adedcb;
  box-shadow: inset 0 0 1px #adedcb;
}
.active .toggle__switch::after,
.active .toggle__switch::before {
  transform: translateX(40px - 18px);
}
.active .toggle__switch::after {
  left: 23px;
  background: #53b883;
  box-shadow: 0 0 1px #53b883;
}
</style>
