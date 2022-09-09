<template>

  <label for="search">Please enter Author name</label>
  <input type="text" name="search" id="search" v-model.trim="enteredName" />
  <div class="submittButton">
    <base-button  @click="startSearch"> Search </base-button>
  </div>
  

  <div v-if="foundedPoster">
    <ul>
      <single-poster
        v-for="poster in foundedPoster"
        :key="poster.id"
        :id="poster.id"
        :title="poster.title"
        :abstract="poster.abstract"
        :score="poster.score"
      ></single-poster>
    </ul>
  </div>
</template>

<script>
import SinglePoster from "../posters/SinglePoster.vue";

export default {
  components: {
    "single-poster": SinglePoster,
  },
  data() {
    return {
      enteredName: "",
      foundedPoster: [],
    };
  },

  methods: {
    startSearch() {
      for (const poster of this.$store.state.posters) {
        for (const author of poster.authors) {
          if (author === this.enteredName) {
            this.foundedPoster.push(poster);
          }
        }
        //const selectedPoster = poster.authors.find((author) =>  author=== this.enteredName);
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.submittButton {
  text-align: center;
}

ul{
  list-style: none;
}
</style>