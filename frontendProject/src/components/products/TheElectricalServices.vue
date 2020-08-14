<template>
  <div>
    <span class="titleSize">
      <FormattedMessage id="products.page.product03" />
    </span>
    <p>
      <FormattedMessage id="products.product03.description" />
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
  name: "ElectricalServices",
  components: {
    Card,
    FormattedMessage
  },
  data() {
    return {
      products: [
        {
          imgSource: "products/electricalServices/eletricalServices_card00.jpg",
          id: "robot00",
          title: "products.product03.card00.title",
          bodyContent: ["products.product03.card00.content"]
        },
        {
          imgSource: "products/electricalServices/eletricalServices_card01.jpg",
          id: "robot01",
          title: "products.product03.card01.title",
          bodyContent: ["products.product03.card01.content"]
        }
      ]
    };
  }
};
</script>
