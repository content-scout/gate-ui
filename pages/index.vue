<template>
  <article class="container">
    <div>
      <h1>Content Scout</h1>
      <form-search :onSubmit="search" />
      <loader v-if="loading" />
      <result-list v-else :list="data" />
    </div>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormSearch from '~/components/FormSearch.vue';
import Loader from '~/components/Loader.vue';
import ResultList from '~/components/ResultList.vue';

export default {
  components: {
    FormSearch,
    Loader,
    ResultList,
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
