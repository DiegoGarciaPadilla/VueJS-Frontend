<template>
<div class="contenido">
  <h2>Adornos</h2>
  <hr>
  <ul class="productos">
    <AdornoComponent v-for='adorno in $store.state.adornos' v-bind:key='adorno' :adorno='adorno.nombre' :precio='adorno.precio' :imgSource='adorno.img' />
  </ul>
</div>
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import AdornoComponent from '@/components/AdornoComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { AdornoComponent, FooterComponent },
  name: 'AdornosView'
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
