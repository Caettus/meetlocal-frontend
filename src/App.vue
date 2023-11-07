<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
      <!-- ... (existing navigation code) ... -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <!-- ... (existing navigation items) ... -->
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success btn-light" type="submit">Search</button>
        </form>
        <!-- Conditional rendering of "New Event" button -->
        <button class="btn btn-primary" @click="createNewEvent" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="$route.path === '/feed'">New Event</button>
      </div>

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
                    <input type="text" class="form-control" id="nameInput">
                    <label for="nameInput">Event Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="locationInput">
                    <label for="locationInput">Location</label>
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="date" class="form-control" id="dateInput">
                    <label for="dateInput">Date</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="time" class="form-control" id="timeInput">
                    <label for="timeInput">Time</label>
                  </div>
                </div>
              </div>

              <div class="form-floating">
                <textarea class="form-control" id="descriptionInput" rows="5"></textarea>
                <label for="descriptionInput">Description</label>
              </div>

              <div class="form-floating">
                <select class="form-select" id="categoryInput">
                  <option value="" disabled selected>Select a category</option>
                  <option value="category1">Festival</option>
                  <option value="category2">Convention</option>
                  <option value="category3">Open Club Meeting</option>
                </select>
                <label for="categoryInput">Category</label>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Create Event</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    createNewEvent() {
      // Your logic to handle the creation of a new event goes here
    }
  },
};
</script>
