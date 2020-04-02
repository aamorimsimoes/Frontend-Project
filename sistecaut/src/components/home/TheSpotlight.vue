<template>
  <div class="newsContainer">
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
import Card from "~/components/general/ReusableCard";

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
};
</script>

<style lang="scss">
.newsContainer {
  display: flex;
  justify-content: space-around;
}
</style>
