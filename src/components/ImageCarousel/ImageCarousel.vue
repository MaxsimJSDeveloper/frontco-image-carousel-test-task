<template>
  <div :class="styles.imageCarousel">
    <div :class="styles.carouselContainer">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="[
          styles.carouselItem,
          { [styles.active]: currentIndex === index },
        ]"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <CarouselControls :onPrevClick="prevImage" :onNextClick="nextImage" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import styles from "./ImageCarousel.module.css";
import CarouselControls from "../CarouselControls/CarouselControls.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const currentIndex = ref(0);

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}
</script>
