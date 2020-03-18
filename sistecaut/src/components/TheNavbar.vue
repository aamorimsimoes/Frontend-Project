<template>
  <header class="header">
    <nav class="nav">
      
      <g-image src="~/assets/icons/logo (1).png" width="50px" height="50px" fit="outside"/>
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/Products">Products</g-link>
      <a  href="#footer" class="nav__link">Footer</a>
      <a  href="#projects" class="nav__link" >Spotlight</a>

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
  align-items: center;
  background-color: lightblue;
  display: flex;
  height: 80px;
  justify-content: space-between;
}
.nav__link {
  margin-left: 20px;
  margin-right: 20px;
}
</style>