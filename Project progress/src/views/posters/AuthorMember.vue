<template>
<h2>{{ posterTitle }}</h2>
  
    
    <ul>
      <single-author
        v-for="author in authorMembers"
        :key="author.id"
        :name="author.name"
        :affiliation="author.affiliation"
      ></single-author>
    </ul>
</template>

<script>
import SingleAuthor from "../Authors/SingleAuthor.vue";

export default {
  components: {
    "single-author": SingleAuthor,
  },

  props: ["posterId"],

  computed: {
    posterTitle() {
      const selectedPoster = this.$store.state.posters.find(
        (poster) => poster.id === this.posterId
      );
      return selectedPoster.title;
    },

    authorMembers() {
      const selectedPoster = this.$store.state.posters.find(
        (poster) => poster.id === this.posterId
      );
      const selectedAuthorMembers = [];

      for (const member of selectedPoster.authors) {
        const selectedAuthor = this.$store.state.authors.find(
          (author) => author.name === member
        );
        selectedAuthorMembers.push(selectedAuthor);
      }

      return selectedAuthorMembers;
    },
  },

  methods: {
    populateAthors(posterId) {
      const selectedPoster = this.$store.state.posters.find(
        (poster) => poster.id === posterId
      );
      const selectedAuthorMembers = [];
      for (const member of selectedPoster.authors) {
        const selectedAuthor = this.$store.state.authors.find(
          (author) => author.name === member
        );
        selectedAuthorMembers.push(selectedAuthor);
      }
      this.authorMembers = selectedAuthorMembers;
      this.posterTitle = selectedPoster.title;
    },
  },
};
</script>

<style scoped>

h2{
  text-align: center;
  margin:1rem auto;
  width:50%;
  color:rgb(174, 12, 223);

}

ul{
  list-style: none;
  width:30%;
  margin:0 auto;
}
</style>