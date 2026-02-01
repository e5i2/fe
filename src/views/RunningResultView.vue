<template>
  <div class="result-container">
    <div class="result-content">
      <!-- Title with emojis -->
      <div class="title-section">
        <h1 class="title">🎉러닝이 끝났어요✨</h1>
      </div>

      <!-- Path Icon -->
      <div class="icon-section">
        <div class="icon-wrapper">
          <img :src="pathIconSrc" alt="Path Icon" class="path-icon" />
        </div>
      </div>

      <!-- Completion Message -->
      <p class="completion-message">{{ completionMessage }}</p>

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
          <div class="stat-value">8.70</div>
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

      <!-- Finish Button -->
      <div class="button-container">
        <BaseButton variant="primary" @click="finish" class="finish-btn">끝내줘요</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRunningStore } from '@/stores/running';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const store = useRunningStore();

const pathIconMap = {
  'cat': new URL('@/assets/cat-finish.svg', import.meta.url).href,
  'dog': new URL('@/assets/dog-finish.svg', import.meta.url).href,
  'duck': new URL('@/assets/duck-finish.svg', import.meta.url).href
};

const pathMessages = {
  'cat': '귀여운 고양이 지도를 완성하였어요!',
  'dog': '귀여운 강아지 지도를 완성하였어요!',
  'duck': '귀여운 오리 지도를 완성하였어요!'
};

const pathIconSrc = computed(() => {
  return pathIconMap[store.selectedPath] || pathIconMap['cat'];
});

const completionMessage = computed(() => {
  return pathMessages[store.selectedPath] || pathMessages['cat'];
});

const finish = () => {
  store.stopRun();
  store.resetLocationFixed();
  router.push('/badges');
};
</script>

<style scoped>
.result-container {
  min-height: 100vh;
  background: url('@/assets/congratulations.gif') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
}

.result-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

/* Title Section */
.title-section {
  text-align: center;
  margin-bottom: 24px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.emoji-decoration {
  font-size: 32px;
}

/* Icon Section */
.icon-section {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.icon-wrapper {
  background: white;
  border-radius: 50%;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.path-icon {
  width: 120px;
  height: 120px;
  display: block;
}

/* Completion Message */
.completion-message {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 32px 0;
}

/* Stats Grid */
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
  font-size: 32px;
  font-weight: 700;
  color: #000;
}

.stat-label {
  font-size: 24px;
  color: #666;
  font-weight: 500;
}

/* Button */
.button-container {
  padding: 16px 0;
  margin-top: auto;
}

.finish-btn {
  background: #00FF5E !important;
  color: #000 !important;
}
</style>
