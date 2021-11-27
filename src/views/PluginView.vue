<template>
  <div>
    <!-- use the h1 property on the component -->
    <PluginComponent h1="Plugin" />
  </div>
</template>

<script>
// @ is an alias to /src
import PluginComponent from '@/components/PluginComponent.vue';

export default {
  name: 'PluginView',
  components: {
    PluginComponent,
  },
};
</script>
