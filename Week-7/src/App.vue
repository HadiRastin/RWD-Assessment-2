<template>
  <the-header></the-header>

  <control-panel @swap="toggleTopPnal"> </control-panel>

  <product-grid
    v-if="isGridVisible"
    :products="products"
    @delete="deleteProduct"
    @change-show="toggleShowComment"
  >
  </product-grid>
  
  <the-form v-if="!isGridVisible" @add-product="addSubmitedProduct"></the-form>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ProductGrid from './components/ProductGrid.vue';
import ControlPanel from './components/ControlPanel.vue';
import TheForm from './components/TheForm.vue';

export default {
  components: {
    'the-header': TheHeader,
    'product-grid': ProductGrid,
    'control-panel': ControlPanel,
    'the-form': TheForm,
  },

  data() {
    return {
      products: [
        {
          id: '1',
          name: 'Lap top',
          phone: '048 11236 56',
          model: 'Lenove 2020',
          email: 'alex@deakin.edu.au',
          comment:"They are so named because they can be practically placed on a person's lap when being used. Today, laptops are used in a variety of settings, such as at work, in education, for playing games, web browsing, for personal multimedia, and for general home computer use.",
          showComment:false,
        },

        {
          id: '2',
          name: 'TV',
          phone: '047 11566 89',
          model: 'Samsung 2022',
          email: 'Sarah@deakin.edu.au',
          comment:"Another major advantage that iPhones have over Samsung phones is the longevity of the devices. Although Samsung now offers four years of major Android updates for its flagships and mid-range phones, iPhones can easily last for five to six years. However, there's one important caveat to this.",
          showComment:false,
        },
      ],

      selectedproduct: null,
      isGridVisible: true,
    };
  },

  methods: {
    deleteProduct(selectedId) {
      this.products = this.products.filter((product) => product.id !== selectedId);
    },

    toggleTopPnal() {
      this.isGridVisible = !this.isGridVisible;
    },


    addSubmitedProduct(enteredName, enteredPhone, enteredModel, enteredEmail, enteredComment) 
    {
      const addeddProduct = 
      {

        id: new Date().toISOString(),
        name: enteredName,
        phone: enteredPhone,
        model: enteredModel,
        email: enteredEmail,
        comment: enteredComment,
        showComment:false
      };
      this.products.push(addeddProduct);
    },

    toggleShowComment(selectedID){
        const selectedProduct = this.products.find((product) => product.id === selectedID);
        selectedProduct.showComment = ! selectedProduct.showComment;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  box-sizing: border-box;
  font-size: 18px;
}

</style>