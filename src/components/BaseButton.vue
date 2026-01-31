<template>
  <button
    :class="['base-button', `btn-${variant}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
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
  display: flex;
  align-items: center;
  justify-content: center;
}

/* primary */
.btn-primary {
  background-color: var(--color-primary);
  color: #181818;
}

.btn-primary:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(1, 253, 92, 0.3);
}

/* secondary */
.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.btn-secondary:hover:not(:disabled) {
  background-color: #dcfce7;
}

/* gray */
.btn-gray {
  background-color: var(--color-gray);
  color: #666;
}

.btn-gray:hover:not(:disabled) {
  background-color: #d4d4d4;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
