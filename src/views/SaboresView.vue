<template>
<div class="contenido">
  <h2>Sabores</h2>
  <hr>
  <ul class="productos">
    <SaborComponent v-for='sabor in $store.state.pasteles' v-bind:key='sabor' :sabor='sabor.nombre' :precio='sabor.precio' :imgSource='sabor.img' />
  </ul>
</div>
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import SaborComponent from '@/components/SaborComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { SaborComponent, FooterComponent },
  name: 'SaboresView'
}
</script>

<style scoped>
.contenido {
  width: 60%;
  margin: 50px auto;
}

.contenido h1 {
  font-size: 40px;
}

.contenido h2 {
  font-size: 28px;
}

.contenido p {
  line-height: 30px;
  text-align: left;
}

.productos {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
