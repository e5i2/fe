<template>
  <div class="map-display">
    <img :src="mapSrc" alt="Map" class="map-image" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRunningStore } from '@/stores/running';

const store = useRunningStore();

const mapSrc = computed(() => {
  if (!store.isLocationFixed) {
    return new URL('@/assets/pure-map.svg', import.meta.url).href;
  }
  
  const pathMap = {
    'cat': new URL('@/assets/cat-map.svg', import.meta.url).href,
    'dog': new URL('@/assets/dog-map.svg', import.meta.url).href,
    'duck': new URL('@/assets/duck-map.svg', import.meta.url).href
  };
  
  return pathMap[store.selectedPath] || new URL('@/assets/pure-map.svg', import.meta.url).href;
});
</script>

<style scoped>
.map-display {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f5f5f5;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}
</style>
