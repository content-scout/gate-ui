<template>
  <div class="info">
    <h1 class="info-title">{{title}}</h1>
    <p class="info-description">{{description}}</p>
    <div class="info-list">
      <div class="info-list__item">
        <p>Strobe Level<p>
        <p>{{strobe_level}}</p>
      </div>
      <div class="info-list__item">
        <p>Sound Average<p>
        <p>{{soundAvg}}</p>
      </div>
      <div class="info-list__item">
        <p>Rating Average<p>
        <p>{{ratingAvg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    strobeLevel: {
      type: Number,
    },
    soundAvg: {
      type: Number,
    },
    ratingAvg: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
}
</script>

<style>
</style>
