import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter, faFacebookF, faLinkedinIn, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCloud, faPencil, faCircleChevronLeft, faCircleChevronRight, faArrowUp, faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';
import App from './App.vue';

library.add(faTwitter);
library.add(faFacebookF, faLinkedinIn, faPinterestP);
library.add(faLightbulb, faComment);
library.add(faCloud, faPencil, faCircleChevronLeft, faCircleChevronRight, faArrowUp, faEllipsis);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
