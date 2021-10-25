<template>
  <div class="cta">
    <div class="container m-auto">
      <section class="download p-5">
        <div class="header text-3xl">Download our pdf</div>
        <div class="flex flex-row items-center max-w-7xl">
          Inspired by nature, follow technology, appreciate the classics. You
          can build modern & professional websites with Unika. The possibilities
          are just endless.
          <div
            class="
              download_btn
              flex
              p-5
              ml-8
              justify-center
              items-center
              bg-gray-500
              border-gray-500
              rounded-sm
            "
          >
            Download
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
};
</script>

<style scoped>
.cta {
  background-color: #f8f8f8;
}
.download_btn {
  height: 50px;
  width: 150px;
}

.download_btn:hover {
  cursor: pointer;
  filter: brightness(150%);
}
.download {
  justify-content: space-between;
}
/* On screens that are 1536px or less, set the background color to olive */
@media screen and (max-width: 1536px) {
  .download {
    justify-content: space-around;
  }
}
</style>
