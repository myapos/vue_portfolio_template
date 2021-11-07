<template>
  <footer
    class="
      bg-white
      dark:bg-gray-800 dark:text-purple-50
      pt-4
      pb-8
      xl:pt-8
      flex flex-col flex-wrap
      text-xs
      justify-center
      items-center
    "
  >
    <div class="flex flex-row flex-wrap justify-center m-1">
      Copyright © 2021 - Inspired by the design of
      <a
        href="https://www.free-css.com/assets/files/free-css-templates/preview/page270/unika/"
        target="_blank"
        class="mx-1 text-gray-400"
        >Veronika Poljakova</a
      >
      & Developed by
      <a
        href="https://myapos.oncrete.gr"
        target="_blank"
        class="mx-1 text-gray-400"
      >
        Myron Apostolakis
      </a>
    </div>
    <div class="flex flex-row flex-wrap items-center m-1">
      Powered by
      <a href="https://vuejs.org/" target="_blank">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'vuejs' }"
          size="2x"
          class="text-green-400 ml-2"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
