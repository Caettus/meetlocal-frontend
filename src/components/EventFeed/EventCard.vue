<template>
  <div class="event-card">
    <h4>{{ event.gatheringName }}</h4>
    <p>{{ event.gatheringDescription }}</p>

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
}


</script>

<style>
.event-card {
  width: 320px;
  height: auto;
  min-height: 200px; /* Verminderde minimale hoogte */
  background: #f5f5f5; /* Zachte grijze achtergrond */
  border-radius: 20px;
  padding: 20px; /* Verhoogde padding voor inhoud */
  margin-bottom: 24px;
  margin-right: 10px;
  transition: transform 0.3s ease; /* Soepelere schaalanimatie */
  cursor: pointer;
  color: #333; /* Donkere tekstkleur */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtiele schaduw */
}

.event-card:hover {
  transform: scale(1.05); /* Vergroten bij hover */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Verhoogde schaduw bij hover */
}

.event-card > .gatheringName {
  margin: 0;
  font-size: 18px; /* Groot lettertype voor de titel */
  font-weight: bold;
  margin-bottom: 10px; /* Ruimte onder de titel */
}

.event-card > .gatheringDescription {
  font-size: 14px; /* Kleinere lettergrootte voor beschrijving */
  line-height: 1.4;
}

.event-card > .date {
  font-size: 16px; /* Lettergrootte voor datum of tijd */
  font-weight: bold;
  margin-top: 10px; /* Ruimte boven de datum */
  color: #007BFF; /* Accentkleur voor de datum */
}
</style>

