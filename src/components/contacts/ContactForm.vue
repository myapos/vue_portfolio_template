<template>
  <div class="flex flex-col">
    <div class="text-2xl text-left my-2">Write to us</div>

    <vee-form
      :validation-schema="schema"
      @submit="submit"
      class="flex flex-col"
    >
      <vee-field
        type="text"
        name="name"
        class="
          mt-2
          p-2
          opacity-50
          focus:outline-none focus:border-black
          bg-gray-900
          placeholder-white
          w-full
        "
        placeholder="Your Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
      <vee-field
        type="email"
        name="email"
        class="
          mt-2
          p-2
          opacity-50
          focus:outline-none focus:border-black
          bg-gray-900
          placeholder-white
          w-full
        "
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
      <vee-field
        type="text"
        name="subject"
        class="
          mt-2
          p-2
          opacity-50
          focus:outline-none focus:border-black
          bg-gray-900
          placeholder-white
          w-full
        "
        placeholder="Subject"
      />
      <ErrorMessage class="text-red-600" name="subject" />

      <vee-field
        type="textarea"
        as="textarea"
        name="message"
        :rows="num_of_rows"
        :cols="num_of_cols"
        class="
          mt-2
          p-2
          opacity-50
          focus:outline-none focus:border-black
          bg-gray-900
          placeholder-white
          w-full
        "
        placeholder="Your message"
      />
      <ErrorMessage class="text-red-600" name="message" />
      <button
        type="submit"
        class="
          block
          bg-gray-900
          text-white
          py-1.5
          px-3
          transition
          hover:bg-gray-600
          mt-2
          w-full
        "
      >
        Send
      </button>
    </vee-form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      schema: {
        email: "required|min:3|max:100|email",
        name: "required|min:3|max:100",
        subject: "required|min:3|max:100",
        message: "required|min:3|max:100",
      },
      num_of_cols: this.handleResize().num_of_cols,
      num_of_rows: this.handleResize().num_of_rows,
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
    submit(values) {
      console.log("values", values);
      alert(JSON.stringify(values));
    },
    handleResize() {
      let num_of_cols = 60;
      let num_of_rows = 4;
      if (screen.width < 1024) {
        num_of_cols = 40;
        num_of_rows = 3;
      }
      if (screen.width < 728) {
        num_of_cols = 20;
        num_of_rows = 2;
      }

      if (screen.width < 545) {
        num_of_cols = 1;
        num_of_rows = 1;
      }

      console.log("num_of_cols", num_of_cols, " num_of_rows", num_of_rows);

      this.num_of_cols = num_of_cols;
      this.num_of_rows = num_of_rows;

      return { num_of_cols, num_of_rows };
    },
  },
};
</script>

<style scoped>
.row {
  margin: 2px;
  font-size: 0.8rem;
}
</style>
