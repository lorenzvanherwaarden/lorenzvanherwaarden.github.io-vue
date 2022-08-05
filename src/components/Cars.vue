<template>
  <div class="cars" id="cars"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import CarsService from '../services/CarsService'

let carsService

onMounted(() => {
  const carsEl = document.getElementById('cars')

  carsService = new CarsService(carsEl)
  carsService.createCar()
  carsService.createCar()
  carsService.createCar()
  carsService.createCar()
  carsService.createCar()
  carsService.createCar()

  carsService.start()
})
</script>

<style>
.cars {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}

.cars img {
  position: absolute;
  width: 50px;
}
</style>
