<template>
  <div>
    <!--
      Here we can use the filter
      that we imported in our component

      to use a filter we use the | "pipe symbol"

      so in our example h1 | capitalize | removeEverySecondCharacter
      we pipe the output from the previous filter in the next filter
      so our property h1 is used as input (value) in the capitalize filter
      and the output of the capitalize filter is used as input (value)
      for the removeEverySecondCharacter filter
      and the output of the last filter is displayed
    -->
    <h1>{{ h1 | capitalize | removeEverySecondCharacter }}</h1>
  </div>
</template>

<script>
// importing the filter
import capitalize from '@/filters/capitalize';
import removeEverySecondCharacter from '@/filters/removeEverySecondCharacter';

export default {
  name: 'FilterComponent',
  props: {
    h1: String,
  },
  // make filter accessible on a component
  filters: {
    capitalize,
    removeEverySecondCharacter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
