<template>
  <div class="productMachining">
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
          title: "products.page.machServs",
          bodyContent: ["products.machServs.bodyContent00"],
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