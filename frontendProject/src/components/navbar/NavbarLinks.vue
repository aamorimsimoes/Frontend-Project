<template>
  <nav class="navBarLinks">
    <!-- Logo Image SMALL -->
    <div class="STAlogo mobileOnly">
      <g-image
        v-on:click="goHome"
        alt="Orangelogo"
        src="~/assets/icons/staFull.png"
        width="20px"
        height="20px"
        fit="outside"
      />
    </div>
    <!-- Logo Image MEDIUM -->
    <div class="STAlogo tabletOnly">
      <g-image
        v-on:click="goHome"
        alt="Orangelogo"
        src="~/assets/icons/staFull.png"
        width="50px"
        height="50px"
        fit="outside"
      />
    </div>
    <!-- Logo Image BIG -->
    <div class="STAlogo desktopOnly">
      <g-image
        v-on:click="goHome"
        alt="Orangelogo"
        src="~/assets/icons/staFull.png"
        width="70px"
        height="70px"
        fit="outside"
      />
      <h2 class="logoText">Orange Company Lda.</h2>
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
      currentLocation: this.$router.history.current.path,
    };
  },
  methods: {
    goHome: function() {
      if (this.currentLocation !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.logoText {
  font-family: var(--main-font-family);
  font-weight: var(--font-weight);
}

.STAlogo {
  float: left;
  padding: 8px 2vw;
  cursor: pointer;
}
.STAlinks {
  float: right;
  padding: 4vh 2vh;
}
</style>
