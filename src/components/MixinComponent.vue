<template>
  <div>
    <h1>{{ h1 }}</h1>
    <!-- use the hello method from the mixin -->
    <button @click="hello">Click Me!</button>
  </div>
</template>

<script>
// import the mixin
import myMixin from '@/mixins/myMixin';

export default {
  name: 'MixinComponent',
  props: {
    h1: String,
  },
  // make the properties and methods from the mixin accessible within the component
  mixins: [
    myMixin,
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
