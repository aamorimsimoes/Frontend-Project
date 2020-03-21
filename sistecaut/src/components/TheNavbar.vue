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
a:link {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: none;
}
.header {
  /* background-color: lightblue; */
  display: flex;
  font-family: Iosevka Term Nerd Font Complete;
  font-size: xx-large;
  height: 80px;
  justify-content: space-between;
  padding-left: 1vh;
  text-align: center;
}
.nav__link {
  margin-left: 20px;
  margin-right: 20px;
}
</style>