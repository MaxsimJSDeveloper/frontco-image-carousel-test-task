<template>
  <div
    :class="$style.wrapper"
    @wheel="handleWheel"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div :class="$style.carousel" :style="carouselStyle">
      <CarouselItem
        v-for="item in images"
        :key="item.id"
        :item_data="item"
        :class="[
          $style['carousel-item'],
          { [$style.selected]: selectedImages.includes(item.alt) },
        ]"
        @click="toggleSelection(item.alt)"
      />
    </div>
    <CarouselControls :onPrevClick="prevSlide" :onNextClick="nextSlide" />
    <div :class="$style['selected-images']">
      <h3>Selected Images:</h3>
      <ul>
        <li v-for="(alt, index) in selectedImages" :key="index">
          {{ alt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useCarousel } from "./carouselLogic.js";
import CarouselItem from "../CarouselItem.vue";
import CarouselControls from "../CarouselControls.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const {
  selectedImages,
  carouselStyle,
  updateSlidesPerPage,
  prevSlide,
  nextSlide,
  toggleSelection,
} = useCarousel(props);

let debounceTimeout;
function handleWheel(event) {
  if (debounceTimeout) cancelAnimationFrame(debounceTimeout);
  debounceTimeout = requestAnimationFrame(() => {
    event.deltaY > 0 ? nextSlide() : prevSlide();
  });
}

function handleKeydown(event) {
  if (event.key === "ArrowLeft") prevSlide();
  else if (event.key === "ArrowRight") nextSlide();
}

onMounted(() => {
  updateSlidesPerPage();
  window.addEventListener("resize", updateSlidesPerPage);
  window.addEventListener("wheel", handleWheel, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSlidesPerPage);
  window.removeEventListener("wheel", handleWheel);
});
</script>

<style module>
@import "./carousel.module.css";
</style>
