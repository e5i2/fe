<script setup>
import { useRunningStore } from '@/stores/running';
import { storeToRefs } from 'pinia';

const store = useRunningStore();
const { targetDistance: distance } = storeToRefs(store);

const increase = () => store.setTargetDistance(distance.value + 1);
const decrease = () => store.setTargetDistance(distance.value - 1);
</script>

<template>
  <div class="distance-wrapper">
    <button class="control-btn minus" @click="decrease">−</button>
    <div class="distance-display-box">
      {{ distance }}km
    </div>
    <button class="control-btn plus" @click="increase">+</button>
  </div>
</template>

<style scoped>
.distance-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* Space between elements */
  width: 100%;
  padding: 0 16px;
}

.distance-display-box {
  flex-grow: 1; /* Occupy center space */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #FFFFFF 0%, var(--color-primary) 150%);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #181818;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.control-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(180deg, #FFFFFF 0%, var(--color-primary) 100%);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: #333;
  transition: transform 0.1s;
}

.control-btn:active {
  transform: scale(0.95);
}
</style>
