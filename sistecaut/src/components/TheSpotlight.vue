<template>
  <div id="projects">
    <li :key = "project.title"  v-for="project in projects" class="project">
      <img id="spotlightImg" :src="require(`../assets/img/${project.img}`)">
    </li>
  </div>
</template>

<script>

 /*
 * A key of an element must be a number or a string;
 * From the looks of it, you want to add multiple spotlights, therefore
 * to assure that you always give different keys, you should take
 * advantage of the v-for you are doing and give the title of each
 * project element to that key;
 * You were really close with the image src, I can see that now you 
 * get the difference between a simple src and a :src, which is the
 * same as v-bind:src apparently, giving you access to the component
 * data. But you forgot that the image "myImg.jpg" is not only inside
 * the assets folder, but also at its subfolder "img";
 */

export default {
  name: 'Spotlight',
  data () {
    return {
      projects: [
        {
          title:"Proj1", 
          img:"myImg.jpg", 
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  
  #randomText {
    background-color:aquamarine;
    width: 100%; 
    height: 100vh;
  }

  /* this css class will be used in every img html element
    it centralizes the image to the size of its container
    and stretches it to fit everything
  */
  img {
    filter: blur(5px) grayscale(80%); // apply filter blur, grayscale and adjust its intensity 
    background-position: center;
    background-size: cover;
    height: 100vh;
    object-fit: cover;
    object-position: right;
    overflow: hidden;
    width: 100vw; 
  }
</style>