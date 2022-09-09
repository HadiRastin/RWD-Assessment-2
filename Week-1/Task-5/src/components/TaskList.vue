<template>
  <ul>
    <the-task
      v-for="singleTask in tasks"
      :key="singleTask.data"
      :task="singleTask.task"
      :data="singleTask.date"
      @delete="$emit('delete', $event)"
    >
    </the-task>
  </ul>
</template>


<script>
import TheTask from './TheTask.vue';

export default {
  components: {
    'the-task': TheTask,
  },

  props: ['tasks'],
  emits:['delete']
};
</script>

<style>
</style>