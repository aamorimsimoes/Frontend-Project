<template>
  <div>
    <!-- Navbar for the Desktop or Tablet View -->
    <div class="navBarContainer mobileNot">
      <NavbarLinks />
    </div>

    <!-- Navbar for the Mobile View -->
    <div class="mobileOnly">
      <HamburgerIcon class="hamburguer" v-on:click="hamburgerClick" />
    </div>

    <!-- Menu that opens on hamburguer click -->
    <div :class="'naveSider visibleOnMobile ' + showAnimation">
      <NavbarLinks />
    </div>

    <!-- Layout Component (and its children) -->
    <div class="generalComponent">
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
