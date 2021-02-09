<template>
<div class="character">
  <img src="../assets/me.png" alt="Perfil">
  <p>Experiencia: {{currentExperience}}</p>
  <p>Puesto: {{role}}</p>
  <button class="button" @click="increaseExperience">Aumentar valor</button>
  <button class="button" @click="decreaseExperience">Reducir valor</button>
</div>
  
</template>

<script>
export default {
  name: "Character",
  props: {
    experience: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data(){
    return {
      currentExperience: this.experience
    }
  },
  computed: {
    role() {
      return this.currentExperience >= 20 ? "Master" : this.currentExperience >= 15 ? "Expert" : this.currentExperience >= 10 ? "Senior" : this.currentExperience >= 5 ? "Middle" : "Junior"
    }
  },
  methods: {
    increaseExperience(){
      if(this.currentExperience<20)
        this.currentExperience++
    },
    decreaseExperience(){
      if(this.currentExperience>1)
        this.currentExperience--
    }
  }
}
</script>

<style scoped lang="scss">
.character{
  margin: 10px auto;
  width: 80%;
  img{
    width: 250px;
  }
  .button{
    margin: 10px 20px;
    background-color: #71c4eb;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    box-shadow: 2px 2px 4px #888;
  }
}
</style>