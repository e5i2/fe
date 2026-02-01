<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRunningStore } from '@/stores/running';
import MapDisplay from '../components/MapDisplay.vue';
import PathCarousel from '../components/PathCarousel.vue';
import DistanceControl from '../components/DistanceControl.vue';
import BaseButton from '../components/BaseButton.vue';

const router = useRouter();
const store = useRunningStore();

const buttonLabel = computed(() => {
  return store.isLocationFixed ? '러닝 시작하기' : '위치 고정하기';
});

const handleButtonClick = () => {
  if (!store.isLocationFixed) {
    // Step 1: Fix location
    store.toggleLocationFixed();
  } else {
    // Step 2: Start running
    if (!store.targetDistance || !store.selectedPath) {
      alert("거리와 경로를 확인해주세요.");
      return;
    }
    store.startRun();
    router.push('/running-info');
  }
};

const goToBadges = () => {
  router.push('/badges');
};
</script>

<template>
  <div class="main-container">
    <header>
      <h1 class="header-logo">RUN!PICASO</h1>
      <div class="date-display">2026.02.01</div>
      <button class="badge-icon" @click="goToBadges">
        <img src="@/assets/rosette.svg" alt="Badges" />
      </button>
    </header>


    <main>
      <div class="content-wrapper">
        <div class="content-card">
          <div class="map-area">
            <MapDisplay />
            <div class="search-bar">위치 찾기</div>
          </div>
          <div class="carousel-area">
            <PathCarousel />
          </div>
        </div>
        <div class="distance-control">
          <DistanceControl />
        </div>
      </div>
      <div class="controls-section">
        <BaseButton 
          :label="buttonLabel" 
          variant="primary" 
          @click="handleButtonClick"
          class="start-btn"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url('@/assets/background.png') no-repeat center center/cover;
  color: white;
  padding: 0;
  overflow: hidden;
}

header {
  padding: 16px 24px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
}

.header-logo {
  font-family: 'Permanent Marker', cursive;
  font-size: 36px;
  margin: 0;
  margin-bottom: 4px;
  align-self: flex-start; /* Left align logo */
}

.date-display {
  font-size: 28px;
  font-weight: 600;
  opacity: 1;
  align-self: center; /* Center align date below logo */
  margin-top: 12px;
}

.badge-icon {
  position: absolute;
  top: 40px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  transition: transform 0.2s;
}

.badge-icon:hover {
  transform: scale(1.1);
}

.badge-icon img {
  width: 100%;
  height: 100%;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px 32px; /* Removed top padding as header has it */
  gap: 20px;
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 20px;
  margin-right: 20px;
  min-height: 0; /* Important for nested flex scroll/sizing */
}

.content-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 24px;
  margin-bottom: 12px;
  margin-top: -4px;
  flex-grow: 0; /* Don't stretch indefinitely */
  min-height: 400px;
}

.map-area {
  width: 100%;
  height: 300px; /* Specific height instead of flex-grow */
  max-height: 40vh; /* Limit relative to viewport */
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.distance-control {
  margin-bottom: 16px;
}

/* Overlay search placeholder */
.search-bar {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #888;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 80%;
  text-align: center;
  z-index: 1000; /* Above Leaflet */
}

.carousel-area {
  padding-bottom: 8px;
}

.controls-section {
  /* margin-top: auto;  Removed as wrapper takes space now */
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
