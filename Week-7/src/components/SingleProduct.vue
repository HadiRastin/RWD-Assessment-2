<template>
  <base-container>
    <h2>{{ name }}</h2>
    <h3>{{ phone }}</h3>
    <h3>{{ email }}</h3>
    <base-button @click="$emit('delete', id)"> Delete Product </base-button>
    <base-button @click="setShowComment"> Show Comment </base-button>
    <h2 v-if="showComment">{{ comment }}</h2>
  </base-container>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },

    showComment: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    setShowComment() {
      this.$emit('change-show', this.id);
    },
  },
  emits: ['delete', 'change-show'],
};
</script>

<style scoped>

</style>