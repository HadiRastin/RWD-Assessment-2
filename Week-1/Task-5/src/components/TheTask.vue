<template>
  <base-container>
    <h2>{{ task }}</h2>
    <h3>{{ data }}</h3>
    <base-button @click="$emit('delete', id)"> Delete Task </base-button>
  </base-container>
</template>


  

<script>
export default {
  props: ['task', 'data'],
  emits: ['delete'],
};
</script>

<style scoped>

</style>