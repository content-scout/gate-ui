<template>
  <div class="result-list-item">
    <h3 class="result-list-item__title">{{title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
.result-list-item {
  padding: 10px 5px;
  margin: 5px 0px;
}

.result-list-item__title {

}
</style>