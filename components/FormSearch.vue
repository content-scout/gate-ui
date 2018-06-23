<template>
  <section class="form-search">
      <input v-model="term" placeholder="Search movie" />
      <button @click="onSubmit">Search</button>
  </section>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
    }
  },
  data() {
    return {
      term: '',
    };
  },
}
</script>

<style>
.form-search {
  display: flex;
  align-items: center;
}
</style>