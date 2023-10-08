<template>
  <div>
    <button @click="getLocation">Give us your location</button>
    <h1>England is my city</h1>
    <input v-model="city" type="text" placeholder="City..." />
    <input v-model="country" type="text" placeholder="Country..." /> 
    // v-model zet de userantwoord in een variabele
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios here

const nominatimApiKey = 'https://nominatim.openstreetmap.org/search';

export default {
  name: 'UserLocation',
  data() {
    return {
      latitude: null,
      longitude: null,
      city: '', // Add city and country properties here
      country: '',
    };
  },
  methods: {
    getLocation() {
      const completeAddress = `${this.city}, ${this.country}`;

      axios
        .get(nominatimApiKey, {
          params: {
            q: completeAddress,
            format: 'json',
          },
        })
        .then((response) => {
            // the response word automatisch meegegeven door de axios library nadat the API call is gemaakt
          if (response.data.length > 0) {
            this.latitude = response.data[0].lat;
            this.longitude = response.data[0].lon;

            console.log('Latitude', response.data[0].lat);
            console.log('Longitude', response.data[0].lon);
          } else {
            console.error('Geocoding failed. Address not found.');
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    },
  },
};
</script>

