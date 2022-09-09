import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ShowComments from './components/ShowComments.vue';
import BaseContainer from './components/Slots/BaseContainer.vue';
import BaseButton from './components/Slots/BaseButton.vue';


const app = createApp(App);
app.use(router);
app.use(store);

app.component('show-comments', ShowComments);
app.component('base-container', BaseContainer);
app.component('base-button', BaseButton);


app.mount('#app');
