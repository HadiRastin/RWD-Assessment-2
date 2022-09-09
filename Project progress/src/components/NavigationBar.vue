<template>
  <section>
      <nav>
        <div>
          <router-link :to="{ name: 'Home' }"> Home </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'Contact' }"> Contact Us</router-link>
        </div>

        <div>
          <router-link :to="{ name: 'AuthorList' }">Authors</router-link>
        </div>

        <div>
          <router-link :to="{ name: 'PosterList' }"> Poster </router-link>
        </div>

        <div  v-if="this.$store.state.user">
          <base-button class="LogOutBtn" @click="handlelogOut"> log out</base-button>
        </div>

        
        <div v-if="this.$store.state.user === null">
          <router-link :to="{ name: 'LogIn' }"> Log In </router-link>
        </div>

        <div v-if="this.$store.state.user === null">
          <router-link :to="{ name: 'Register' }"> Register </router-link>
        </div> 
        
      </nav>
  </section>
</template>

<script>
export default {
  methods: {
    handlelogOut() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

nav {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav div a {
  text-decoration:none;
  color:black;
  font-weight: 700;
  font-size: 0.8rem;
}

a:hover,
a:active {
  color: red;
}

.LogOutBtn{
  background-color:transparent;
  border-style: none;
}

</style>