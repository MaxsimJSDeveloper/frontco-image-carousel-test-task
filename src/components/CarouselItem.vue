<template>
  <div class="carousel-item">
    <img
      :src="imageSrc"
      :alt="item_data.alt"
      width="300"
      height="200"
      class="carousel-image"
    />
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
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
