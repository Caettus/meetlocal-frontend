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
        <button class="btn btn-primary" v-if="$route.path === '/feed'">New Event</button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

