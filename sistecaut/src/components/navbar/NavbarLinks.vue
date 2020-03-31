<template>
  <nav class="nav notVisibleOnMobile">
    <!-- Logo Image -->
    <g-image
      alt="STAlogo"
      src="~/assets/icons/staFull.png"
      width="70px"
      height="70px"
      fit="outside"
    />
    <!-- Links -->
    <g-link
      :class="currentLocation === '/' ? 'nav__link activeNavLink' : 'nav__link'"
      to="/"
      >Início</g-link
    >
    <g-link
      :class="
        currentLocation === '/Products'
          ? 'nav__link activeNavLink'
          : 'nav__link'
      "
      to="/Products"
      >Produtos</g-link
    >
    <g-link
      :class="
        currentLocation === '/Contacts'
          ? 'nav__link activeNavLink'
          : 'nav__link'
      "
      to="/Contacts"
      >Contactos</g-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavbarLinks",
  data() {
    return {
      nPages: 3, // number of available pages
      currentPage: 0, // current page showing
      currentLocation: window.location.pathname
    };
  }
};
</script>

<style>
.nav__link {
  text-decoration: none;
  font-size: 30px;
  color: black;
}

.nav__link:visited {
  text-decoration: none;
  color: var(--grey-color);
}
.nav__link:hover {
  color: #f08013;
}
.activeNavLink {
  text-decoration: none !important;
  color: #f08013 !important;
}
</style>
