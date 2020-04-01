<template>
  <div class="generalDimensions productMachining">
    <Card 
      v-for="(card) in products" 
      :key="card.id"
      :title="card.title"
      :bodyContent="card.bodyContent" 
      :imgSource="card.imgSource"
    />
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard"

export default {
  name: "MachiningServices",
  components: {
    Card
  },
  data() {
    return {
      products: [
        {
          imgSource: "products/machiningServices/drill.jpg",
          id: "services00",
          title: "Serviços de Maquinação",
          bodyContent: ["A Sistecaut, Sistemas Técnicos de Automação, Lda. dispõe aos seus clientes serviços de maquinação de peças únicas e em série em vários materiais tais como: aço, alumínio, latão, cobre, bronzes e ligas de plástico, entre outros. Garantimos acompanhamento, controlo de processo, qualidade, assim como prazos de entrega."],
        },
        {
          imgSource: "",
          id: "services01",
          title: "",
          bodyContent: []
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  // .productMachining {
  //   background-color: lightsalmon;
  //   background-position: center;
  //   background-size: cover;
  //   height: 40%;
  //   object-fit: cover;
  //   object-position: right;
  //   overflow: hidden;
  //   width: 20%;
  // }
</style>>