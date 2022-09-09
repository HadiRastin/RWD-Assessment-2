<template>
  <ul>
    <single-author
      v-for="author in authors"
      :key="author.id"
      :name="author.name"
      :affiliation="author.affiliation"
      :score="author.score"
    ></single-author>
  </ul>
</template>

<script>
import SingleAuthor from "./SingleAuthor.vue";
export default {
  components: {
    "single-author": SingleAuthor,
  },

  computed: {
    authors() {
      return this.$store.state.authors;
    },
  },
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>