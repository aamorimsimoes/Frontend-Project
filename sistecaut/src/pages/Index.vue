<template>

  <Layout>
    <CarouselWrapper />
    <About />
    <Spotlight />
    <Footer />  

<div class="main" id="section1">
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
  <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
  <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div>

<div class="main" id="section2">
  <h2>Section 2</h2>
  <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
</div>

  </Layout>
</template>

<script>

import NavBar from '@/components/TheNavbar'
import CarouselWrapper from '@/components/carousel/CarouselWrapper'
import Spotlight from '@/components/TheSpotlight'
import Footer from '@/components/TheFooter'
import About from '@/components/TheAbout'

export default {
  components: { // insert here the name of the component
    NavBar,
    CarouselWrapper,
    Spotlight,
    Footer,
    About
  },
  name: 'Sistecaut'
}
</script>

<style>

.home-links a {
  margin-right: .1rem;
}
</style>

