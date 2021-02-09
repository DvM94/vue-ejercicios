<template>
  <div class="card">
    <section class="image">
      <img alt="Vue logo" src="../assets/logo.png" />
    </section>
    <div class="text">
      <h1>Esto es un título</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        accusantium molestias quo consequuntur corporis illo libero, ex
        architecto dolore ut facere repellendus assumenda vero nostrum sint
        corrupti fugit est qui.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: 20px auto;
  width: 500px;
  display: flex;
  justify-content: center;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 4px 4px 5px #888;
  .image {
    padding: 0 20px;
    width: 200px;
    display: flex;
    align-items: center;
  }
  .text {
    padding: 0 20px;
    width: 200px;
  }
}
</style>