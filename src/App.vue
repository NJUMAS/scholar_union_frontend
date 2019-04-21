<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";
export default {
  name: 'App',
  components: {HomePage}
}
</script>

<style>
</style>
