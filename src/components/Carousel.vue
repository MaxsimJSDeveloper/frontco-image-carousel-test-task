<template>
  <div class="wrapper">
    <div class="carousel" :style="carouselStyle">
      <CarouselItem
        v-for="(item, index) in images"
        :key="item.id"
        :item_data="item"
        class="carousel-item"
      />
    </div>

    <CarouselControls :onPrevClick="prevSlide" :onNextClick="nextSlide" />
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
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
      slidesPerPage: 1, // Default to 1 slide per page
    };
  },
  computed: {
    carouselStyle() {
      const slideWidth = 100 / this.slidesPerPage; // Adjust slide width based on slides per page
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
      this.slidesPerPage = window.innerWidth >= 768 ? 3 : 1; // 3 slides on desktop, 1 slide on mobile
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.images.length - this.slidesPerPage; // Loop back to last slide
      }
    },
    nextSlide() {
      if (this.currentSlideIndex < this.images.length - this.slidesPerPage) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0; // Loop back to first slide
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 900px; /* Adjust the max-width for desktop */
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

.carousel {
  display: flex;
  width: 100%;
}

.carousel-item {
  flex: 0 0 33.33%; /* Adjust the flex-basis for desktop */
}

@media (max-width: 767px) {
  .wrapper {
    max-width: 300px; /* Adjust the max-width for mobile */
  }

  .carousel-item {
    flex: 0 0 100%; /* One slide per page on mobile */
  }
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 1;
}
</style>
