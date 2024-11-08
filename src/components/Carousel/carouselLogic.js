import { ref, computed } from "vue";

export function useCarousel(props) {
  const currentSlideIndex = ref(0);
  const slidesPerPage = ref(1);
  const selectedImages = ref([]);

  const carouselStyle = computed(() => {
    const slideWidth = 100 / slidesPerPage.value;
    return {
      transform: `translateX(-${currentSlideIndex.value * slideWidth}%)`,
      transition: "transform 0.5s ease",
    };
  });

  function updateSlidesPerPage() {
    const width = window.innerWidth;
    slidesPerPage.value = width >= 1200 ? 3 : width >= 768 ? 2 : 1;
  }

  function prevSlide() {
    currentSlideIndex.value =
      (currentSlideIndex.value - 1 + props.images.length) % props.images.length;
  }

  function nextSlide() {
    currentSlideIndex.value =
      (currentSlideIndex.value + 1) % props.images.length;
  }

  function toggleSelection(imageAlt) {
    const index = selectedImages.value.indexOf(imageAlt);
    if (index === -1) selectedImages.value.push(imageAlt);
    else selectedImages.value.splice(index, 1);
  }

  return {
    currentSlideIndex,
    slidesPerPage,
    selectedImages,
    carouselStyle,
    updateSlidesPerPage,
    prevSlide,
    nextSlide,
    toggleSelection,
  };
}
