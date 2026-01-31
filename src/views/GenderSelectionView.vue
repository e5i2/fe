<template>
  <div class="gender-selection-container">
    <div class="gender-selection-content">
      <FormHeader title="사용자 정보" />
      <ProgressIndicator :current-step="2" />

      <div class="question-section">
        <h2 class="question">성별이 어떻게 되시나요?</h2>
        <p class="subtitle">외부에 공개하지 않아요</p>
      </div>

      <div class="button-container">
        <BaseButton variant="primary" @click="selectGender('MALE')">남성</BaseButton>
        <BaseButton variant="secondary" @click="selectGender('FEMALE')">여성</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useSignupStore } from '@/stores/signup';
import FormHeader from '@/components/FormHeader.vue';
import ProgressIndicator from '@/components/ProgressIndicator.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const signupStore = useSignupStore();

const selectGender = (gender) => {
  signupStore.setGender(gender);
  router.push('/physical');
};
</script>

<style scoped>
.gender-selection-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.gender-selection-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.question-section {
  margin-bottom: 40px;
}

.question {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #999;
  font-weight: 400;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-bottom: 100px;
}
</style>
