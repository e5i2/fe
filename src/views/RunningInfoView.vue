<template>
  <div class="running-info-container">
    <div class="running-info-content">
      <!-- Map with Path Icon -->
      <div class="map-section">
        <img :src="mapSrc" alt="Running Map" class="map-image" />
        <div class="map-gradient"></div>
        <div class="path-icon-overlay">
          <img :src="logoUrl" alt="Path Icon" class="path-icon" />
        </div>
      </div>

      <!-- Title Section -->
      <div class="title-section">
        <h1 class="title">러닝 정보</h1>
        <p class="subtitle">목표를 진행중입니다</p>
      </div>

      <!-- Timer -->
      <div class="timer">{{ formattedTimer }}</div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">11242</div>
          <div class="stat-label">👣 단계</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">0:50:00</div>
          <div class="stat-label">🕐 기간</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">133</div>
          <div class="stat-label">❤️ bpm</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">3.20</div>
          <div class="stat-label">⚡ km</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">375</div>
          <div class="stat-label">🔥 칼로리</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">8:01</div>
          <div class="stat-label">⏱️ 평균 페이스</div>
        </div>
      </div>

      <!-- Stop Button -->
      <div class="button-container">
        <BaseButton variant="primary" @click="stopRunning" class="stop-btn">종료하기</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRunningStore } from '@/stores/running';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const store = useRunningStore();

const elapsedSeconds = ref(0);
let timerInterval = null;

const pathIconMap = {
  'cat': new URL('@/assets/cat-finish.svg', import.meta.url).href,
  'dog': new URL('@/assets/dog-finish.svg', import.meta.url).href,
  'duck': new URL('@/assets/duck-finish.svg', import.meta.url).href
};

const logoUrl = new URL('@/assets/logo.svg', import.meta.url).href;

const mapSrc = computed(() => {
  const pathMap = {
    'cat': new URL('@/assets/cat-map.svg', import.meta.url).href,
    'dog': new URL('@/assets/dog-map.svg', import.meta.url).href,
    'duck': new URL('@/assets/duck-map.svg', import.meta.url).href
  };
  return pathMap[store.selectedPath] || new URL('@/assets/pure-map.svg', import.meta.url).href;
});

const pathIconSrc = computed(() => {
  return pathIconMap[store.selectedPath] || pathIconMap['cat'];
});

const formattedTimer = computed(() => {
  const minutes = Math.floor(elapsedSeconds.value / 60);
  const seconds = elapsedSeconds.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

const stopRunning = () => {
  router.push('/running-result');
};

onMounted(() => {
  timerInterval = setInterval(() => {
    elapsedSeconds.value++;
  }, 1000);
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>

<style scoped>
.running-info-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.running-info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.map-section {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fixed-path-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: auto;
  opacity: 0.8;
  pointer-events: none;
}

.map-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
  pointer-events: none;
}

.path-icon-overlay {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
}

.path-icon {
  width: 60px;
  height: 60px;
  display: block;
}

.title-section {
  text-align: center;
  padding: 24px 16px 16px;
}

.title {
  font-size: clamp(24px, 6vw, 32px);
  font-weight: 700;
  color: #000;
  margin: 0 0 4px 0;
}

.subtitle {
  font-size: clamp(14px, 3.5vw, 20px);
  color: #8e9b92ff;
  margin: 0;
  font-weight: 500;
}

.timer {
  text-align: center;
  font-size: clamp(40px, 12vw, 52px);
  font-weight: 700;
  color: #000;
  padding: 12px 0;
  font-variant-numeric: tabular-nums;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  margin-bottom: 16px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 700;
  color: #000;
}

.stat-label {
  font-size: clamp(14px, 3vw, 24px);
  color: #666;
  font-weight: 500;
}

.button-container {
  padding: 16px;
  margin-top: auto;
}

.stop-btn {
  background: #00FF5E !important;
  color: #000 !important;
}
</style>
