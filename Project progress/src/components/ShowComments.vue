<template>
  <li>
    <h3>{{CommentMessage }}</h3>
    <h2>We are in show message</h2>
  </li>
</template>

<script>
export default {
  props: ['CommentMessage']
};
</script>

<style scoped>
h3{
  color:black;
}
</style>