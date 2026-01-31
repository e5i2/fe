<script setup>
import { useRouter } from 'vue-router'
import badgeImage from '@/assets/cat-finish.svg'

const router = useRouter()

const handleHome = () => {
  router.push('/main')
}
</script>

<template>
  <div class="running-result-container">
    <div class="confetti-bg">
      <div class="top-nav">
        <span class="skip-link" @click="handleHome">다음에</span>
      </div>
      
      <div class="result-header">
        <h1 class="finish-title">러닝이 끝났어요</h1>
      </div>

      <div class="badge-section">
        <!-- Confetti elements for extra flair -->
        <div class="confetti c1"></div>
        <div class="confetti c2"></div>
        <div class="confetti c3"></div>
        <div class="confetti c4"></div>
        <div class="confetti c5"></div>
        <img :src="badgeImage" alt="Achievement Badge" class="achievement-badge" />
      </div>

      <div class="result-message">
        <p>귀여운 고양이 지도를</p>
        <p>얻었어요!</p>
      </div>
    </div>

    <div class="stats-card">
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
    </div>

    <div class="bottom-action">
      <button @click="handleHome" class="confirm-button">
        짱이에용
      </button>
    </div>
  </div>
</template>

<style scoped>
.running-result-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: #e8fbed;
  font-family: 'Inter', sans-serif;
  scrollbar-width: none; /* Hide scrollbar for cleaner look */
}
.running-result-container::-webkit-scrollbar {
  display: none;
}

.confetti-bg {
  flex-shrink: 0; /* Prevent shrinking */
  background-color: #e8fbed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
  position: relative;
  overflow: visible; /* Allow confetti to sprout out if needed */
}

.top-nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}

.skip-link {
  font-size: 16px;
  color: #a0a0a0;
  cursor: pointer;
  font-weight: 500;
  padding: 5px;
}

.finish-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 30px;
  z-index: 2;
}

.badge-section {
  width: 260px;
  height: 260px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
}

.confetti {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.c1 { top: -10px; left: -20px; background-color: #ff9d00; transform: rotate(45deg); }
.c2 { top: 20px; right: -40px; background-color: #ffcc00; transform: rotate(-15deg); }
.c3 { bottom: 40px; left: -50px; background-color: #a8e063; transform: rotate(10deg); }
.c4 { bottom: -10px; right: -20px; background-color: #56ccf2; transform: rotate(-30deg); }
.c5 { top: 80px; right: -60px; background-color: #f2994a; transform: rotate(20deg); }

.achievement-badge {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 255, 127, 0.4));
}

.result-message {
  text-align: center;
  z-index: 2;
  margin-bottom: 20px;
}

.result-message p {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 4px 0;
  line-height: 1.3;
}

.stats-card {
  flex: 1; /* Take up remaining space */
  background: white;
  padding: 40px 20px;
  border-radius: 30px 30px 0 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 10px;
  width: 100%;
  margin-bottom: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
  font-weight: 500;
}

.icon {
  font-size: 16px;
}

.bottom-action {
  padding: 20px;
  background: white;
  margin-top: auto; /* Push to bottom of stats-card if it has space */
}

.confirm-button {
  width: 100%;
  padding: 20px;
  background-color: #00FF7F;
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);
  transition: all 0.2s ease;
}

.confirm-button:active {
  transform: scale(0.97);
  box-shadow: 0 2px 8px rgba(0, 255, 127, 0.2);
}
</style>
