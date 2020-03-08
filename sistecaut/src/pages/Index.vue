<template>
  <Layout>
    <Slicer />
    <Spotlight />  
  </Layout>
</template>

<script>
import NavBar from '../components/NavBar'
import Slicer from '../components/Slider'
import Spotlight from '../components/Spotlight'

export default {
  components: {
    NavBar,
    Slicer,
    Spotlight
  },
  name: 'Sistecaut'
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
