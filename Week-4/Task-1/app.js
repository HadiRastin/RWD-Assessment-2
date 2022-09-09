const app = Vue.createApp({
  data() {
    return {
      products:
      [
        {
          name:'banana',
          price:20
        },
        {
          name:'Apple',
          price:10
        },
        {
          name:'Orange',
          price:15
        },
        {
          name:'tomato',
          price:25
        },


      ],

      message: 'Hello world!',
      showComment:false,
      showName:false,
      showProducts:false,
    };
  },

  methods:{
    setShowComment(){
      this.showComment = !this.showComment;
    },

    setShowName(){
      this.showName = !this.showName;
    },

    setShowProducts(){
      this.showProducts =! this.showProducts;

    }
  }
});

app.mount('#app');
