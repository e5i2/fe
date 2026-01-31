<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'gray'].includes(value)
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button :class="['base-btn', `btn-${variant}`]">
    {{ label }}
  </button>
</template>

<style scoped>
.base-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  color: #000;
}

.base-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.base-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Variants */
.btn-primary {
  background-color: var(--color-primary);
}

.btn-primary:hover {
  /* Slightly darker green or reuse same color with opacity change if preferred. 
     Using a hardcoded slight darken as placeholder or keeping same */
  filter: brightness(0.95);
}

.btn-gray {
  background-color: var(--color-gray);
  color: #333; /* Darker text for gray button */
}

.btn-gray:hover {
  filter: brightness(0.95);
}
</style>
