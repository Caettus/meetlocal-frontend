<template>
  <div class="background">
  </div>
  <div class="geolocation">
    <Geolocation />
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
.background {
  background-image: url('@/assets/backgroundimage.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
}
.geolocation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

