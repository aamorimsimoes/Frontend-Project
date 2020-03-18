<template>
  <div>
    <Navbar />
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '../components/TheNavbar'

export default {
  metaInfo: {
    title: 'Sistecaut, Lda'
  },
  components: {
    Navbar
  }
}

</script>

<style>
body {
  
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

}
</style>
