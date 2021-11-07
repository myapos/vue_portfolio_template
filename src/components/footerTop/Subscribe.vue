<template>
  <div class="max-w-md">
    <vee-form :validation-schema="schema" @submit="submit">
      <div class="flex flex-row flex-wrap justify-start items-center">
        <div class="mr-3">
          <vee-field
            type="email"
            name="email"
            class="
              block
              w-full
              py-1.5
              px-3
              my-2
              text-gray-800
              border border-gray-300
              transition
              duration-500
              focus:outline-none focus:border-black
            "
            placeholder="Enter Email"
          />
          <ErrorMessage class="text-red-600" name="email" />
        </div>
        <button
          type="submit"
          class="
            block
            bg-gray-400
            text-white
            py-1.5
            px-3
            transition
            hover:bg-gray-900
          "
        >
          Submit
        </button>
      </div>
      <div class="flex flex-row flex-wrap mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </vee-form>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
  props: {
    email: String,
  },
  data() {
    return {
      schema: {
        email: "required|min:3|max:100|email",
      },
    };
  },
  methods: {
    submit(values) {
      console.log("values", values);
      alert(JSON.stringify(values));
    },
  },
};
</script>

<style scoped></style>
