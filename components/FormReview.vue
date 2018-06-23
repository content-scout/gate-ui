<template>
  <div>
    <form @submit="onSubmit">
      <input />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
    },
    content: {

    },
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
