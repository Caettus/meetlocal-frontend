


<template>
  <div>
    <button @click="getLocation">Give us your location</button>
    <h1>England is my city</h1>
    <input v-model="city" type="text" placeholder="City..." />
    <input v-model="country" type="text" placeholder="Country..." />
  </div>
</template>

<script>
const nominatimApiKey = 'https://nominatim.openstreetmap.org/search';

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
      const completeAddress = `${this.city}, ${this.country}`;

      axios
      .get(nominatimApiKey, {
        params: {
          q: completeAddress,
          format: 'json'
        }
      })
      .then((response))
    }
  }
};
</script>
