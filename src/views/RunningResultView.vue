<template>
  <div class="result-container">
    <div class="result-content">
      <button class="share-btn" @click="handleShare">
        <img :src="shareIconUrl" alt="Share" />
      </button>
      <!-- Title with emojis -->
      <div class="title-section">
        <h1 class="title">🎉러닝이 끝났어요✨</h1>
      </div>

      <!-- Path Icon -->
      <div class="icon-section">
        <img :src="pathIconSrc" alt="Path Icon" class="path-icon" />
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

const shareIconUrl = new URL('@/assets/paperplane.svg', import.meta.url).href;

const handleShare = () => {
  // Sharing logic placeholder
  if (navigator.share) {
    navigator.share({
      title: 'Run! Picaso',
      text: '나의 러닝 기록을 확인해보세요!',
      url: window.location.href,
    }).catch(console.error);
  } else {
    alert('결과 공유 기능이 이 브라우저에서는 지원되지 않습니다.');
  }
};
</script>

<style scoped>
.result-container {
  margin-top: 24px;
  min-height: 100vh;
  background: url('@/assets/congratulations.gif') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
}

.result-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 48px 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.title-section {
  text-align: center;
  margin-bottom: 24px;
}

.title {
  font-size: clamp(24px, 6vw, 32px);
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.icon-section {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.path-icon {
  width: 120px;
  height: 120px;
  display: block;
}



.share-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 1001; /* Above map and gradient */
  padding: 8px;
}

.share-btn img {
  width: 24px;
  height: 24px;
}

.completion-message {
  text-align: center;
  font-size: clamp(18px, 4.5vw, 24px);
  font-weight: 600;
  color: #333;
  margin: 0 0 24px 0;
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
  padding: 16px 0;
  margin-top: auto;
}

.finish-btn {
  background: #00FF5E !important;
  color: #000 !important;
}
</style>
