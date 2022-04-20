<template>
  <HomeComponent />
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { HomeComponent, FooterComponent },
  name: 'HomeView'
}
</script>
