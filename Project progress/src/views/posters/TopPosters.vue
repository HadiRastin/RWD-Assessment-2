<template>
  <poster-list :sortPosters="sortPosters"> </poster-list>
</template>

<script>
import PosterList from "./PosterList.vue";

export default {
  data() {
    return {
      sortedPosters: this.$store.state.posters,
    };
  },

  components: {
    "poster-list": PosterList,
  },

  computed: {
    sortPosters() {
      return this.$store.getters.sortPosters;
    },
  },
};
</script>

<style>
</style>