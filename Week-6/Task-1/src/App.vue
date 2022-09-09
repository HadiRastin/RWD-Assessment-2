<template>
  <header>
    <h2>Please fill out the form (Week 6-Task 1)</h2>
  </header>

  <section>
    <form @submit.prevent="RecivedInfo">
      <div class="email">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="enteredEmail"
        />
      </div>

      <div class="password">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="enteredPassword"
        />
      </div>

      <div class="btn">
        <button>Submit Form</button>
      </div>

      <div>
      <p>{{ enteredEmail }}</p>
      <p>{{ enteredPassword }}</p>
    </div>

    <div v-if="showResults">
      <h2>Submitted Email address is : {{ enteredEmail }}</h2>
      <h2>Submitted Password is : {{ enteredPassword }}</h2>
    </div>
    </form>

    
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      showResults: false,
    };
  },

  methods: {
    RecivedInfo(recivedEmail, recievedPassword) {
      this.email = recivedEmail;
      this.password = recievedPassword;
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
  width: 30%;
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

input{
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 1rem;;
}
.btn {
  text-align:center;
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
  background-color: rgba(241, 18, 18, 0.445)
}

</style>