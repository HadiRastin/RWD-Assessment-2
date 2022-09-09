<template>
  <base-container>
    <form @submit.prevent="submitRegisteraion">
      <div class="name">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          v-model.trim="enteredName"
          @blur="validateEnteredName"
        />
      </div>
      <p v-if="enteredNameValidity === 'invalid'">Name Filed is still empty!</p>

      <div class="age">
        <label for="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          v-model.number="enteredAge"
          @blur="validateEnteredAge"
        />
      </div>

      <p v-if="enteredAgeValidity === 'invalid'">
        Age should be between 10 to 120 years!
      </p>

      <div class="email">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="enteredEmail"
        />
      </div>

      <div class="field">
        <label for="field">What is the question about?</label>
        <select id="field" name="field" v-model="enteredFiled">
          <option value="Posters">Posters</option>
          <option value="LogIn">Log in Issues</option>
          <option value="Security">Security</option>
          <option value="Sponsers">Sponsers</option>
          <option value="others">others</option>
        </select>
      </div>

      <div>
        <h3>What are your specialized filed?</h3>
        <div>
          <input
            id="interest-Chemistry"
            name="interest"
            type="checkbox"
            value="Chemistry"
            v-model="interest"
          />
          <label for="interest-Chemistry">Chemistry</label>
        </div>

        <div>
          <input
            id="interest-Math"
            name="interest"
            type="checkbox"
            value="Math"
            v-model="interest"
          />
          <label for="interest-Math">Math</label>
        </div>


        <div>
          <input
            id="interest-Engineering"
            name="interest"
            type="checkbox"
            value="Engineering"
            v-model="interest"
          />
          <label for="interest-Engineering">Engineering</label>
        </div>
      </div>
      <div>
        <h3>How do you hear about Us?</h3>
        <div>
          <input
            id="how-Google"
            name="how-Google"
            type="radio"
            value="Google"
            v-model="how"
          />
          <label for="how-Google">Google </label>
        </div>
        <div>
          <input
            id="how-WOM"
            name="how-WOM"
            type="radio"
            value="WOM"
            v-model="how"
          />
          <label for="how-WOM">Word Of Mouth</label>
        </div>
        <div>
          <input
            id="how-YouTube"
            name="how-YouTube"
            type="radio"
            value="YouTube"
            v-model="how"
          />
          <label for="how-YouTube">YouTube</label>
        </div>
      </div>
      <div class="submittButton">
        <base-button>Save Data</base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: null,
      enteredEmail: "",
      enteredFiled: "Engineering",
      interest: [],
      how: null,
      confrim: false,
      enteredNameValidity: "waiting",
      enteredAgeValidity: "waiting",
    };
  },

  methods: {
    submitRegisteraion() {
      this.enteredName = "";
      this.enteredAge = null;
      this.enteredEmail = "";
    },

    validateEnteredName() {
      if (this.enteredName === "") {
        this.enteredNameValidity = "invalid";
      } else {
        this.enteredNameValidity = "valid";
      }
    },

    validateEnteredAge() {
      if (this.enteredAge <= 10 || this.enteredAge >= 120) {
        this.enteredAgeValidity = "invalid";
      } else {
        this.enteredAgeValidity = "valid";
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


label, h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
select {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.submittButton {
  text-align: center;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
</style>