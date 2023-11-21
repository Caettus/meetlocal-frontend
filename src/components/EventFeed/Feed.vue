<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Search gatherings...">
    <button class="btn btn-primary" @click="searchGatherings">Search</button>
    <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventFeed/EventCard.vue';
import EventService from '@/services/EventService.js';
export default {
  name: 'EventFeed',
  components: {
    EventCard
  },
  data() {
    return {
      events: [],
      search: ''
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => event.GatheringName && event.GatheringName.includes(this.search));
    }
  },
  methods: {
    getGatherings() {
      EventService.getGatherings()
          .then(response => {
            console.log(response)
            this.events = response;
            console.log(response.events)
          })
          .catch(error => {
            console.log(error);
          });
    },
    searchGatherings() {
      EventService.searchGatherings(this.search)
          .then(response => {
            this.events = response;
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  created() {
    this.getGatherings();
  }
};
</script>
