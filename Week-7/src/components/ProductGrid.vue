<template>
  <ul>
    <single-product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :phone="product.phone"
      :model="product.model"
      :email="product.email"
      :comment="product.comment"
      :showComment="product.showComment"
      @delete="$emit('delete', $event)"
      @change-show="$emit('change-show', $event)"
    >
    </single-product>
  </ul>
</template>


<script>
import SingleProduct from './SingleProduct.vue';

export default {
  components: {
    'single-product': SingleProduct,
  },

  props: ['products'],
  emits:['delete']
};
</script>

<style>
</style>