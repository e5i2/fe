<template>
  <div class="gender-selection-container">
    <div class="gender-selection-content">
      <!-- Header -->
      <div class="header">
        <h1 class="title">사용자 정보</h1>
      </div>

      <!-- Question Section -->
      <div class="question-section">
        <h2 class="question">성별이 어떻게 되시나요?</h2>
        <p class="subtitle">의무에 공개하지 않아요</p>
      </div>

      <!-- Button Container -->
      <div class="button-container">
        <BaseButton variant="primary" @click="selectGender('male')">남성</BaseButton>
        <BaseButton variant="secondary" @click="selectGender('female')">여성</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()

const selectGender = (gender) => {
  console.log('Selected gender:', gender)
  // Add your navigation or data handling logic here
  // router.push('/next-page')
}
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

/* Header */
.header {
  margin-top: 40px;
  margin-bottom: 32px;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  padding-bottom: 12px;
  border-bottom: 3px solid #4ade80;
  display: inline-block;
  min-width: 200px;
}

/* Question Section */
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

/* Button Container */
.button-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-bottom: 100px;
}
</style>
