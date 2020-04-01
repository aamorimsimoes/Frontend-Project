<template>
  <div>
    <!-- Navbar for the Desktop View -->
    <div class="navHeader notVisibleOnMobile">
      <!-- <nav class="nav notVisibleOnMobile"> -->
      <NavbarLinks />
    </div>

    <!-- Navbar for the Mobile View -->
    <div class="visibleOnMobile">
      <HamburgerIcon class="hamburguer" v-on:click="hamburgerClick" />
    </div>

    <!-- Menu that opens on hamburguer click -->
    <div :class="'naveSider visibleOnMobile ' + showAnimation">
      <NavbarLinks />
    </div>

    <!-- Layout Component (and its children) -->
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<script>
import NavbarLinks from "./NavbarLinks";
import HamburgerIcon from "@/assets/svgs/menu.svg";

export default {
  components: {
    NavbarLinks,
    HamburgerIcon
  },
  name: "Navbar",
  data() {
    return {
      showAnimation: ""
    };
  },
  methods: {
    hamburgerClick: function() {
      console.log("HAMBURGUER CLICK");
      if (this.showAnimation.length > 0) {
        this.showAnimation = "";
      } else {
        this.showAnimation = "naveSiderSlider";
      }
    }
  }
};
</script>

<style>
.navHeader {
  display: flex;
  justify-content: space-around;

  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  transition: 1s ease-in-out;
  background-color: white;
}

.layout {
  margin-top: 5vh;
  height: 95vh;
}

.notVisibleOnMobile {
  display: none;
  transition: 2s ease-in-out;
}

.visibleOnMobile {
  display: inherit;
  transition: 1s ease-in-out;
}

.hamburguer {
  width: 3vh;
  height: 3vh;
  float: right;
  transition: 2s ease-in-out;
  position: fixed;
  right: 5vh;
  top: 1vh;
  z-index: 10000;
  cursor: pointer;
}

.naveSiderSlider {
  transform: translate(0, 0) !important;
}

.naveSider {
  height: 100vh;
  width: 50%;
  background: white;
  z-index: 1000;
  position: fixed;
  top: 5vh;
  right: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  font-family: Iosevka Term Nerd Font Complete;
  transition: 1s ease-in-out;
  transform: translate(100%, 0);
}

.navSiderImage {
  height: 50px;
  width: 50px;
  padding-top: 8vh;
  align-self: center;
}

.nav__link {
  font-family: Geomanist-Complete-Desktop;
  font-weight: bold;
}

@media (min-width: 1025px) {
  .navHeader {
    font-size: xx-large;
    height: 10vh;
  }

  .nav__link {
    margin-left: 20px;
    margin-right: 20px;
  }

  .layout {
    margin-top: 10vh;
    height: 90vh;
  }

  .notVisibleOnMobile {
    display: initial;
  }

  .visibleOnMobile {
    display: none;
  }
}
</style>
