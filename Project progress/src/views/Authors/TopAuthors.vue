<template>
  <author-list :sortAuthors="sortAuthors"> </author-list>
</template>

<script>
import AuthorList from "./AuthorList.vue";

export default {
  components: {
    "author-list": AuthorList,
  },

  computed: {
    sortAuthors() {
      return this.$store.getters.sortAuthors;
    },
  },
};
</script>

<style>
</style>