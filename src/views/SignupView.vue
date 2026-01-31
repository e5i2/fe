<template>
  <div class="signup-container">
    <div class="signup-content">
      <FormHeader title="회원가입" />
      
      <div class="welcome-section">
        <h2 class="welcome-title">환영합니다!</h2>
        <p class="welcome-text">
          간단한 정보만 입력하시면<br />
          바로 시작하실 수 있어요
        </p>
      </div>

      <div class="button-container">
        <BaseButton variant="primary" @click="handleStart">시작하기</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useSignupStore } from '@/stores/signup';
import FormHeader from '@/components/FormHeader.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const route = useRoute();
const signupStore = useSignupStore();

// Initialize email from query params
const email = route.query.email;
if (email) {
  signupStore.setEmail(email+"@gmail.com");
}

const handleStart = () => {
  if (!signupStore.email) {
    alert('이메일 정보가 없습니다. 다시 로그인해주세요.');
    router.push('/login');
    return;
  }
  router.push('/userinfo');
};
</script>

<style scoped>
.signup-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.signup-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.welcome-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 40px 0;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
}

.welcome-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.button-container {
  padding: 16px 0 100px 0;
  margin-top: auto;
}
</style>
