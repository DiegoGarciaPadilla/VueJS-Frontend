<template>
<img src="../assets/banner.jpg" alt="Pasteleros"  width="100%">
<div class="contenido">
  <h1>La Fontaine Bake Factory</h1>
  <hr>
  <p>La Fontaine Bake Factory se basa en la pastelería tradicional francesa y a partir de ella hace una propuesta inovadora combinando lo tradicional con lo moderno, consiguiendo sabores tan familiares como los de antaño y tan impresionantes como los del mañana.</p>
  <table style="width: 100%">
    <tr>
      <th>Dirección</th>
      <th>Horario</th>
      <th>Teléfono</th>
    </tr>
    <tr>
      <td>Calle Balderas #27, Centro<br>Histórico CDMX, Del. Cuauhtémoc,<br> C.P. 06040 México.</td>
      <td>Lun-Vie: <i>8:00 - 22:00</i><br>Sab-Dom: <i>8:00 - 18:00</i></td>
      <td>+52 55 5211 4004</td>
    </tr>
  </table>
  <img src="../assets/pasteleros.png" alt="Pasteleros"  width="60%" style="margin-top: 50px">
</div>
</template>

<script>
export default {
  name: 'HomeComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

table {
  margin: 30px 0;
}
</style>
