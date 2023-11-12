<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Vorige</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Volgende</span>
          </button>
        </div>
        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="text-center mb-4">Vind evenementen bij jou in de buurt</h2>
            <Geolocation />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Geolocation from "@/components/Location/Geolocation.vue";
export default {
  name: "HomePage",
  components: {
    Geolocation,
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
.carousel-item img {
  height: 300px;
  object-fit: cover;
}
</style>
