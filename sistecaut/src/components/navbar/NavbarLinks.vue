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
      >
        <FormattedMessage id="navbar.home" />
      </g-link>
      <g-link
        :class="
          currentLocation === '/Products'
            ? 'navBarTitles activeNavLink'
            : 'navBarTitles'
        "
        to="/Products"
      >
        <FormattedMessage id="navbar.products" />
      </g-link>
      <g-link
        :class="
          currentLocation === '/Contacts'
            ? 'navBarTitles activeNavLink'
            : 'navBarTitles'
        "
        to="/Contacts"
      >
        <FormattedMessage id="navbar.contacts" />
      </g-link>
      <LanguageSwitcher />
    </div>
  </nav>
</template>
<script>
import LanguageSwitcher from "../../languageProvider/LanguageSwitcher";
import FormattedMessage from "../../languageProvider/FormattedMessage";
export default {
  name: "NavbarLinks",
  components: { LanguageSwitcher, FormattedMessage },
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
