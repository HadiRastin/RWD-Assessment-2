<template>
  <ul>
    <single-poster
      v-for="poster in posters"
      :key="poster.id"
      :id="poster.id"
      :title="poster.title"
      :abstract="poster.abstract"
      :score="poster.score"
    ></single-poster>
  </ul>
</template>

<script>
import SinglePoster from "./SinglePoster.vue";

export default {
  props: ["sortPosters"],

  components: {
    "single-poster": SinglePoster,
  },

  computed: {
    posters() {
      return this.$store.state.posters;
    },
  },
};
</script>

<style scoped>
ul{
  list-style: none;
}
</style>