import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram, faPinterest, faTwitter, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';

library.add(faInstagram, faPinterest, faTwitter, faLinkedin);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
