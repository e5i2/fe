<script setup>
import { useRouter } from 'vue-router'
import mascotImage from '@/assets/cat-finish.svg'

const router = useRouter()

const handleStop = () => {
  router.push('/main')
}
</script>

<template>
  <div class="running-info-container">
    <div class="map-placeholder">
      <div class="map-overlay"></div>
    </div>

    <div class="info-content">
      <div class="mascot-wrapper">
        <img :src="mascotImage" alt="Mascot" class="mascot-img" />
      </div>

      <h1 class="page-title">러닝 정보</h1>

      <div class="status-indicator">
        <div class="progress-bar-segment">
          <div class="segment active"></div>
          <div class="segment active"></div>
          <div class="segment active"></div>
        </div>
        <span class="status-text">목표를 진행중입니다</span>
        <div class="progress-bar-segment">
          <div class="segment active"></div>
          <div class="segment"></div>
          <div class="segment"></div>
        </div>
      </div>

      <div class="main-timer">
        00:50
      </div>

      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">11242</div>
          <div class="stat-label">
            <span class="icon">👣</span>
            단계
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">0:50:00</div>
          <div class="stat-label">
            <span class="icon">⏱️</span>
            기간
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">133</div>
          <div class="stat-label">
            <span class="icon">❤️</span>
            bpm
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">8.70</div>
          <div class="stat-label">
            <span class="icon">👣</span>
            km
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">375</div>
          <div class="stat-label">
            <span class="icon">🔥</span>
            칼로리
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">8:01</div>
          <div class="stat-label">
            <span class="icon">🏃</span>
            분/km
          </div>
        </div>
      </div>

      <button @click="handleStop" class="stop-button">
        중단하기
      </button>
    </div>
  </div>
</template>

<style scoped>
.running-info-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  scrollbar-width: none;
}
.running-info-container::-webkit-scrollbar {
  display: none;
}

.map-placeholder {
  flex-shrink: 0;
  height: 35vh;
  background-color: #f0f4f0;
  background-image: linear-gradient(135deg, #e0f2f1 25%, transparent 25%), 
                    linear-gradient(225deg, #e0f2f1 25%, transparent 25%), 
                    linear-gradient(45deg, #e0f2f1 25%, transparent 25%), 
                    linear-gradient(315deg, #e0f2f1 25%, #f0f4f0 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 20px 20px;
  position: relative;
}

.map-overlay {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: linear-gradient(to top, white, transparent);
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  margin-top: -40px;
  z-index: 1;
}

.mascot-wrapper {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}

.mascot-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.progress-bar-segment {
  display: flex;
  gap: 4px;
}

.segment {
  width: 12px;
  height: 6px;
  border-radius: 2px;
  background-color: #f0f0f0;
}

.segment.active {
  background-color: #00FF7F;
}

.status-text {
  font-size: 16px;
  color: #888;
}

.main-timer {
  font-size: 84px;
  font-weight: 700;
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 10px;
  width: 100%;
  margin-bottom: 50px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
}

.stop-button {
  width: 100%;
  padding: 18px;
  background-color: #00FF7F;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);
}
</style>
