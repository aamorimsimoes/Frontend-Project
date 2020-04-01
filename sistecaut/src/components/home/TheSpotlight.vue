<template>
  <div class="newsContainer">
    <!-- <div :key="project.title" v-for="project in projects" class="project">
      <g-image :alt="project.title" id="spotlightImg" :src="require(`../assets/img/${project.img}`)" />
    </div> -->
    <Card 
      v-for="(card) in news" 
      :key="card.id"
      :title="card.title"
      :bodyContent="card.bodyContent"
      :link="card.link" 
      :imgSource="card.imgSource"
    />
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard"
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
  name: "Spotlight",
  components: {
    Card
  },
  data() {
    return {
      news: [
        {
          imgSource:"news/beachPollution.jpg",
          id: "title00",
          title: "1ª Atividade Ambiental Sistecaut Lda.",
          bodyContent: ["É com orgulho que a Sistecaut Lda. anuncia o resultado da primeira iniciativa ambiental com intuito de promover a solidariedade e sustentabilidade ambiental realizada no passado dia 14 de Setembro, no paredão molhe norte e praia adjacente, em São Jacinto. Foram recolhidos cerca de 6m^3 de lixo, maioritariamente plásticos.","Aproveitámos também esta iniciativa para fazer um convívio e fomentar o espírito de equipa.","A Sistecaut Lda. agrade o apoio da junta de freguesia de São Jacinto, em especial, ao presidente António Aguiar, por ter facultado um local para o convívio e a todos os colaboradores que participaram e tornaram esta atividade num sucesso!"],
          link: "https://www.facebook.com/sistecaut.aveiro/posts/480890865799104"
        },
        { 
          imgSource: "news/pme-excelencia.jpg",
          id: "title01",
          title: "Sistecaut Lda. destacada com prémio PME Excelência",
          bodyContent: ["A Sistecaut Lda. foi destacada no ano de 2018 com o estatuto de PME Excelência, que evidencia o desempenho e competência da gestão, alicerçados numa estratégia de crescimento sustentado e suportada em sólidos indicadores económicos e financeiros."]
        }
      ]
    }
  },
  // data() {
  //   return {
  //     projects: [
  //       {
  //         title: "Proj1",
  //         img: "myImg.jpg"
  //       }
  //     ]
  //   };
  // }
  
};
</script>

<style lang="scss">
.newsContainer {
  display: flex;
  justify-content: space-around;

  // component dimensions
  width: var(--desktop-width);
  height: var(--desktop-height);
}

/* 
    this css class will be used in every img html element
    it centralizes the image to the size of its container
    and stretches it to fit everything
*/

// #spotlightImg {
//   filter: blur(5px) grayscale(80%); // apply filter blur, grayscale and adjust its intensity
//   background-position: center;
//   background-size: cover;
//   height: 95vh;
//   object-fit: cover;
//   object-position: right;
//   overflow: hidden;
//   width: 100vw;
// }

@media (min-width: 1025px) {
  
}
</style>
