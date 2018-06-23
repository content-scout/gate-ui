<template>
  <a href="/content" class="result-list-item__anchor">
    <div class="result-list-item">
      <h3 class="result-list-item__title">{{title}}</h3>
    </div>
  </a>
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
  border-radius: 2px;
  border: 1px solid grey;
}

.result-list-item__anchor {
  text-decoration: none;
  color: initial;
}


</style>