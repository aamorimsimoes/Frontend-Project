<template>
  <div class="generalDimensions productRobotised">
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
  name: "RobotisedCells",
  components: {
    Card
  },
  data() {
    return {
      products: [
        {
          imgSource: "",
          id: "robot01",
          title: "Células Robotizadas",
          bodyContent: ["A Sistecaut, Sistemas Técnicos de Automação, Lda analisa as necessidades específicas de cada indústria ou processo, verificando onde pode ser aplicada uma solução robotizada para melhoria da produtividade e qualidade do mesmo, garantindo um retorno elevado dos investimentos. Esta tecnologia liberta os meios humanos para tarefas de maior valor acrescentado e garante uma produção estável. A Sistecaut, Lda. dispõe também de um corpo técnico apto a desenvolver, testar, integrar e programar qualquer equipamento, assim como posteriormente a formar os operadores e garantir bom uso dos equipamentos."],
        },
        {
          imgSource: "",
          id: "robot00",
          title: "",
          bodyContent: ["test"],
        },
        {
          imgSource: "",
          id: "",
          title: "",
          bodyContent: ["test1"],
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  .productRobotised {
    background-color: lightgray;
  }
</style>>