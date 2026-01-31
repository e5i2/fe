<template>
  <div class="progress-indicator">
    <span class="current">{{ currentStep }}</span>
    <span class="separator">/</span>
    <span class="total">{{ totalSteps }}</span>
  </div>
</template>

<script setup>
defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    default: 3
  }
});
</script>

<style scoped>
.progress-indicator {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
}

.current {
  font-weight: 700;
  color: var(--color-primary);
  font-size: 18px;
}

.separator {
  margin: 0 4px;
  color: #999;
}

.total {
  color: #999;
}
</style>
