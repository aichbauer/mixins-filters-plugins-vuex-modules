import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MixinView from '../views/MixinView.vue';
import FilterView from '../views/FilterView.vue';
import PluginView from '../views/PluginView.vue';
import VuexView from '../views/VuexView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/mixin',
    name: 'MixinView',
    component: MixinView,
  },
  {
    path: '/filter',
    name: 'FilterView',
    component: FilterView,
  },
  {
    path: '/plugin',
    name: 'PluginView',
    component: PluginView,
  },
  {
    path: '/vuex',
    name: 'VuexView',
    component: VuexView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
