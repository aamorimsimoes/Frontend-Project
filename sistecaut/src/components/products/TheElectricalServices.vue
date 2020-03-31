<template>
  <div class="generalDimensions">
    <Card
      v-for="card in news"
      :key="card.id"
      :title="card.title"
      :bodyContent="card.bodyContent"
      :imgSource="card.imgSource"
    />
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard";

export default {
  name: "ElectricalServices",
  components: {
    Card
  },
  data() {
    return {
      news: [
        {
          imgSource: "news/beachPollution.jpg",
          id: "title00",
          title: "",
          bodyContent: [],
        },
        {
          imgSource: "news/pme-excelencia.jpg",
          id: "title01",
          title: "Sistecaut Lda. destacada com prémio PME Excelência",
          bodyContent: [
            "A Sistecaut Lda. foi destacada no ano de 2018 com o estatuto de PME Excelência, que evidencia o desempenho e competência da gestão, alicerçados numa estratégia de crescimento sustentado e suportada em sólidos indicadores económicos e financeiros."
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>>
