<template>
  <section class="form-search">
      <input
        class="form-search__input"
        v-model="term"
        placeholder="Search movie"
        @keyup.enter="handleSubmit"
      />
      <button
        type="button"
        @click="handleSubmit"
        class="form-search__button"
      >
        Search
      </button>
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
  line-height: 1.2;
}

.form-search__input {
  outline: 0;
  font-size: 16px;
}

.form-search__button {
  background-color: gray;
  color: black;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
}
</style>