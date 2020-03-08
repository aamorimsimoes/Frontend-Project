<template>
  <header class="header">
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

</style>