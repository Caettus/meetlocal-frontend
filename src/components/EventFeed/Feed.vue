<template>
    <div class="container">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<script>
import EventCard from "@/components/EventFeed/EventCard.vue";
import EventService from "@/services/EventService.js";
export default {
  name: 'EventFeed',
  components: {
          EventCard
  },
  data() {
    return {
      events: null
    };
  },
  created() {
    EventService.getGatherings()
      .then(response => {
        console.log(response)
        this.events = response;
        console.log(response.events)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
