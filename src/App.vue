<template>
  <div id="app">
    <h1>Lys UI</h1>
    <lys-form/>
    <lys-tree/>
  </div>
</template>

<script>
import LysForm from './components/LysForm'
import LysTree from './components/LysTree'

export default {
  name: 'App',
  components: {
    LysForm,
    LysTree
  }
}
</script>

<style>
</style>
