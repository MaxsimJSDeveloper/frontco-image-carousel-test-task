<template>
  <div :class="styles.carouselControls">
    <button :class="styles.btn" @click="onPrevClick">
      <svg :class="[styles.arrowLeft, styles.arrow]" width="16" height="16">
        <use href="../../assets/symbol-defs.svg#icon-arrow-right"></use>
      </svg>
    </button>
    <button :class="styles.btn" @click="onNextClick">
      <svg :class="styles.arrow" width="16" height="16">
        <use href="../../assets/symbol-defs.svg#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
</template>

<script setup>
import styles from "./CarouselControls.module.css";

const props = defineProps({
  onPrevClick: {
    type: Function,
    required: true,
  },
  onNextClick: {
    type: Function,
    required: true,
  },
});
</script>
