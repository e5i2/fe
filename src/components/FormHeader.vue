<template>
  <div class="form-header">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.form-header {
  margin-top: 40px;
  margin-bottom: 32px;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--color-primary);
  display: inline-block;
  min-width: 200px;
}
</style>
