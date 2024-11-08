<template>
  <div class="carousel-controls">
    <button class="nav-button prev" @click="onPrevClick">
      <svg width="16" height="16">
        <use href="../assets/symbol-defs.svg#icon-arrow-right"></use>
      </svg>
    </button>
    <button class="nav-button next" @click="onNextClick">
      <svg width="16" height="16">
        <use href="../assets/symbol-defs.svg#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
</template>

<script setup>
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

<style scoped>
.carousel-controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  z-index: 1;
}

.nav-button {
  margin-top: 20px;
  background-color: #b9b9b9;
  border: solid 1px #333;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev {
  transform: rotate(180deg);
}
</style>
