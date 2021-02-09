<template>
  <h1>Componente reactivo</h1>
  <Character experience="1" />
</template>

<script>
import Character from "@/components/Character.vue";

export default {
  name: "Reactividad",
  components: {
    Character,
  },
};
</script>