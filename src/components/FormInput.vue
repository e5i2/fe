<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <div v-if="unit" class="input-with-unit">
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      />
      <span class="unit">{{ unit }}</span>
    </div>
    <input
      v-else
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-input"
    />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  unit: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: #e5e5e5;
  font-size: 15px;
  color: #333;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none;
  background-color: #d4d4d4;
}

/* Number input styling */
.form-input::-webkit-outer-spin-button,
.form-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-input[type=number] {
  -moz-appearance: textfield;
}

/* Input with unit */
.input-with-unit {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 8px;
  padding-right: 16px;
}

.input-with-unit .form-input {
  flex: 1;
  background-color: transparent;
  text-align: right;
}

.unit {
  font-size: 15px;
  color: #999;
  margin-left: 8px;
  min-width: 30px;
}
</style>
