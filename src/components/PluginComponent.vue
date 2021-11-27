<template>
  <div>
    <h1>{{ h1 }}</h1>
    <!-- use the directive and the global method from our plugin -->
    <button v-my-directive="" @click="myGlobalMethod">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  props: {
    h1: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
