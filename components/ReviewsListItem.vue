<template>
  <div class="review-list-item">
    <p class="review-list-item__content">{{review}}</p>
    <div class="review-list-item__tags">
      <div class="review-list-item__tag">
        <p class="review-list-item__name">Strobe Level</p>
        <p class="review-list-item__value">{{strobeLevel}}</p>
      </div>
      <div class="review-list-item__tag">
        <p class="review-list-item__name">Rating</p>
        <p class="review-list-item__value">{{rating}}</p>
      </div>
      <div class="review-list-item__tag">
        <p class="review-list-item__name">Sound Level</p>
        <p class="review-list-item__value">{{soundLevel}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    soundLevel: {
      type: Number,
    },
    strobeLevel: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
  },
};
</script>

<style scoped>
.review-list-item {
  padding: 10px 5px;
  margin: 5px 0px;
  background-color: white;
}

.review-list-item__content {

}

.review-list-item__tags {
  display: flex;
  align-items: center;
}
.review-list-item__tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  color: white;
  padding: 2.5px 5px;
  margin: 2.5px 5px;
}
.review-list-item__value {
  margin-left: 3px;
}
.review-list-item__content {
  
}
</style>