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
        { id: 1, src: "cat-1.webp", alt: "Cute cat sitting on the floor" },
        { id: 2, src: "cat-2.webp", alt: "Playful cat with a toy" },
        { id: 3, src: "cat-3.webp", alt: "Relaxed cat lounging in the sun" },
        { id: 4, src: "cat-4.webp", alt: "Fluffy cat with bright eyes" },
        { id: 5, src: "cat-5.webp", alt: "Cat with a curious expression" },
        { id: 6, src: "cat-6.webp", alt: "Small kitten exploring the world" },
        { id: 7, src: "cat-7.webp", alt: "Friendly cat posing for a photo" },
        { id: 8, src: "cat-8.webp", alt: "Cat relaxing in a cozy spot" },
      ],
    };
  },
};
</script>
