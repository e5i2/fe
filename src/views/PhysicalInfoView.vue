<template>
  <div class="physical-info-container">
    <div class="physical-info-content">
      <!-- Header -->
      <div class="header">
        <h1 class="title">사용자 정보</h1>
      </div>

      <!-- Question Section -->
      <div class="question-section">
        <h2 class="question">신체 정보를 알려주세요</h2>
        <p class="subtitle">의무에 공개하지 않아요</p>
      </div>

      <!-- Form -->
      <div class="form">
        <div class="form-group">
          <label for="height">키</label>
          <div class="input-with-unit">
            <input 
              id="height"
              v-model="formData.height" 
              type="number" 
              class="form-input"
              placeholder="165"
            />
            <span class="unit">cm</span>
          </div>
        </div>

        <div class="form-group">
          <label for="weight">몸무게</label>
          <div class="input-with-unit">
            <input 
              id="weight"
              v-model="formData.weight" 
              type="number" 
              class="form-input"
              placeholder="50"
            />
            <span class="unit">kg</span>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="button-container">
        <BaseButton variant="primary" @click="handleSubmit">다음</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const formData = ref({
  height: '',
  weight: ''
})

const handleSubmit = () => {
  console.log('Physical info submitted:', formData.value)
  // Add your submit logic here
}
</script>

<style scoped>
.physical-info-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.physical-info-content {
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

/* Form */
.form {
  flex: 1;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.input-with-unit {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 8px;
  padding-right: 16px;
}

.form-input {
  flex: 1;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-size: 15px;
  color: #333;
  text-align: right;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none;
}

.form-input::-webkit-outer-spin-button,
.form-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-input[type=number] {
  -moz-appearance: textfield;
}

.unit {
  font-size: 15px;
  color: #999;
  margin-left: 8px;
  min-width: 30px;
}

/* Button Container */
.button-container {
  padding: 16px 0 100px 0;
  margin-top: auto;
}
</style>
