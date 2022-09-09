<template>
  <base-container>
    <h2>Log In</h2>

    <form @submit.prevent="submitLogIn">
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
          @blur="validateEnteredPassword"
        />
      </div>
      <p v-if="enteredPasswordValidity === 'invalid'">
        Password Field is still empty!
      </p>

      <div class="submittButton">
        <base-button> Log In </base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      enteredPasswordValidity: "waiting",
    };
  },

  methods: {
    submitLogIn() {
      try {
        this.$store.dispatch("login", {
          email: this.enteredEmail,
          password: this.enteredPassword,
        });
        this.$router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    },

    validateEnteredPassword() {
      if (this.enteredPassword === "") {
        this.enteredPasswordValidity = "invalid";
      } else {
        this.enteredPasswordValidity = "valid";
      }
    },
  },
};
</script>


<style scoped>
h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0 1.5rem 0;
  text-align: center;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.submittButton{
  text-align: center;
}
</style>