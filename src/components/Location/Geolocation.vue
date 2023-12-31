<template>
  <div class="GetLocationPage">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <input v-model="city" type="text" placeholder="City..." id="cityInput"/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <input v-model="country" type="text" placeholder="Country..." id="countryInput"/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="d-grid gap-2 mt-3">
          <button class="btn btn-primary" type="button" @click="getLocation" id="locationSubmitButton">Ga verder</button>
        </div>
      </div>
    </div>
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
            this.$router.push({ name: 'feed' });
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
