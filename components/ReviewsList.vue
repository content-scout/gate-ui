<template>
  <div>
    <reviews-list-item
      v-for="(item,i) in list"
      :soundLevel="item.sound_level"
      :strobeLevel="item.strobe_level"
      :rating="item.rating"
      :key="i"
    />
  </div>
</template>

<script>
import ReviewsListItem from '~/components/ReviewsListItem.vue';

export default {
  components: {
    ReviewsListItem,
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