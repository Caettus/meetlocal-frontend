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
      <p><strong>Description:</strong> {{ event.gatheringDescription }}</p>
      <p><strong>Location:</strong> {{ event.gatheringLocation }}</p>
      <p><strong>Date:</strong> {{ event.gatheringDate }}</p>
      <p><strong>Organiser:</strong> {{ event.gatheringOrganiser }}</p>
      <p><strong>Category:</strong> {{ event.gatheringCategory }}</p>
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
};
</script>

<style>
.event-card {
  width: 320px;
  height: auto;
  min-height: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 24px;
  margin-right: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event-image img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  transition: transform 0.3s ease-in-out; /* Add a smooth hover effect */
}

.event-image img:hover {
  transform: scale(1.1); /* Enlarge the image on hover */
}

.event-details {
  padding: 20px;
}

.gatheringName {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Style other elements as needed */
</style>
