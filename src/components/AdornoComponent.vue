<template>
  <li>
    <img :src="'../assets/' + imgSource" alt="Sabor" width="200px" />
    <p>{{ adorno }}</p>
    <p><i>$ {{ precio }}</i></p>
  </li>
</template>

<script>
export default {
  name: 'AdornoComponent',
  props: { adorno: String, precio: String, imgSource: String }
}
</script>

<style scoped>
li {
  width: 30%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  cursor: pointer;

  font-size: 20px;
}

li:hover {
    transform: scale(1.1);
    box-shadow: 16px 19px 33px 0px rgba(0,0,0,0.2);
  }
</style>
