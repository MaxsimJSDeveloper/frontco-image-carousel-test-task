<template>
  <div
    class="wrapper"
    @wheel="handleWheel"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div class="carousel" :style="carouselStyle">
      <CarouselItem
        v-for="item in images"
        :key="item.id"
        :item_data="item"
        :class="[
          'carousel-item',
          { selected: selectedImages.includes(item.alt) },
        ]"
        @click="toggleSelection(item.alt)"
      />
    </div>
    <CarouselControls :onPrevClick="prevSlide" :onNextClick="nextSlide" />
    <div class="selected-images">
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
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentSlideIndex = ref(0);
const slidesPerPage = ref(1);
const selectedImages = ref([]);

const carouselStyle = computed(() => {
  const slideWidth = 100 / slidesPerPage.value;
  const translateX = -(currentSlideIndex.value * slideWidth) + "%";
  return {
    transform: `translateX(${translateX})`,
    transition: "transform 0.5s ease",
  };
});

function updateSlidesPerPage() {
  if (window.innerWidth >= 1200) {
    slidesPerPage.value = 3;
  } else if (window.innerWidth >= 768) {
    slidesPerPage.value = 2;
  } else {
    slidesPerPage.value = 1;
  }
}

function prevSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + props.images.length) % props.images.length;
}

function nextSlide() {
  // Перевіряємо, чи є ще елементи для перегляду
  if (currentSlideIndex.value < props.images.length - 1) {
    currentSlideIndex.value += 1;
  } else {
    // Скидаємо індекс на початок, коли досягнуто кінця галереї
    currentSlideIndex.value = 0;
  }
}

function toggleSelection(imageAlt) {
  const index = selectedImages.value.indexOf(imageAlt);
  if (index === -1) {
    selectedImages.value.push(imageAlt);
  } else {
    selectedImages.value.splice(index, 1);
  }
}

function handleKeydown(event) {
  if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "ArrowRight") {
    nextSlide();
  }
}

function handleWheel(event) {
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
}

onMounted(() => {
  updateSlidesPerPage();
  window.addEventListener("resize", updateSlidesPerPage);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSlidesPerPage);
});
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  outline: none; /* Remove focus outline for accessibility */
}

.carousel {
  display: flex;
  width: 100%;
  gap: 16px;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 calc(33.3% - 16px); /* 3 items on larger screens */
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}

.carousel-item.selected {
  opacity: 0.8;
  transform: scale(
    1.05
  ); /* Злегка збільшує зображення, не змінюючи його пропорції */
}

.selected-images {
  margin-top: 20px;
}

.selected-images ul {
  list-style-type: none;
  padding: 0;
}

@media (max-width: 767px) {
  .carousel {
    gap: 0;
  }

  .wrapper {
    max-width: 300px;
  }

  .carousel-item {
    flex: 0 0 100%;
    margin-bottom: 16px; /* Ensure spacing between items on small screens */
  }
}
</style>
