<template>
  
    <base-container class="top">
      <base-button @click="$emit('swap')"> Observe Products </base-button>
      <base-button @click="$emit('swap')"> Add more Products </base-button>
    </base-container>
  
</template>

<script>
export default {
  emits: ['swap'],
};
</script>

<style scoped>

.top {
  background-color: rgb(103, 80, 206);
  text-align: center;
}

</style>