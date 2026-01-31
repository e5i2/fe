<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <!-- Header -->
      <div class="header">
        <h1 class="title">사용자 정보</h1>
      </div>

      <!-- Form -->
      <div class="form">
        <div class="form-group">
          <label for="name">이름</label>
          <input 
            id="name"
            v-model="formData.name" 
            type="text" 
            placeholder="이름을 입력해주세요"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="phone">전화번호</label>
          <input 
            id="phone"
            v-model="formData.phone" 
            type="tel" 
            placeholder=""
            class="form-input"
          />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="button-container">
        <BaseButton variant="secondary" @click="handleSubmit">다음</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const formData = ref({
  name: '',
  phone: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Add your submit logic here
}
</script>

<style scoped>
.user-info-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.user-info-content {
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

.form-input {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: #e5e5e5;
  font-size: 15px;
  color: #333;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none;
  background-color: #d4d4d4;
}

/* Button Container */
.button-container {
  padding: 16px 0 100px 0;
  margin-top: auto;
}
</style>
