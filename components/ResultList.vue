<template>
  <section>
    <pre>{{JSON.stringify(list)}}</pre>
    <result-list-item
      v-for="item in list"
      :title="item.title"
      :key="item.url"
    />
  </section>
</template>

<script>
import ResultListItem from '~/components/ResultListItem.vue';

export default {
  components: {
    ResultListItem,
  },
  props: {
    list: {
      type: Array,
    },
  },
}
</script>

<style>
</style>
