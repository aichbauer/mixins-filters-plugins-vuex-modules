<template>
  <div>
    <h1>{{ h1 }}</h1>
    <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
    Auth Loading: {{ $store.state.auth.loading }}
    <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
    <div v-if="!$store.state.auth.loading">
      <br />
      <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
      Id: {{ $store.state.auth.user.id }}
      <br />
      <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
      Id: {{ $store.state.auth.user.username }}
      <br />
    </div>
    <br />
    <br />
    <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
    Products Loading: {{ $store.state.products.loading }}
    <br />
      <!-- Here we can access the state vie state.<module-name>.<field-of-module-state> -->
      <ul :key="product.id" v-for="product in $store.state.products.list">
        <li>
          {{ product.name }}
        </li>
      </ul>
    <br />
    <!--
      Here we can use the namespaced mutation with namespace
      e.g. auth and mutation name e.g. login
      as auth/login

      this works for actions as well

      second parameter is the payload
    -->
    <button @click="$store.commit('auth/login', { id: 1, username: 'username' })">
      Login
    </button>
    <!--
      access the namespaced method products/add
      second parameter is the payload
    -->
    <button @click="$store.commit('products/add', { id: 1, name: 'name' })">
      Load Products
    </button>
  </div>
</template>

<script>
export default {
  name: 'VuexComponent',
  props: {
    h1: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
