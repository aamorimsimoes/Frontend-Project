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
          title: "products.page.specialMach",
          bodyContent: ["products.specialMach.bodyContent00"],
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