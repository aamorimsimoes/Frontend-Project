<template>
  <div class="productSpecial">
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
  name: "SpecialMachines",
  components: {
    Card
  },
  data() {
    return {
      products: [
        {
          imgSource: "",
          id: "special00",
          title: "Máquinas Especiais",
          bodyContent: ["A Sistecaut, Sistemas Técnicos de Automação, Lda desenvolve e constrói equipamentos de acordo com as necessidades específicas de cada indústria ou processo, visando aumentar a eficiência dos mesmos, garantindo um elevado nível de qualidade do produto e retorno do investimento. Incorpora nos mesmos as mais recentes tecnologias, visando a diminuição de custos de montagem, teste, inspeção e manutenção. Dispõe de um corpo técnico apto a desenvolver, testar e integrar, diversos componentes e funcionalidades de acordo os requisitos identificados, assim como, posteriormente a formar os operadores e garantir bom uso dos equipamentos."],
        },
        {
          imgSource: "",
          id: "special01",
          title: "",
          bodyContent: []
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  .productSpecial {
    background-color: lightgreen;
  }
</style>>