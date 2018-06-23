<template>
  <section class="form-search">
      <input
        v-model="term"
        placeholder="Search movie"
        @keyup.enter="handleSubmit"
      />
      <button @click="handleSubmit">Search</button>
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
  methods: {
    handleSubmit() {
      this.onSubmit(this.term)
    },
  },
}
</script>

<style>
.form-search {
  display: flex;
  align-items: center;
}
</style>