<template>
  <div>
    <div>
      <label>
        Rating
        <input v-model="rating" />
      </label>
      <label>
        Strobe Level
        <input v-model="strobeLevel" />
      </label>
      <label>
        Sound Level
        <input v-model="soundLevel"/>
      </label>
      <label>
        Review
        <textarea v-model="review" />
      </label>
      <a href="/thanks">Submit</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSubmit: {
      default: () => undefined,
      type: Function,
    },
  },
  data() {
    return {
      rating: 0,
      strobeLevel: 0,
      soundLevel: 0,
      review: '',
    };
  },
}
</script>

<style>
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
}

input {
  margin: 0px 10px;
}

a {
  color: initial;
  text-decoration: none;
  padding: 5px 10px;
  margin: 5px 0px;
  display: block;
  background-color: lightgray;
  border-radius: 3px;
}
</style>
