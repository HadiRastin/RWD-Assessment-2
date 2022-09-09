<template>
  <header>
    <h2>Please fill out the form (Week 6-Task 1)</h2>
  </header>

  <section>
    <form @submit.prevent="RecivedInfo">
      <div>
        <h2>What colors do you like?</h2>
        <div>
          <input
            id="Red"
            name="Red"
            type="checkbox"
            value="Red"
            v-model="interest"
          />
          <label for="Red">Red</label>
        </div>


        <div>
          <input
            id="Green"
            name="Green"
            type="checkbox"
            value="Green"
            v-model="interest"
          />
          <label for="Green">Green</label>
        </div>


        <div>
          <input
            id="blue"
            name="blue"
            type="checkbox"
            value="blue"
            v-model="interest"
          />
          <label for="blue">blue</label>
        </div>
      </div>

      <div class="btn">
        <button>Submit Form</button>
      </div>


      <div class="results" v-if="showResults">
        <h2>Submitted Intrested colors</h2>
        <h3 v-for="color in interest" :key="color"> {{ color }}</h3>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      interest: [],
      showResults: false,
    };
  },

  methods: {
    RecivedInfo() {
      this.showResults = !this.showResults;
      this.intrest= [];
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
}

form label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
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

input[type='checkbox'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

h2{
  font-size:2rem;
  font-weight: bold;
}

h3{
  font-size:1.5rem;
  font-weight: bold;
}
</style>