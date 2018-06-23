<template>
  <header class="header">
    <logo />
  </header>
</template>

<script>
import Logo from '~/components/Logo';

export default {
  components: {
    Logo,
  },
}
</script>

<style>
.header {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
}
</style>