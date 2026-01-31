import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { signup } from '@/services/auth';

export const useSignupStore = defineStore('signup', () => {
    // State
    const email = ref('');
    const nickname = ref('');
    const gender = ref('');
    const height = ref(0);
    const weight = ref(0);

    // Getters
    const isComplete = computed(() => {
        return email.value &&
            nickname.value &&
            gender.value &&
            height.value > 0 &&
            weight.value > 0;
    });

    const currentStep = computed(() => {
        if (!nickname.value) return 1;
        if (!gender.value) return 2;
        if (!height.value || !weight.value) return 3;
        return 3;
    });

    // Actions
    function setEmail(value) {
        email.value = value;
    }

    function setNickname(value) {
        nickname.value = value;
    }

    function setGender(value) {
        gender.value = value;
    }

    function setPhysicalInfo(heightValue, weightValue) {
        height.value = heightValue;
        weight.value = weightValue;
    }

    async function submitSignup() {
        if (!isComplete.value) {
            throw new Error('모든 정보를 입력해주세요.');
        }

        const data = {
            email: email.value,
            nickname: nickname.value,
            gender: gender.value,
            height: height.value,
            weight: weight.value
        };

        return await signup(data);
    }

    function reset() {
        email.value = '';
        nickname.value = '';
        gender.value = '';
        height.value = 0;
        weight.value = 0;
    }

    return {
        // State
        email,
        nickname,
        gender,
        height,
        weight,
        // Getters
        isComplete,
        currentStep,
        // Actions
        setEmail,
        setNickname,
        setGender,
        setPhysicalInfo,
        submitSignup,
        reset
    };
});
