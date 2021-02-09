<template>
  <div class="cards">
    <Card/>
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Cards',
  components: {
    Card
  }
}
</script>