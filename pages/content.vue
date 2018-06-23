<template>
  <article class="container content">
    <info
      :title="data.title"
      :description="data.description"
      :strobeLevel="data.strobe_average"
      :soundAvg="data.sound_avg"
      :ratingAvg="data.rating_avg"
    />
    <reviews-list
      :list="data.reviews"
    />
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import Info from '~/components/Info.vue';
import ReviewsList from '~/components/ReviewsList';

export default {
  layout: 'default',
  components: {
    Info,
    ReviewsList,
  },
  computed: {
    ...mapGetters({
      data: 'content/data',
    }),
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
</style>
