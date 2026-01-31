<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <FormHeader title="사용자 정보" />
      <ProgressIndicator :current-step="1" />

      <div class="form">
        <FormInput
          id="nickname"
          v-model="nickname"
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
      </div>

      <div class="button-container">
        <BaseButton variant="primary" @click="handleSubmit">다음</BaseButton>
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

const nickname = ref(signupStore.nickname || '');

const handleSubmit = () => {
  if (!nickname.value.trim()) {
    alert('닉네임을 입력해주세요.');
    return;
  }

  signupStore.setNickname(nickname.value.trim());
  router.push('/gender');
};
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

.form {
  flex: 1;
}

.button-container {
  padding: 16px 0 100px 0;
  margin-top: auto;
}
</style>
