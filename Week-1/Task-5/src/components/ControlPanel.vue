<template>
  <base-container class="top">
    <base-button @click="$emit('change')"> Planned Task </base-button>
    <base-button @click="$emit('change')"> Add Task </base-button>
  </base-container>
</template>

<script>
export default {
  emits: ['change'],
};
</script>

<style scoped>
.top {
  text-align: center;
}
</style>