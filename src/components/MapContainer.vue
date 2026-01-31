<script setup>
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const mapContainer = ref(null);
const map = ref(null);

onMounted(() => {
  if (mapContainer.value) {
    // Initialize map centered on Seoul (default)
    map.value = L.map(mapContainer.value).setView([37.5665, 126.9780], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map.value);

    // Try to get actual user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.value.setView([latitude, longitude], 15);
        
        // Add marker for current location
        L.marker([latitude, longitude]).addTo(map.value)
          .bindPopup('현재 위치')
          .openPopup();
      });
    }
  }
});
</script>

<template>
  <div class="map-wrapper" ref="mapContainer"></div>
</template>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
}
</style>
