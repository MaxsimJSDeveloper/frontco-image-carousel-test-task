<template>
  <div id="app">
    <ImageCarousel :images="images" />
  </div>
</template>

<script>
import ImageCarousel from "./components/ImageCarousel/ImageCarousel.vue";

export default {
  name: "App",
  components: {
    ImageCarousel,
  },
  data() {
    return {
      images: [
        { src: "./src/assets/img/chocolate-ice-cream.webp", alt: "Image 1" },
        { src: "./src/assets/img/experimental-ice-cream.webp", alt: "Image 2" },
        { src: "./src/assets/img/ice-cream.webp", alt: "Image 3" },
      ],
    };
  },
};
</script>
