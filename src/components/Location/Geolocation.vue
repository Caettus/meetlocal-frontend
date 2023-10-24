<template>
  <div class="GetLocationPage">
    <button @click="getLocation">Give us your location</button>
    <h1>England is my city</h1>
    <input v-model="city" type="text" placeholder="City..." />
    <input v-model="country" type="text" placeholder="Country..." />
  </div>
</template>

<script>
const nominatimApiKey = 'https://nominatim.openstreetmap.org/search';

export default {
  name: 'GeoLocation',
  data() {
    return {
      latitude: null,
      longitude: null,
      city: '',
      country: '',
    };
  },
  methods: {
    getLocation() {
      const completeAddress = `${this.city}, ${this.country}`;

      fetch(`${nominatimApiKey}?q=${completeAddress}&format=json`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.error('Geocoding failed. Address not found.');
          }
        })
        .then((data) => {
          if (data.length > 0) {
            this.latitude = data[0].lat;
            this.longitude = data[0].lon;

            console.log('Latitude', data[0].lat);
            console.log('Longitude', data[0].lon);

            this.postLocation();
          } else {
            console.error('Geocoding failed. Address not found.');
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    },
    postLocation() {
      fetch('https://localhost:7031/api/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: this.latitude,
          longitude: this.longitude,
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Location saved');
            // Navigate to the 'test' route when the response is successful
            this.$router.push({ name: 'test' });
          } else {
            console.error('Location not saved');
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    },
  },
};
</script>
