<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
    <p class="loader-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Loading',
    }
  },
}
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.loader {
  width:100px;
  height:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:10px 20px;
}

@keyframes transform {
  50% {
    transform:rotatez(180deg);
    border-radius:55%;
  }
  100% {
    transform:rotatez(360deg);
  }
}

.loader::before {
  content:"";
  color:white;
  height:30px;
  width:30px;
  background:transparent;
  border-radius:10%;
  border:25px inset orange;
  animation:transform 1s infinite ease-in-out;
}

@keyframes dots {
  0%   { content: ''; }
  25%  { content: '.'; }
  50%  { content: '..'; }
  75%  { content: '...'; }
  100% { content: ''; }
}

.loader-text:after {
  content: "";
  animation: dots steps(1,end) 1s infinite;
}
</style>