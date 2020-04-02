<template>
  <div class="newsContainer">
    <Card
      v-for="card in news"
      :key="card.id"
      :title="card.title"
      :bodyContent="card.bodyContent"
      :link="card.link"
      :imgSource="card.imgSource"
    />
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard";

export default {
  name: "Spotlight",
  components: {
    Card
  },
  data() {
    return {
      news: [
        {
          imgSource: "news/beachPollution.jpg",
          id: "title00",
          title: "spotlight.news0.title",
          bodyContent: [
            "spotlight.news0.bodyContent00",
            "spotlight.news0.bodycontent01",
            "spotlight.news0.bodycontent02"
          ],
          link:
            "https://www.facebook.com/sistecaut.aveiro/posts/480890865799104"
        },
        {
          imgSource: "news/pme-excelencia.jpg",
          id: "title01",
          title: "spotlight.news1.title",
          bodyContent: ["spotlight.news1.bodyContent00"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.newsContainer {
  display: flex;
  justify-content: space-around;
}
</style>
