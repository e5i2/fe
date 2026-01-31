<script setup>
import { useRouter } from 'vue-router';
import { login } from '@/services/auth';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const handleGoogleLogin = async () => {
    try {
        router.push({ 
                path: '/signup', 
                query: { email: "stella223" } 
            });
        const idToken = import.meta.env.VITE_GOOGLE_ID_TOKEN;
        if (!idToken) {
            console.error('Missing VITE_GOOGLE_ID_TOKEN');
            alert('구글 ID 토큰 설정이 필요합니다.');
            return;
        }

        console.log("token", idToken);
        const data = await login(idToken);
        console.log('Login successful', data);
        
        // Route based on registration status
        if (data.isRegister === false) {
            router.push({ 
                path: '/signup', 
                query: { email: data.email } 
            });
        } else {
            router.push('/main');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert(`로그인 중 오류가 발생했습니다: ${error.message}`);
    }
};
</script>

<template>
  <div class="login-container">
    <div class="logo-wrapper">
      <img src="@/assets/logo.svg" alt="RUN!PICASO Logo" class="logo" />
      <h1 class="brand-name">RUN!PICASO</h1>
    </div>
    
    <div class="button-wrapper">
      <BaseButton 
        label="구글 로그인으로 시작" 
        variant="primary" 
        @click="handleGoogleLogin"
      />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: var(--color-background-soft); /* Secondary color (Light Green) */
  padding: 0 24px;
  padding-bottom: 40px; /* Bottom spacing for button */
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Pushes content to center effectively */
}

.logo {
  width: 120px; /* Adjust based on actual SVG size */
  height: auto;
  margin-bottom: 16px;
}

.brand-name {
  font-family: 'Permanent Marker', cursive;
  font-size: 40px; /* Slightly larger for impact */
  font-weight: normal;
  color: #181818; /* Dark text */
  margin: 0;
}

.button-wrapper {
  width: 100%;
}
</style>
