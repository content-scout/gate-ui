<template>
  <article class="container">
    <form-review />
    <!-- <a class="review__button" href="/thanks">Get a Thanks</a> -->
  </article>
</template>

<script>
import FormReview from '~/components/FormReview.vue';

export default {
  components: {
    FormReview,
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.review__button {
  display: block;
  color: white;
  text-decoration: none;
  padding: 2.5px 5px;
}
</style>
