<template>
  <div class="productRobotised">
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
          title: "products.page.robotCells",
          bodyContent: ["products.robotCells.bodyContent00"],
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