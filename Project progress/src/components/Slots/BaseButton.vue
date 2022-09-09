<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #17a504;
  border: 1px solid #0dcc1d;
  color: black;
  border-radius: 1.5rem;
  font-weight: bold;
}

button:hover {
  background-color: #af5019;
}
</style>