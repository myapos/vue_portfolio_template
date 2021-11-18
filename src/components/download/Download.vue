<template>
  <div class="bg-white dark:bg-gray-400 cta">
    <div class="container m-auto">
      <section class="download p-5">
        <div class="header text-3xl">{{ $t("Download.download_our_pdf") }}</div>
        <div class="flex flex-row items-center max-w-7xl p-5">
          {{ $t("Download.text") }}
          <div
            class="
              download_btn
              flex flex-wrap
              p-2
              ml-8
              justify-center
              items-center
              text-gray-50
              bg-gray-500
              border-gray-500
              rounded-sm
            "
            @click="download"
          >
            {{ $t("Download.download") }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return {
      url: "sample.pdf",
    };
  },
  methods: {
    download() {
      // window.open(this.url);
      fetch(this.url)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename you want
          a.download = "sample.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          alert("Your file has downloaded!"); // or you know, something with better UX...
        })
        .catch(() => alert("Oh no!"));
    },
  },
};
</script>

<style scoped>
.cta {
  background-color: #f8f8f8;
}
.download_btn {
  height: auto;
  width: auto;
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
