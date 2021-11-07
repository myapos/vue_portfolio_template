<template>
  <div class="flex flex-col">
    <div class="text-2xl text-left my-2">Our Address</div>
    <div class="flex flex-row">
      <div class="mr-2">
        <font-awesome-icon icon="map-marker" />
      </div>
      <div class="text-left row">
        <div>{{ info.street }}</div>
        <div>{{ info.area }}</div>
        <div>{{ info.city }}, {{ info.country }}, {{ info.zip }}</div>
      </div>
    </div>

    <div class="flex flex-row row">
      <div class="mr-2"><font-awesome-icon icon="phone" /></div>
      <div>{{ info.tel }}</div>
    </div>
    <div class="flex flex-row row">
      <div class="mr-2"><font-awesome-icon icon="print" /></div>
      <div>{{ info.fax }}</div>
    </div>
    <div class="flex flex-row row">
      <div class="mr-2"><font-awesome-icon icon="envelope" /></div>
      <div>{{ info.email }}</div>
    </div>
    <div class="flex flex-row row">
      <div class="mr-2">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'skype' }" />
      </div>
      <div>{{ info.skype }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.row {
  margin: 2px;
  font-size: 0.8rem;
}
</style>
