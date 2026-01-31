import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useRunningStore = defineStore('running', () => {
    // Run Settings
    const targetDistance = ref(5);
    const selectedPath = ref('cat'); // Default to cat path
    const currentLocation = ref(null);
    const isLocationFixed = ref(false); // Location confirmation state

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

    function toggleLocationFixed() {
        isLocationFixed.value = !isLocationFixed.value;
    }

    function resetLocationFixed() {
        isLocationFixed.value = false;
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

    // Watch for path changes and reset location fixed state
    watch(selectedPath, () => {
        isLocationFixed.value = false;
    });

    return {
        targetDistance,
        selectedPath,
        currentLocation,
        isLocationFixed,
        isRunning,
        startTime,
        setTargetDistance,
        setSelectedPath,
        toggleLocationFixed,
        resetLocationFixed,
        startRun,
        stopRun
    };
});
