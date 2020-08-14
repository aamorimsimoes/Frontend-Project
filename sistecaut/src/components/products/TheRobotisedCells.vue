<template>
  <div>
    <span class="titleSize">
      <FormattedMessage id="products.page.product01" />
    </span>
    <p>
      <FormattedMessage id="products.product01.description" />
    </p>
    <div class="productsWrapper">
      <Card
        class="productsCards"
        v-for="card in products"
        :key="card.id"
        :title="card.title"
        :bodyContent="card.bodyContent"
        :imgSource="card.imgSource"
      />
    </div>
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard";
import FormattedMessage from "~/languageProvider/FormattedMessage";

export default {
  name: "RobotisedCells",
  components: {
    Card,
    FormattedMessage
  },
  data() {
    return {
      products: [
        {
          imgSource: "products/robotisedCells/robotisedCells_card00.jpg",
          id: "robot00",
          title: "products.product01.card00.title",
          bodyContent: ["products.product01.card00.content"]
        },
        {
          imgSource: "products/robotisedCells/robotisedCells_card01.jpg",
          id: "robot01",
          title: "products.product01.card01.title",
          bodyContent: ["products.product01.card01.content"]
        },
        {
          imgSource: "products/robotisedCells/robotisedCells_card02.jpg",
          id: "robot02",
          title: "products.product01.card02.title",
          bodyContent: ["products.product01.card02.content"]
        }
      ]
    };
  }
};
</script>
