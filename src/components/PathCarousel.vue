<script setup>
import { computed } from 'vue';
import { useRunningStore } from '@/stores/running';

const store = useRunningStore();
const paths = [
  { id: 'cat', name: '고양이 경로', icon: '🐱' },
  { id: 'dog', name: '강아지 경로', icon: '🐶' },
  { id: 'duck', name: '오리 경로', icon: '🦆' },
];

// Map store's selectedPath to carousel index
const currentIndex = computed(() => {
    return paths.findIndex(p => p.id === store.selectedPath) || 0; // Default to 0 if not found
});

const nextPath = () => {
  const nextIndex = (currentIndex.value + 1) % paths.length;
  store.setSelectedPath(paths[nextIndex].id);
};

const prevPath = () => {
  const prevIndex = (currentIndex.value - 1 + paths.length) % paths.length;
  store.setSelectedPath(paths[prevIndex].id);
};
</script>

<template>
  <div class="carousel-container">
    <button class="nav-btn prev" @click="prevPath">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="path-content">
      <div class="path-icon">{{ paths[currentIndex].icon }}</div>
      <div class="path-name">{{ paths[currentIndex].name }}</div>
    </div>
    
    <button class="nav-btn next" @click="nextPath">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: white; 
  padding: 8px 16px; /* Reduced vertical padding */
}

.path-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.path-icon {
  font-size: 56px; /* Larger icon */
  line-height: 1;
}

.path-name {
  font-size: 20px;
  font-weight: 700;
  color: #181818;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.nav-btn:hover {
  opacity: 0.7;
}
</style>
