<template>
    <div class="container">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<script>
import EventCard from "@/components/EventFeed/EventCard.vue";
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
};
</script>
