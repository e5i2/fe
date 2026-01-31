import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRunningStore = defineStore('running', () => {
    // Run Settings
    const targetDistance = ref(5);
    const selectedPath = ref('cat'); // Default to cat path
    const currentLocation = ref(null);

    // Run State
    const isRunning = ref(false);
    const startTime = ref(null);

    // Actions
    function setTargetDistance(km) {
        if (km > 0 && km <= 42) { // Simple validation
            targetDistance.value = km;
        }
    }

    function setSelectedPath(pathId) {
        selectedPath.value = pathId;
    }

    function startRun() {
        isRunning.value = true;
        startTime.value = new Date();
        console.log('Run Started:', {
            distance: targetDistance.value,
            path: selectedPath.value,
            time: startTime.value
        });
    }

    function stopRun() {
        isRunning.value = false;
        startTime.value = null;
    }

    return {
        targetDistance,
        selectedPath,
        currentLocation,
        isRunning,
        startTime,
        setTargetDistance,
        setSelectedPath,
        startRun,
        stopRun
    };
});
