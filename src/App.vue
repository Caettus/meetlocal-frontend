<template>
  <div class="app">
    <nav class="navbar">
      <button class="meetLocalButton">
        <router-link class="nav-link" to="/">MeetLocal</router-link>
      </button>

      <!-- Conditional rendering of "New Event" button -->
      <button class="btn btn-primary" @click="createNewEvent" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="$route.path === '/feed'">New Event</button>
    </nav>

    <!-- New Event Popup -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create a new event!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="text" class="form-control" id="nameInput" v-model="eventName">
                  <label for="nameInput">Event Name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="text" class="form-control" id="locationInput" v-model="eventLocation">
                  <label for="locationInput">Location</label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="date" class="form-control" id="dateInput" v-model="eventDate">
                  <label for="dateInput">Date</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="time" class="form-control" id="timeInput" v-model="eventTime">
                  <label for="timeInput">Time</label>
                </div>
              </div>
            </div>

            <div class="form-floating">
              <textarea class="form-control" id="descriptionInput" rows="5" v-model="eventDescription"></textarea>
              <label for="descriptionInput">Description</label>
            </div>

            <div class="form-floating">
              <select class="form-select" id="categoryInput" v-model="eventCategory">
                <option value="" disabled selected>Select a category</option>
                <option value="category1">Festival</option>
                <option value="category2">Convention</option>
                <option value="category3">Open Club Meeting</option>
              </select>
              <label for="categoryInput">Category</label>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input type="text" class="form-control" id="organiserInput" v-model="eventOrganiser">
                <label for="organiserInput">Event Organiser</label>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="createNewEvent">Create Event</button>
          </div>
        </div>
      </div>
    </div>
    <!-- New Event Popup END -->

    <router-view></router-view>
  </div>
</template>


<script>
import "@fontsource/poppins";

const nominatimApiKey = 'https://nominatim.openstreetmap.org/search';
export default {
  name: 'App',
  data() {
    return {
      eventName: '',
      eventLocation: '',
      eventDate: '',
      eventTime: '',
      eventDescription: '',
      eventCategory: '',
      eventOrganiser: '',
    };
  },
  methods: {

    createNewEvent() {
      // this.checkLocation();

      const eventData ={
        GatheringName: this.eventName,
        GatheringDescription: this.eventDescription,
        GatheringOrganiser: this.eventOrganiser,
        GatheringDate: this.eventDate,
        GatheringTime: this.eventTime,
        GatheringCategory: this.eventCategory,
        GatheringLocation: this.eventLocation,
      };


      fetch('https://localhost:7031/api/gathering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Event created successfully!');
            this.$router.push('/feed');
          } else {
            console.error('An error occurred. Event not created.');
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    },
    checkLocation() {
      const completeAddress = `${this.city}, ${this.country}`;

      fetch(`${nominatimApiKey}?q=${completeAddress}&format=json`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              console.error('Geocoding failed. Address not found.');
            }
          })
          .then((data) => {
            if (data.length > 0) {
              this.latitude = data[0].lat;
              this.longitude = data[0].lon;

              console.log('Latitude', data[0].lat);
              console.log('Longitude', data[0].lon);

              this.postLocation();
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


<style>
.meetLocalButton {
  background: none;
  color: #E3C93C;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border: none;
}

.navbar {
  background: transparent;
}


</style>