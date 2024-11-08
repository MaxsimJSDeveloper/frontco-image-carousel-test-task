<template>
  <div>
    <img :src="imageSrc" :alt="item_data.alt" width="300" height="200" />
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    item_data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return new URL(`../assets/img/${this.item_data.src}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style scoped>
/* Можно добавить стили для слайдов, если необходимо */
</style>
