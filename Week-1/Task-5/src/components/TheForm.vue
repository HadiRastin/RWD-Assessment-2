<template>
  <section>
    <div class="container">
      <form @submit.prevent="handleTask">
        <div id="Name">
          <label for="Name">What is you task</label>
          <input type="Name" v-model="enteredTask" />
        </div>

        <div id="phone">
          <label for="phone">Date expected to finish</label>
          <input type="tel" name="phone" id="phone" v-model="enteredDate" />
        </div>

        <button>Add Task</button>
      </form>
    </div>
  </section>
</template>

<script scoped>
export default {
  data() {
    return {
      enteredTask: '',
      enteredDate: '',
    };
  },
  methods: {
    handleTask() {
      this.$emit('add-task', this.enteredTask, this.enteredDate);
      this.enteredTask = '';
      this.enteredDate = '';
    },
  },

  emits: ['add-task'],
};
</script>

<style scoped>
form {
  margin: 3rem auto;
  width: 30%;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #f08f8f;
  text-align: center;
}

.btn {
  text-align: center;
}

button {
  border: 2px solid #1db469;
  background-color: #13aa2c;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
}

button:hover {
  background-color: rgba(241, 18, 18, 0.445);
}

label {
  font-size: 1rem;
  font-weight: bold;
}

input,
textarea {
  display: block;
  width: 100%;
  margin-top: 0.1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}
</style>