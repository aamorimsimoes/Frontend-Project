<template>
  <div>
    <div class="navHeader">
      <nav class="nav notVisibleOnMobile">
        <g-image
          src="~/assets/icons/logo (1).png"
          width="50px"
          height="50px"
          fit="outside"
        />
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/Products">Products</g-link>
        <a href="#about" class="nav__link">About</a>
        <a href="#footer" class="nav__link">Footer</a>
        <a href="#projects" class="nav__link">Spotlight</a>
      </nav>
    </div>
    <div :class="'naveSider visibleOnMobile ' + showAnimation">
      <g-image src="~/assets/icons/logo (1).png" class="navSiderImage" />
      <g-link v-on:click="hamburgerClick" class="nav__link" to="/">Home</g-link>
      <g-link v-on:click="hamburgerClick" class="nav__link " to="/Products">Products</g-link>
      <a v-on:click="hamburgerClick" href="#about" class="nav__link ">About</a>
      <a v-on:click="hamburgerClick" href="#footer" class="nav__link ">Footer</a>
      <a v-on:click="hamburgerClick" href="#projects" class="nav__link ">Spotlight</a>
    </div>
    <div class="visibleOnMobile">
      <g-image
        v-on:click="hamburgerClick"
        src="~/assets/icons/logo (1).png"
        class="hamburguer"
      />
    </div>
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showAnimation: "",
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
a:link {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
a:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
  color: black;
}
a:active {
  text-decoration: none;
  color: black;
}

.navHeader {
  display: flex;
  font-family: Iosevka Term Nerd Font Complete;
  justify-content: space-around;
  text-align: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
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
  width: 40%;
  background: grey;
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
