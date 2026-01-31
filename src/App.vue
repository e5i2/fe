<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  background-color: white; /* Fallback */
  position: relative;
}
</style>
