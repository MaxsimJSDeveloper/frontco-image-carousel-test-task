<template>
  <div id="app">
    <Carousel :images="images" />
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";

export default {
  name: "App",
  components: {
    Carousel,
  },
  data() {
    return {
      images: [
        { id: 1, src: "chocolate-ice-cream.webp", alt: "Image 1" },
        { id: 2, src: "experimental-ice-cream.webp", alt: "Image 2" },
        { id: 3, src: "ice-cream.webp", alt: "Image 3" },
      ],
    };
  },
};
</script>
