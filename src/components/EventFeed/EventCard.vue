<template>
  <div class="event-card">
    <div class="event-image">
      <img
        :src="eventPhoto"
        alt="Event Image"
      />
    </div>
    <div class="event-details">
      <h4 class="gatheringName">{{ event.gatheringName }}</h4>
      <p><strong>Description:</strong> {{ event.gatheringDescription }}</p>
      <div class="event-info">
        <p><strong>Organiser:</strong> {{ event.gatheringOrganiser }}</p>
        <p><strong>Category:</strong> {{ event.gatheringCategory.charAt(0).toUpperCase() + event.gatheringCategory.slice(1).replace(/-/g, ' ') }}</p>
      </div>
      <div class="event-info">
        <p><strong>Location:</strong> {{ event.gatheringLocation }}</p>
      </div>
      <div class="event-info">
        <p><strong>Date:</strong> {{ formattedDate }}</p>
        <p><strong>Time:</strong> {{ formattedTime }}</p>
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
    formattedDateTime() {
      return new Date(this.event.gatheringDateTime);
    },
    formattedDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return this.formattedDateTime.toLocaleDateString('nl-NL', options);
    },
    formattedTime() {
      const options = { hour: 'numeric', minute: 'numeric', hour24: true };
      return this.formattedDateTime.toLocaleTimeString('nl-NL', options);
    },
    eventPhoto() {
      switch(this.event.gatheringCategory){
        case 'festival':
          return 'https://media.istockphoto.com/id/1412406500/nl/foto/friends-enjoying-every-song-the-band-plays.jpg?s=2048x2048&w=is&k=20&c=RIfPjPbasVkw_-m3LjPiwt_js1VRjX8M0oCew-PVxis=';
        case 'open-club-meeting':
          return 'https://media.istockphoto.com/id/1132786417/nl/foto/lezen-tijdens-boek-club.jpg?s=1024x1024&w=is&k=20&c=_ItwKTuYsWBal-zxhd9X3RP1y6ESJzl1jHGQyFc29OQ=';
        case 'convention':
          return 'https://media.istockphoto.com/id/499517325/nl/foto/a-man-speaking-at-a-business-conference.jpg?s=1024x1024&w=is&k=20&c=ryyZzSVQUwDbi86Qg0rRYEyD_F1kdI9vL2LUPorE3k0=';
        default:
          return 'https://media.istockphoto.com/id/1004077184/nl/foto/jonge-vrouwelijke-vrienden-genieten-in-nacht-festival.jpg?s=1024x1024&w=is&k=20&c=usmR1yCZB0Lcb8-nTbKx6RsMlzyWDWLCzzi5kdn1OCc=';
      }
    },
  },
};
</script>


<style>
.event-card {
  width: 562px;
  height: 428px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 3px;
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
  height: 150px;
  object-fit: cover;
  border-radius: 3px;
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