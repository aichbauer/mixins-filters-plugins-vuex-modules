import Vue from 'vue';
import Vuex from 'vuex';

// import your modules
import auth from './auth';
import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  // add your modules to the store
  modules: {
    auth,
    products,
  },
});
