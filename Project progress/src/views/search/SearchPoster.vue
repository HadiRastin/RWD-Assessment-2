<template>
  <label for="">Please enter poster Title</label>
  <input type="text" v-model.trim="enteredTitle" />
  <div class="submittButton">
    <base-button @click="startSearch">Search </base-button>
  </div>

  <div v-if="foundedPoster">
    <single-poster
      :id="foundedPoster.id"
      :title="foundedPoster.title"
      :abstract="foundedPoster.abstract"
    >
    </single-poster>
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
      enteredTitle: "",
      foundedPoster: null,
    };
  },

  methods: {
    startSearch() {
      this.foundedPoster = this.$store.state.posters.find(
        (poster) => poster.title === this.enteredTitle
      );
      console.log(this.foundedPoster);
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

</style>
