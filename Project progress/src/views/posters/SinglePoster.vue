<template>
  <base-container>
    <li>
      <h3>{{ title }}</h3>
      <p>{{ abstract }}</p>
      <p>Score: {{ score }}</p>

      <base-button class="routeClass">
      <router-link  :to="{ name: 'AuthorMember', params: { posterId: this.id } }"
        >View Authors</router-link
      >
      </base-button>
      
      <base-button @click="addScore"> Like</base-button>
      <base-button @click="decreaseScore"> DisLike </base-button>
      <base-button @click="setshowCommentBox"> Comment </base-button>
      <base-button @click="toggleShowComments">Show Others' Comments</base-button>

      <ul v-if="areCommentsVisible">
        <show-comments
          v-for="comment in $store.state.posters.find(
            (poster) => poster.id === this.id
          ).comment"
          :key="comment"
          :CommentMessage="comment"
        >
        </show-comments>
      </ul>

      <form v-if="showCommentBox" @submit.prevent="addComment">
        <div>
          <label for="comment"> Comment </label>
          <input
            type="text"
            id="comment"
            name="comment"
            v-model.trim="enteredComment"
          />
        </div>

        <base-button> Submit Comment</base-button>
      </form>
    </li>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      enteredComment: null,
      areCommentsVisible: false,
      showCommentBox: false,
    };
  },

  props: ["id", "title", "abstract", "score"],

  computed: {
    comments() {
      console.log(
        this.$store.state.posters.find((poster) => poster.id === this.id)
          .comment
      );
      return this.$store.state.posters.find((poster) => poster.id === this.id)
        .comment;
    },
  },

  methods: {
    addScore() {
      this.$store.commit("addScore", this.id);
    },
    decreaseScore() {
      this.$store.commit("decreaseScore", this.id);
    },

    addComment() {
      //console.log(this.$store.state.user.email);
      //console.log(this.enteredComment);

      this.$store.commit("addComment", this.id, this.enteredComment);
      //console.log(this.$store.state.posters.find((poster) => poster.id === this.id).comment);
      this.enteredComment = null;
    },

    toggleShowComments() {
      this.areCommentsVisible = !this.areCommentsVisible;
      console.log("toggle");
      console.log(this.areCommentsVisible);
    },

    setshowCommentBox() {
      this.showCommentBox = !this.showCommentBox;
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0 1.5rem 0;
  text-align: center;
  font-weight: bold;
}

p {
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.routeClass a{
  color:black;
}

button{
  font-size:0.5rem;
}

form{
  margin-top:1rem;
}


</style>