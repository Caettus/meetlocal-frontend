<template>
  <div class="event-card">
    <div class="event-image">
      <img
        src="https://media.istockphoto.com/id/1412406500/nl/foto/friends-enjoying-every-song-the-band-plays.jpg?s=2048x2048&w=is&k=20&c=RIfPjPbasVkw_-m3LjPiwt_js1VRjX8M0oCew-PVxis="
        alt="Event Image"
      />
    </div>
    <div class="event-details">
      <h4 class="gatheringName">{{ event.gatheringName }}</h4>
      <p><strong>Description:</strong> {{ truncatedDescription }}</p>
      <div class="event-info">
        <p><strong>Organiser:</strong> {{ event.gatheringOrganiser }}</p>
        <p><strong>Category:</strong> {{ event.gatheringCategory }}</p>
      </div>
      <div class="event-info">
        <p><strong>Location:</strong> {{ event.gatheringLocation }}</p>
        <p><strong>Date:</strong> {{ event.gatheringDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      const limit = 100;
      const end = "...";
      const value = this.event.gatheringDescription;
      if (value.length > limit) {
        return value.substring(0, limit - end.length) + end;
      } else {
        return value;
      }
    },
  },
};
</script>

<style>
.event-card {
  width: 562px;
  height: 328px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 24px;
  margin-right: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.event-image img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

.event-details {
  margin-top: 20px;
  flex: 1;
}

.gatheringName {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.event-info {
  display: flex;
  justify-content: space-between;
}
</style>
