<template>
  <div>
    <!-- use the h1 property on the component -->
    <FilterComponent h1="filter" />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterComponent from '@/components/FilterComponent.vue';

export default {
  name: 'FilterView',
  components: {
    FilterComponent,
  },
};
</script>
