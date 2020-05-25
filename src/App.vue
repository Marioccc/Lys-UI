<template>
  <div id="app">
    <lys/>
    <lys-tree/>
  </div>
</template>

<script>
import Lys from './components/LysForm'
import LysTree from './components/LysTree'

export default {
  name: 'App',
  components: {
    Lys,
    LysTree
  }
}
</script>

<style>
</style>
