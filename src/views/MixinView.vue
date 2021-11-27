<template>
  <div>
    <!-- use the h1 property on the component -->
    <MixinComponent h1="Mixin" />
  </div>
</template>

<script>
// @ is an alias to /src
import MixinComponent from '@/components/MixinComponent.vue';

export default {
  name: 'MixinView',
  components: {
    MixinComponent,
  },
};
</script>
