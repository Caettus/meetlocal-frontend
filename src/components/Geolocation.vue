<template>
  <div>
    <button @click="getLocation">Give us your location</button>
    <h1>My Geolocation</h1>
    <p>Latitude: {{ latitude }}</p>
    <p>Longitude: {{ longitude }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserLocation',
  data() {
    return {
      latitude: null,
      longitude: null
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        // Handle the case when geolocation is not supported by the browser.
        alert("Geolocation is not supported by this browser.");
      }
    },
    showPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }
  }
};
</script>
