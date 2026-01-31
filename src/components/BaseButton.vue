<template>
  <button
    :class="['base-button', `btn-${variant}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'gray'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* primary */
.btn-primary {
  background-color: #4ade80;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #22c55e;
}

/* secondary */
.btn-secondary {
  background-color: #e5e5e5;
  color: #666;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #d4d4d4;
}

/* gray (from*
