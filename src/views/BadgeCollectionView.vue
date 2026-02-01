<template>
  <div class="badge-container">
    <div class="badge-content">
      <!-- Title -->
      <div class="title-section">
        <h1 class="title">뱃지 지도</h1>
        <div class="emoji-decoration">🎉✨🎊</div>
      </div>

      <!-- Badge Card -->
      <div class="badge-card">
        <div class="badge-grid">
          <div v-for="badge in badges" :key="badge.id" class="badge-item">
            <div v-if="badge.earned" class="badge-earned">
              <img :src="badge.icon" alt="Badge" class="badge-icon" />
            </div>
            <div v-else class="badge-locked">
              <span class="lock-icon">?</span>
            </div>
          </div>
        </div>

        <!-- Badge Count -->
        <div class="badge-count">
          <p class="count-label">획득 뱃지</p>
          <h2 class="count-value">{{ earnedCount }}개</h2>
        </div>
      </div>

      <!-- Button -->
      <div class="button-container">
        <BaseButton variant="primary" @click="goBack" class="collect-btn">더 모으러 갈래요</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const badges = ref([
  { 
    id: 'cat', 
    icon: new URL('@/assets/cat-finish.svg', import.meta.url).href,
    earned: true 
  },
  { 
    id: 'dog', 
    icon: new URL('@/assets/dog-finish.svg', import.meta.url).href,
    earned: true 
  },
  { 
    id: 'duck', 
    icon: new URL('@/assets/duck-finish.svg', import.meta.url).href,
    earned: false 
  },
  { id: 'locked1', earned: false },
  { id: 'locked2', earned: false },
  { id: 'locked3', earned: false }
]);

const earnedCount = computed(() => {
  return badges.value.filter(b => b.earned).length;
});

const goBack = () => {
  router.push('/main');
};
</script>

<style scoped>
.badge-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #E8F5E9 0%, #FFF9C4 100%);
  display: flex;
  flex-direction: column;
}

.badge-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

/* Title Section */
.title-section {
  text-align: center;
  margin-bottom: 32px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.emoji-decoration {
  font-size: 28px;
}

/* Badge Card */
.badge-card {
  background: white;
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

/* Badge Grid */
.badge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.badge-item {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-earned {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.badge-locked {
  width: 100%;
  height: 100%;
  background: #E0E0E0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-icon {
  font-size: 32px;
  color: #9E9E9E;
  font-weight: 700;
}

/* Badge Count */
.badge-count {
  text-align: center;
  padding-top: 24px;
  border-top: 2px solid #F5F5F5;
}

.count-label {
  font-size: 16px;
  color: #666;
  margin: 0 0 8px 0;
}

.count-value {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0;
}

/* Button */
.button-container {
  padding: 16px 0;
  margin-top: auto;
}

.collect-btn {
  background: #00FF5E !important;
  color: #000 !important;
}
</style>
