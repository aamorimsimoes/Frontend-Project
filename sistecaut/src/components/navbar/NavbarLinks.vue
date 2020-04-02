<template>
  <nav class="navBarLinks">
    <!-- Logo Image SMALL -->
    <div class="STAlogo mobileOnly">
      <g-image
        alt="STAlogo"
        src="~/assets/icons/staFull.png"
        width="20px"
        height="20px"
        fit="outside"
      />
    </div>
    <!-- Logo Image MEDIUM -->
    <div class="STAlogo tabletOnly">
      <g-image
        alt="STAlogo"
        src="~/assets/icons/staFull.png"
        width="50px"
        height="50px"
        fit="outside"
      />
    </div>
    <!-- Logo Image BIG -->
    <div class="STAlogo desktopOnly">
      <g-image
        alt="STAlogo"
        src="~/assets/icons/staFull.png"
        width="70px"
        height="70px"
        fit="outside"
      />
    </div>
    <!-- Links -->
    <div class="STAlinks">
      <g-link
        :class="
          currentLocation === '/'
            ? 'navBarTitles activeNavLink'
            : 'navBarTitles'
        "
        to="/"
        >Início</g-link
      >
      <g-link
        :class="
          currentLocation === '/Products'
            ? 'navBarTitles activeNavLink'
            : 'navBarTitles'
        "
        to="/Products"
        >Produtos</g-link
      >
      <g-link
        :class="
          currentLocation === '/Contacts'
            ? 'navBarTitles activeNavLink'
            : 'navBarTitles'
        "
        to="/Contacts"
        >Contactos</g-link
      >
      <LanguageSwitcher />
    </div>
  </nav>
</template>
<script>
import LanguageSwitcher from "../../languageProvider/LanguageSwitcher";
export default {
  name: "NavbarLinks",
  components: { LanguageSwitcher },
  data() {
    return {
      nPages: 3, // number of available pages
      currentPage: 0, // current page showing
      currentLocation: this.$router.history.current.path
    };
  }
};
</script>
<style>
.STAlogo {
  float: left;
  padding: 8px 2vw;
}
.STAlinks {
  float: right;
  padding: 2vh 2vh;
}
</style>
