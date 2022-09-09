<template>
  <header>
    <h2>Please fill out the form (Week 6-Task 3)</h2>
  </header>

  <section>
    <form @submit.prevent="RecivedInfo">
      <div class="State">
        <label for="State">Which State Do you reside?</label>
        <select id="State" name="State" v-model="enteredState">
          <option
            v-for="state in states"
            :key="state.value"
            :value="state.value"
          >
            {{ state.text }}
          </option>
        </select>
      </div>

      <div class="btn">
        <button>Submit Form</button>
      </div>

      <div class="results" v-if="showResults">
        <h2>The selected state is</h2>
        <h3>{{ enteredState }}</h3>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredState: "NSW",
      showResults: false,
      states: [
        { text: "New South Wales", value: "NSW" },
        { text: " Victoria", value: "VIC" },
        { text: "Queensland", value: "QA" },
        { text: "South Australia", value: "SA" },
        { text: "Western Australia", value: "WA" },
        { text: "Tasmania", value: "TA" },
      ],
    };
  },

  methods: {
    RecivedInfo() {
      this.showResults = !this.showResults;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
  font-size: 18px;
}

header {
  background-color: rgb(175, 122, 224);
  text-align: center;
  padding: 1.5rem 0;
}

form {
  margin: 3rem auto;
  width: 70%;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #f08f8f;
  text-align: center;
}

.State{
  text-align: center;
  
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
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

h2 , label{
  font-size: 2rem;
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

select {
  display: block;
  width: 30%;
  margin-top: 0.5rem;
}
</style>