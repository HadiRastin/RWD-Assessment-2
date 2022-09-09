<template>
  <base-container>
    <li>
      <h2> Name: {{ name }}</h2> 
      <h2> Affiliation: {{ affiliation }}</h2>
      <h2> Score: {{ score }}</h2>

      <base-button @click="followAuthor"> Follow </base-button>
    </li>
  </base-container>
</template>

<script>
export default {
  props: ["name", "affiliation", 'score'],

  methods:{
    followAuthor()
    {

    }
  }
};
</script>

<style scoped>

h2, p{
  margin: 0.5rem 0;
  font-size:1rem;
}

</style>