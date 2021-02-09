<template>
  <h1>Bienvenido al primer contacto con Vue.js</h1>
  <div class="cards">
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style lang="scss">
.cards{
  width: 100%;
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>