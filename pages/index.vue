<template>
  <article class="container">
    <div>
      <h1>Content Scout</h1>
      <form-search :onSubmit="search"/>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormSearch from '~/components/FormSearch.vue'

export default {
  components: {
    FormSearch
  },
  computed: {
    ...mapGetters({
      term: 'results/term',
      data: 'results/data',
      loading: 'results/loading',
    }),
  },
  methods: {
    ...mapActions({
      search: 'results/getList',
    }),
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
