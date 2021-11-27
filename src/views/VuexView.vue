<template>
  <div>
    <!-- use the h1 property on the component -->
    <VuexComponent h1="Vuex" />
  </div>
</template>

<script>
// @ is an alias to /src
import VuexComponent from '@/components/VuexComponent.vue';

export default {
  name: 'VuexView',
  components: {
    VuexComponent,
  },
};
</script>
