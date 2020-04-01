<template>
  <div class="productElectrical">
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
  name: "ElectricalServices",
  components: {
    Card
  },
  data() {
    return {
      products: [
        {
          imgSource: "",
          id: "electrical00",
          title: "Serviços Elétricos",
          bodyContent: ["A Sistecaut, Sistemas Técnicos de Automação, Lda desenvolve e integra quadros elétricos de controlo ou potencia de acordo com as necessidades específicas de cada indústria ou processo, visando aumentar a eficiência dos mesmos, garantindo um elevado nível de qualidade do produto e retorno do investimento. Dispõe de um corpo técnico apto a desenvolver, testar e integrar, diversos componentes e funcionalidades de acordo os requisitos identificados, assim como, posteriormente a programar e formar os operadores , garantindo bom uso dos equipamentos."],
        },
        {
          imgSource: "",
          id: "electrical01",
          title: "",
          bodyContent: []
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  .productElectrical {
    background-color: lightblue;
  }  
</style>>