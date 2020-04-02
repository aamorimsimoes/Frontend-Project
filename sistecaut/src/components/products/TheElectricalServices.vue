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
          title: "products.page.eletricServs",
          bodyContent: ["products.eletricServs.bodyContent00"],
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