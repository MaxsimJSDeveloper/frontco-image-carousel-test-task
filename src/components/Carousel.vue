<template>
  <div class="wrapper">
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

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";

export default {
  name: "Carousel",
  components: {
    CarouselItem,
    CarouselControls,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
      slidesPerPage: 1,
      selectedImages: [],
    };
  },
  computed: {
    carouselStyle() {
      const slideWidth = 100 / this.slidesPerPage;
      const translateX = -(this.currentSlideIndex * slideWidth) + "%";
      return {
        transform: `translateX(${translateX})`,
        transition: "transform 0.5s ease",
      };
    },
  },
  mounted() {
    this.updateSlidesPerPage();
    window.addEventListener("resize", this.updateSlidesPerPage);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSlidesPerPage);
  },
  methods: {
    updateSlidesPerPage() {
      this.slidesPerPage = window.innerWidth >= 768 ? 3 : 1;
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.images.length - this.slidesPerPage;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex < this.images.length - this.slidesPerPage) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
    },
    toggleSelection(imageAlt) {
      if (this.selectedImages.includes(imageAlt)) {
        this.selectedImages = this.selectedImages.filter(
          (alt) => alt !== imageAlt
        );
      } else {
        this.selectedImages.push(imageAlt);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 900px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

.carousel {
  display: flex;
  width: 100%;
  gap: 16px;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 calc(33.3% - 16px);
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}

.carousel-item.selected {
  transform: scale(1.1);
  opacity: 0.8;
}

.selected-images {
  margin-top: 20px;
}

.selected-images ul {
  list-style-type: none;
  padding: 0;
}

@media (max-width: 767px) {
  .wrapper {
    max-width: 300px;
  }

  .carousel-item {
    flex: 0 0 100%;
    margin-bottom: 16px;
  }
}
</style>
