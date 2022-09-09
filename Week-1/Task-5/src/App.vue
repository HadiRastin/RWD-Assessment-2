<template>
  <the-header></the-header>

  <control-panel @change="toggleTopPnal"> </control-panel>

  <task-list v-if="isGridVisible" :tasks="tasks" @delete="deleteTask">
  </task-list>

  <the-form v-if="!isGridVisible" @add-task="addSubmitedTask"></the-form>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TaskList from './components/TaskList.vue';
import ControlPanel from './components/ControlPanel.vue';
import TheForm from './components/TheForm.vue';

export default {
  components: {
    'the-header': TheHeader,
    'task-list': TaskList,
    'control-panel': ControlPanel,
    'the-form': TheForm,
  },

  data() {
    return {
      tasks: [
        {
          task: 'study Vue Course',
          date: '2022',
        },

        {
          task: 'Get fit',
          date: '2025',
        },
      ],

      selectedTask: null,
      isGridVisible: true,
    };
  },

  methods: {
    deleteTask(selectedId) {
      this.tasks = this.tasks.filter((task) => task.id !== selectedId);
    },

    toggleTopPnal() {
      this.isGridVisible = !this.isGridVisible;
    },

    addSubmitedTask(enteredTask, enteredDate) {
      const addeddTask = {
        task: enteredTask,
        date: enteredDate,
      };
      this.tasks.push(addeddTask);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  box-sizing: border-box;
  font-size: 18px;
}
</style>