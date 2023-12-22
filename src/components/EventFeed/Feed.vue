<template>
  <div class="container">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
      <button class="btn btn-outline-success btn-light" type="submit">Search</button>
    </form>
    <div class="row">
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" class="col" />
    </div>
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
      search: '',
    };
  },
  computed: {
    filteredEvents() {
      if (this.search) {
        return this.events.filter(event => event.gatheringName.includes(this.search));
      } else {
        return this.events;
      }
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
  },
  created() {
    this.getGatherings();
  }
};
</script>
