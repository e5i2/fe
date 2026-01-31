<template>
  <div class="physical-info-container">
    <div class="physical-info-content">
      <FormHeader title="사용자 정보" />
      <ProgressIndicator :current-step="3" />

      <div class="question-section">
        <h2 class="question">신체 정보를 알려주세요</h2>
        <p class="subtitle">외부에 공개하지 않아요</p>
      </div>

      <div class="form">
        <FormInput
          id="height"
          v-model.number="height"
          label="키"
          type="number"
          placeholder="165"
          unit="cm"
        />
        <FormInput
          id="weight"
          v-model.number="weight"
          label="몸무게"
          type="number"
          placeholder="50"
          unit="kg"
        />
      </div>

      <div class="button-container">
        <BaseButton variant="primary" @click="handleSubmit" :disabled="isSubmitting">
          {{ isSubmitting ? '제출 중...' : '완료' }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSignupStore } from '@/stores/signup';
import FormHeader from '@/components/FormHeader.vue';
import FormInput from '@/components/FormInput.vue';
import ProgressIndicator from '@/components/ProgressIndicator.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const signupStore = useSignupStore();

const height = ref(signupStore.height || '');
const weight = ref(signupStore.weight || '');
const isSubmitting = ref(false);

const handleSubmit = async () => {
  if (!height.value || height.value <= 0) {
    alert('키를 입력해주세요.');
    return;
  }

  if (!weight.value || weight.value <= 0) {
    alert('몸무게를 입력해주세요.');
    return;
  }

  isSubmitting.value = true;

  try {
    signupStore.setPhysicalInfo(height.value, weight.value);
    await signupStore.submitSignup();
    
    console.log('Signup successful!');
    router.push('/main');
  } catch (error) {
    console.error('Signup error:', error);
    alert(`회원가입에 실패했습니다: ${error.message}`);
  } finally {
    isSubmitting.value = false;
  }
};
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

.form {
  flex: 1;
}

.button-container {
  padding: 16px 0 100px 0;
  margin-top: auto;
}
</style>
