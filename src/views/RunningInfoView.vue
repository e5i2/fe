<template>
  <div class="running-info-container">
    <div class="running-info-content">
      <h1 class="title">러닝 정보</h1>
      
      <div class="info-section">
        <div class="info-item">
          <span class="label">목표 거리</span>
          <span class="value">{{ store.targetDistance }}km</span>
        </div>
        
        <div class="info-item">
          <span class="label">선택 경로</span>
          <span class="value">{{ pathName }}</span>
        </div>
        
        <div class="info-item">
          <span class="label">시작 시간</span>
          <span class="value">{{ formattedStartTime }}</span>
        </div>
      </div>

      <div class="button-container">
        <BaseButton variant="primary" @click="goBack">돌아가기</BaseButton>
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

const pathMap = {
  'cat': '고양이 경로',
  'dog': '강아지 경로',
  'duck': '오리 경로'
};

const pathName = computed(() => pathMap[store.selectedPath] || store.selectedPath);

const formattedStartTime = computed(() => {
  if (!store.startTime) return '-';
  return new Date(store.startTime).toLocaleTimeString('ko-KR');
});

const goBack = () => {
  router.push('/main');
};
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
  padding: 40px 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 40px;
  text-align: center;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
}

.label {
  font-size: 16px;
  font-weight: 600;
  color: #666;
}

.value {
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.button-container {
  padding: 16px 0 40px 0;
  margin-top: auto;
}
</style>
