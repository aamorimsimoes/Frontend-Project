<template>
  <section class="carousel">
  <ol class="carousel__viewport">
      <Carousel current="carousel__slide1" previous='#carousel__slide3' next='#carousel__slide2'/>
      <Carousel current="carousel__slide2" previous='#carousel__slide1' next='#carousel__slide3'/>
      <Carousel current="carousel__slide3" previous='#carousel__slide2' next='#carousel__slide1'/>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <CarouselNavigation />
      <CarouselNavigation />
      <CarouselNavigation />
    </ol>
  </aside>
  </section> 
</template>

<script>
import Carousel from './Carousel';
import CarouselNavigation from './CarouselNavigation';

export default {
  name: 'CarouselWrapper',
  components: {
    Carousel,
    CarouselNavigation
  }
}
</script>

<style>
@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent; /* thumb and track color */
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
}

/* to be removed */
.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  background-clip: content-box;
  border: .25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform .1s;
}

</style>